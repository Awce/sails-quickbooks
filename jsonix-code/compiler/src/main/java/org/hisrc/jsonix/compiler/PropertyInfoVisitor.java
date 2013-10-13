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

import javax.xml.namespace.QName;

import org.hisrc.jscm.codemodel.expression.JSArrayLiteral;
import org.hisrc.jscm.codemodel.expression.JSCallExpression;
import org.hisrc.jscm.codemodel.expression.JSObjectLiteral;
import org.jvnet.jaxb2_commons.xml.bind.model.MAnyAttributePropertyInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MAnyElementPropertyInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MAttributePropertyInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MBuiltinLeafInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MElementPropertyInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MElementRefPropertyInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MElementRefsPropertyInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MElementTypeInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MElementTypeInfos;
import org.jvnet.jaxb2_commons.xml.bind.model.MElementsPropertyInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MMixable;
import org.jvnet.jaxb2_commons.xml.bind.model.MPropertyInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MPropertyInfoVisitor;
import org.jvnet.jaxb2_commons.xml.bind.model.MTypeInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MTyped;
import org.jvnet.jaxb2_commons.xml.bind.model.MValuePropertyInfo;
import org.jvnet.jaxb2_commons.xml.bind.model.MWildcard;
import org.jvnet.jaxb2_commons.xml.bind.model.MWrappable;
import org.jvnet.jaxb2_commons.xml.bind.model.util.DefaultTypeInfoVisitor;
import org.jvnet.jaxb2_commons.xmlschema.XmlSchemaConstants;

