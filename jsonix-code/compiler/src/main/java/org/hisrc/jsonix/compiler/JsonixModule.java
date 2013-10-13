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

import org.apache.commons.lang.ObjectUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.Validate;
import org.hisrc.jscm.codemodel.JSCodeModel;
import org.hisrc.jscm.codemodel.JSProgram;
import org.hisrc.jscm.codemodel.expression.JSAssignmentExpression;
import org.hisrc.jscm.codemodel.expression.JSCallExpression;
import org.hisrc.jscm.codemodel.expression.JSMemberExpression;
import org.hisrc.jscm.codemodel.expression.JSMemberExpression.MemberNew;
import org.hisrc.jscm.codemodel.expression.JSObjectLiteral;
import org.hisrc.jscm.codemodel.literal.JSStringLiteral;
import org.hisrc.jscm.codemodel.statement.JSStatementGenerator;
import org.hisrc.jscm.codemodel.statement.JSVariableStatement;
import org.hisrc.jsonix.xjc.customizations.PackageMapping;

public class JsonixModule {

	private final JsonixCode code;
	private final JSCodeModel codeModel;
	public final String packageName;
	public final String spaceName;
	public final JSProgram requireJsonix;
	public final JSProgram declarations;
	public final JSProgram exportDeclarations;
	public final JSProgram requireDeclarations;
	public final JSProgram structures;
	public final JSStatementGenerator properties;
	public final JSVariableStatement space;
	// public final JSMemberExpression spaceObject;
	// public final JSMemberExpression module;
	// public final JSArrayLiteral elementInfos;
	// public final JSArrayLiteral typeInfos;

	private JSCallExpression cs;
	private JSCallExpression es;

	public final String defaultElementNamespaceURI;
	public final String defaultAttributeNamespaceURI;

	public final String directory;
	public final String fileName;
	public final String declarationsFileName;
	public final String structuresFileName;

	public JsonixModule(JsonixCode code, PackageMapping packageMapping) {
		Validate.notNull(code);
		Validate.notEmpty(packageMapping.getSpaceName());
		Validate.notEmpty(packageMapping.getDirectory());
		Validate.notEmpty(packageMapping.getFileName());
		Validate.notEmpty(packageMapping.getDeclarationsFileName());
		Validate.notEmpty(packageMapping.getStructuresFileName());
		this.code = code;
		this.codeModel = code.codeModel;
		this.requireJsonix = codeModel.program();
		this.declarations = codeModel.program();
		this.exportDeclarations = codeModel.program();
		this.requireDeclarations = codeModel.program();
		this.structures = codeModel.program();

		this.packageName = packageMapping.getPackageName();
		this.spaceName = packageMapping.getSpaceName();

		this.directory = packageMapping.getDirectory();
		this.fileName = packageMapping.getFileName();
		this.declarationsFileName = packageMapping.getDeclarationsFileName();
		this.structuresFileName = packageMapping.getStructuresFileName();
		final JSObjectLiteral moduleOptions = codeModel.object();

		this.defaultElementNamespaceURI = packageMapping
				.getDefaultElementNamespaceURI();
		if (this.defaultElementNamespaceURI != null) {
			moduleOptions.append("defaultElementNamespaceURI",
					codeModel.string(this.defaultElementNamespaceURI));
		}

		this.defaultAttributeNamespaceURI = packageMapping
				.getDefaultAttributeNamespaceURI();
		if (this.defaultAttributeNamespaceURI != null) {
			moduleOptions.append("defaultAttributeNamespaceURI",
					codeModel.string(this.defaultAttributeNamespaceURI));
		}
		this.requireJsonix
				._if(this.codeModel
						.globalVariable("Jsonix")
						.typeof()
						.eeq(codeModel.string("undefined"))
						.and(this.codeModel.globalVariable("require").typeof()
								.eeq(codeModel.string("function"))))
				._then()
				.block()
				.var("Jsonix",
						codeModel.globalVariable("require").i()
								.args(codeModel.string("jsonix")).p("Jsonix"));

		this.space = this.declarations.var(this.spaceName,
				code.$JsonixModelModule.instantiate().args(moduleOptions));

		this.exportDeclarations
				._if(this.codeModel.globalVariable("require").typeof()
						.eeq(codeModel.string("function")))
				._then()
				.block()
				.expression(
						codeModel.globalVariable("module").p("exports")
								.p(this.spaceName)
								.assign(this.space.getVariable()));

		this.requireDeclarations
				._if(this.codeModel
						.globalVariable(this.spaceName)
						.typeof()
						.eeq(codeModel.string("undefined"))
						.and(this.codeModel.globalVariable("require").typeof()
								.eeq(codeModel.string("function"))))
				._then()
				.block()
				.var(this.spaceName,
						codeModel
								.globalVariable("require")
								.i()
								.args(codeModel.string("./"
										+ StringUtils.substringBefore(
												this.declarationsFileName,
												".js"))).p(this.spaceName));

		this.cs = this.space.getVariable().p("cs").i();
		this.es = this.space.getVariable().p("es").i();
		// this.module = this.space.p(this.moduleName);
		// final JSObjectLiteral moduleObject = codeModel.object();
		// spaceObject.append(this.moduleName, moduleObject);

		// this.typeInfos = codeModel.array();
		// this.elementInfos = codeModel.array();
		this.properties = this.structures.block();
		// this.structures
		// .expression(this.module.p("typeInfos").assign(typeInfos));

	}

	public JSMemberExpression createElementNameExpression(final QName name) {
		Validate.notNull(name);
		return createNameExpression(name, this.defaultElementNamespaceURI);
	}

	public JSMemberExpression createAttributeNameExpression(final QName name) {
		Validate.notNull(name);
		return createNameExpression(name, this.defaultAttributeNamespaceURI);
	}

	private JSMemberExpression createNameExpression(final QName name,
			final String defaultNamespaceURI) {
		final String draftNamespaceURI = name.getNamespaceURI();
		final String namespaceURI = StringUtils.isEmpty(draftNamespaceURI) ? null
				: draftNamespaceURI;

		if (ObjectUtils.equals(defaultNamespaceURI, namespaceURI)) {
			return this.code.codeModel.string(name.getLocalPart());
		} else {
			final MemberNew value = this.code.$JsonixXMLQName.instantiate();
			final JSStringLiteral $localPart = this.code.codeModel.string(name
					.getLocalPart());
			if (!StringUtils.isEmpty(namespaceURI)) {
				final JSAssignmentExpression $namespaceURI = this.code.codeModel
						.string(namespaceURI);
				value.args($namespaceURI, $localPart);

			} else {
				value.args($localPart);
			}
			return value;
		}
	}

	public void c(String name) {
		this.cs = this.cs
				.p("c")
				.i()
				.args(this.codeModel.object().append("name",
						codeModel.string(name)));
	}

	public void e(JSObjectLiteral elementInfo) {
		this.es = this.es.p("e").i().args(elementInfo);
	}

	public void build() {
		this.declarations.expression(this.cs);
		this.structures.expression(this.es);
	}

}
