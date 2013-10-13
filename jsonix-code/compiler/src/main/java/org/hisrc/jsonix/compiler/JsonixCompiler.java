/**
 * Jsonix is a JavaScript library which allows you to convert between XML
 * and JavaScript object structures.
 *
 * Copyright (c) 2010, Aleksei Valikov, Highsource.org
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Aleksei Valikov nor the
 *       names of contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ALEKSEI VALIKOV BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

package org.hisrc.jsonix.compiler;

import java.util.HashMap;
import java.util.IdentityHashMap;
import java.util.Map;

import javax.xml.namespace.QName;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.Validate;
import org.hisrc.jscm.codemodel.expression.JSAssignmentExpression;
import org.hisrc.jscm.codemodel.expression.JSCallExpression;
import org.hisrc.jscm.codemodel.expression.JSMemberExpression;
import org.hisrc.jscm.codemodel.expression.JSObjectLiteral;
import org.hisrc.jscm.codemodel.statement.JSBlock;
import org.hisrc.jsonix.xjc.customizations.PackageMapping;
import org.jvnet.jaxb2_commons.xml.bind.model.MClassInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MElementInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MModelInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MPackageInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MPackaged;
import org.jvnet.jaxb2_commons.xml.bind.model.MPackagedTypeInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MPackagedTypeInfoVisitor;
import org.jvnet.jaxb2_commons.xml.bind.model.MPropertyInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MTypeInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.util.PackageInfoQNameAnalyzer;

public class JsonixCompiler<T, C extends T> {

	final JsonixCode code = new JsonixCode();

	private final MModelInfo<T, C> model;
	private final Map<String, PackageMapping> packageMappings;
	private final Map<String, JsonixModule> modules;
	private final Map<MTypeInfo<T, C>, JSMemberExpression> typeInfoDeclarations = new IdentityHashMap<MTypeInfo<T, C>, JSMemberExpression>();

	public JsonixCompiler(final MModelInfo<T, C> model,
			Map<String, PackageMapping> packageMappings) {
		Validate.notNull(model);
		Validate.notNull(packageMappings);
		this.model = model;
		this.packageMappings = new HashMap<String, PackageMapping>(
				packageMappings);
		this.modules = new HashMap<String, JsonixModule>(packageMappings.size());
	}

	JsonixModule getModule(final MPackaged packaged) {
		final MPackageInfo packageInfo = packaged.getPackageInfo();
		return getModule(packageInfo);
	}

	private JsonixModule getModule(final MPackageInfo packageInfo) {
		String packageName = packageInfo.getPackageName();
		final boolean blankPackage;
		if (StringUtils.isBlank(packageName)) {
			packageName = "";
			blankPackage = true;
		} else {
			blankPackage = false;
		}
		JsonixModule module = this.modules.get(packageName);
		if (module == null) {
			final PackageInfoQNameAnalyzer<T, C> analyzer = new PackageInfoQNameAnalyzer<T, C>(
					this.model);

			final String defaultElementNamespaceURI = analyzer
					.getMostUsedElementNamespaceURI(packageInfo);
			final String defaultAttributeNamespaceURI = analyzer
					.getMostUsedAttributeNamespaceURI(packageInfo);

			PackageMapping packageMapping = packageMappings.get(packageName);

			if (packageMapping == null) {

				packageMapping = new PackageMapping();
				packageMapping.setPackageName(packageName);
				packageMappings.put(packageName, packageMapping);
			}

			if (StringUtils.isBlank(packageMapping
					.getDefaultElementNamespaceURI())) {
				packageMapping
						.setDefaultElementNamespaceURI(defaultElementNamespaceURI);
			}

			if (StringUtils.isBlank(packageMapping
					.getDefaultAttributeNamespaceURI())) {
				packageMapping
						.setDefaultAttributeNamespaceURI(defaultAttributeNamespaceURI);
			}

			if (StringUtils.isBlank(packageMapping.getSpaceName())) {
				packageMapping.setSpaceName(blankPackage ? "generated"
						: packageName.replace('.', '_'));
			}

			if (packageMapping.getDirectory() == null) {
				packageMapping.setDirectory((blankPackage ? "" : packageName
						.replace('.', '/')));

			}

			if (packageMapping.getFileName() == null) {
				packageMapping.setFileName("Mappings.js");

			}
			if (packageMapping.getDeclarationsFileName() == null) {
				packageMapping
						.setDeclarationsFileName("Mappings-Declarations.js");

			}

			if (packageMapping.getStructuresFileName() == null) {
				packageMapping.setStructuresFileName("Mappings-Structures.js");
			}

			module = new JsonixModule(code, packageMapping);
			this.modules.put(packageName, module);
		}
		return module;
	}

	public Map<String, JsonixModule> compile() {

		for (MClassInfo<T, C> classInfo : model.getClassInfos()) {
			JsonixModule module = getModule(classInfo);
			module.c(classInfo.getLocalName());
		}

		for (MTypeInfo<T, C> typeInfo : model.getTypeInfos()) {
			typeInfo.acceptTypeInfoVisitor(new MPackagedTypeInfoVisitor<T, C, Void>() {

				@Override
				public Void visitPackagedTypeInfo(MPackagedTypeInfo<T, C> info) {
					final JSMemberExpression typeInfoDeclaration = getTypeInfoDeclaration(info);
					// final JsonixModule module = getModule(info);
					// module.typeInfos.append(typeInfoDeclaration);
					return null;
				}

				@Override
				public Void visitClassInfo(MClassInfo<T, C> info) {
					super.visitClassInfo(info);
					final JsonixModule module = getModule(info);
					final JSMemberExpression typeInfoDeclaration = getTypeInfoDeclaration(info);
					final JSBlock classInfoBlock = module.properties.block();
					{
						final MClassInfo<T, C> baseTypeInfo = info
								.getBaseTypeInfo();
						if (baseTypeInfo != null) {
							classInfoBlock
									.expression(typeInfoDeclaration
											.p("b")
											.i()
											.args(getTypeInfoDeclaration(baseTypeInfo)));
						}
					}
					{
						// final JSArrayLiteral properties = code.codeModel
						// .array();

						// classInfoBlock.expression(typeInfoDeclaration.p(
						// "properties").assign(properties));
						JSCallExpression ps = typeInfoDeclaration.p("ps").i();

						for (MPropertyInfo<T, C> propertyInfo : info
								.getProperties()) {
							ps = propertyInfo
									.acceptPropertyInfoVisitor(new PropertyInfoVisitor<T, C>(
											JsonixCompiler.this,
											JsonixCompiler.this.code,
											getModule(info), ps));
							// properties.append(propertyInfoExpression);
						}
						classInfoBlock.expression(ps);
					}
					return null;
				}
			});
		}

		for (MElementInfo<T, C> elementInfo : model.getElementInfos()) {
			JsonixModule module = getModule(elementInfo);
			MTypeInfo<T, C> typeInfo = elementInfo.getTypeInfo();
			MTypeInfo<T, C> scope = elementInfo.getScope();
			QName substitutionHead = elementInfo.getSubstitutionHead();

			final JSObjectLiteral value = code.codeModel.object();
			module.e(value);
			JSAssignmentExpression typeInfoDeclaration = getTypeInfoDeclaration(typeInfo);
			QName elementName = elementInfo.getElementName();
			value.append("elementName",
					module.createElementNameExpression(elementName));
			// TODO
			if (typeInfoDeclaration != null) {
				value.append("typeInfo", typeInfoDeclaration);
			}

			if (scope != null) {
				value.append("scope", getTypeInfoDeclaration(scope));
			}
			if (substitutionHead != null) {
				value.append("substitutionHead",
						module.createElementNameExpression(substitutionHead));
			}

		}

		for (JsonixModule module : this.modules.values()) {
			module.build();
		}

		return this.modules;

	}

	public JSMemberExpression getTypeInfoDeclaration(MTypeInfo<T, C> typeInfo) {
		JSMemberExpression typeInfoDeclaration = this.typeInfoDeclarations
				.get(typeInfo);
		if (typeInfoDeclaration == null) {
			typeInfoDeclaration = typeInfo
					.acceptTypeInfoVisitor(new CreateTypeInfoDeclarationVisitor<T, C>(
							this, this.code));
			if (typeInfoDeclaration != null) {
				this.typeInfoDeclarations.put(typeInfo, typeInfoDeclaration);
			} else {
				throw new UnsupportedOperationException(
						"Could not find the type declaration for [" + typeInfo
								+ "].");

			}
		}
		return typeInfoDeclaration;

	}
}