final class PropertyInfoVisitor<T, C extends T> implements
		MPropertyInfoVisitor<T, C, JSCallExpression> {
	/**
	 * 
	 */
	private final JsonixCompiler<T, C> jsonixCompiler;
	private final JsonixCode code;
	private final JsonixModule module;
	private final JSCallExpression base;

	public PropertyInfoVisitor(JsonixCompiler<T, C> jsonixCompiler,
			JsonixCode code, JsonixModule module, JSCallExpression base) {
		this.jsonixCompiler = jsonixCompiler;
		this.code = code;
		this.module = module;
		this.base = base;
	}

	private void createPropertyInfoOptions(MPropertyInfo<T, C> propertyInfo,
			JSObjectLiteral options) {
		options.append("name",
				this.code.codeModel.string(propertyInfo.getPrivateName()));
		if (propertyInfo.isCollection()) {
			options.append("collection", this.code.codeModel._boolean(true));
		}
	}

	private void createTypedOptions(MTyped<T, C> info,
			final JSObjectLiteral options) {
		final MTypeInfo<T, C> typeInfo = info.getTypeInfo();

		typeInfo.acceptTypeInfoVisitor(new DefaultTypeInfoVisitor<T, C, Void>() {
			@Override
			public Void visitTypeInfo(MTypeInfo<T, C> typeInfo) {
				options.append("typeInfo",
						PropertyInfoVisitor.this.jsonixCompiler
								.getTypeInfoDeclaration(typeInfo));
				return null;
			}

			@Override
			public Void visitBuiltinLeafInfo(MBuiltinLeafInfo<T, C> info) {
				if (XmlSchemaConstants.STRING.equals(info.getTypeName())) {
					// Do not add typeInfo for xs:string;
					return null;
				} else {
					return super.visitBuiltinLeafInfo(info);
				}
			}
		});

	}

	private void createWrappableOptions(MWrappable info, JSObjectLiteral options) {
		final QName wrapperElementName = info.getWrapperElementName();
		if (wrapperElementName != null) {
			options.append("wrapperElementName",
					module.createElementNameExpression(wrapperElementName));
		}
	}

	private void createElementTypeInfoOptions(MElementTypeInfo<T, C> info,
			JSObjectLiteral options) {
		final QName elementName = info.getElementName();
		options.append("elementName",
				module.createElementNameExpression(elementName));
		createTypedOptions(info, options);
	}

	private void createWildcardOptions(MWildcard info, JSObjectLiteral options) {
		if (info.isDomAllowed()) {
			options.append("domAllowed", this.code.codeModel._boolean(true));
		}
		if (info.isTypedObjectAllowed()) {
			options.append("typedObjectAllowed",
					this.code.codeModel._boolean(true));
		}
	}

	private void createMixableOptions(MMixable info, JSObjectLiteral options) {
		if (info.isMixed()) {
			options.append("mixed", this.code.codeModel._boolean(true));
		}
	}

	public JSCallExpression visitElementPropertyInfo(
			MElementPropertyInfo<T, C> info) {
		JSObjectLiteral options = this.code.codeModel.object();
		createPropertyInfoOptions(info, options);
		createWrappableOptions(info, options);
		createElementTypeInfoOptions(info, options);
		return this.base.p("e").i().args(options);
	}

	public JSCallExpression visitElementsPropertyInfo(
			MElementsPropertyInfo<T, C> info) {
		JSObjectLiteral options = this.code.codeModel.object();
		createPropertyInfoOptions(info, options);
		createWrappableOptions(info, options);

		createElementTypeInfosOptions(info, options);
		return this.base.p("es").i().args(options);
	}

	private void createElementTypeInfosOptions(MElementTypeInfos<T, C> info,
			JSObjectLiteral options) {
		final JSArrayLiteral elementTypeInfos = this.code.codeModel.array();
		options.append("elementTypeInfos", elementTypeInfos);
		for (MElementTypeInfo<T, C> elementTypeInfo : info
				.getElementTypeInfos()) {
			final JSObjectLiteral elementTypeInfoOptions = this.code.codeModel
					.object();
			createElementTypeInfoOptions(elementTypeInfo,
					elementTypeInfoOptions);
			elementTypeInfos.append(elementTypeInfoOptions);
		}
	}

	public JSCallExpression visitAnyElementPropertyInfo(
			MAnyElementPropertyInfo<T, C> info) {
		JSObjectLiteral options = this.code.codeModel.object();
		createPropertyInfoOptions(info, options);
		createWildcardOptions(info, options);
		createMixableOptions(info, options);
		return this.base.p("ae").i().args(options);
	}

	public JSCallExpression visitAttributePropertyInfo(
			MAttributePropertyInfo<T, C> info) {
		JSObjectLiteral options = this.code.codeModel.object();
		createPropertyInfoOptions(info, options);
		createTypedOptions(info, options);
		options.append("attributeName",
				module.createAttributeNameExpression(info.getAttributeName()));
		return this.base.p("a").i().args(options);
	}

	public JSCallExpression visitAnyAttributePropertyInfo(
			MAnyAttributePropertyInfo<T, C> info) {
		JSObjectLiteral options = this.code.codeModel.object();
		createPropertyInfoOptions(info, options);
		return this.base.p("aa").i().args(options);
	}

	public JSCallExpression visitValuePropertyInfo(MValuePropertyInfo<T, C> info) {
		JSObjectLiteral options = this.code.codeModel.object();
		createPropertyInfoOptions(info, options);
		createTypedOptions(info, options);
		return this.base.p("v").i().args(options);
	}

	public JSCallExpression visitElementRefPropertyInfo(
			MElementRefPropertyInfo<T, C> info) {
		JSObjectLiteral options = this.code.codeModel.object();
		createPropertyInfoOptions(info, options);
		createMixableOptions(info, options);
		createWrappableOptions(info, options);
		createWildcardOptions(info, options);
		createElementTypeInfoOptions(info, options);
		return this.base.p("er").i().args(options);
	}

	public JSCallExpression visitElementRefsPropertyInfo(
			MElementRefsPropertyInfo<T, C> info) {
		JSObjectLiteral options = this.code.codeModel.object();
		createPropertyInfoOptions(info, options);
		createMixableOptions(info, options);
		createWrappableOptions(info, options);
		createWildcardOptions(info, options);
		createElementTypeInfosOptions(info, options);
		return this.base.p("ers").i().args(options);
	}
}