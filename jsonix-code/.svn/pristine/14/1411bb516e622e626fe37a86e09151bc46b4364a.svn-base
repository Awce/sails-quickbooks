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

import org.hisrc.jscm.codemodel.JSCodeModel;
import org.hisrc.jscm.codemodel.expression.JSMemberExpression.MemberProperty;
import org.hisrc.jscm.codemodel.expression.JSPrimaryExpression;
import org.hisrc.jscm.codemodel.impl.CodeModelImpl;

public class JsonixCode {
	public final JSCodeModel codeModel = new CodeModelImpl();

	public final JSPrimaryExpression $Jsonix = codeModel
			.globalVariable("Jsonix");
	public final MemberProperty $JsonixModel = $Jsonix.p("Model");
	public final MemberProperty $JsonixModelModule = $JsonixModel
	.p("Module");
	public final MemberProperty $JsonixModelClassInfo = $JsonixModel
			.p("ClassInfo");
	public final MemberProperty $JsonixModelEnumLeafInfo = $JsonixModel
			.p("EnumLeafInfo");

	public final MemberProperty $JsonixModelElementPropertyInfo = $JsonixModel
			.p("ElementPropertyInfo");
	public final MemberProperty $JsonixModelElementsPropertyInfo = $JsonixModel
			.p("ElementsPropertyInfo");
	public final MemberProperty $JsonixModelAnyElementPropertyInfo = $JsonixModel
			.p("AnyElementPropertyInfo");
	public final MemberProperty $JsonixModelAttributePropertyInfo = $JsonixModel
			.p("AttributePropertyInfo");
	public final MemberProperty $JsonixModelAnyAttributePropertyInfo = $JsonixModel
			.p("AnyAttributePropertyInfo");
	public final MemberProperty $JsonixModelValuePropertyInfo = $JsonixModel
			.p("ValuePropertyInfo");
	public final MemberProperty $JsonixModelElementRefPropertyInfo = $JsonixModel
			.p("ElementRefPropertyInfo");
	public final MemberProperty $JsonixModelElementRefsPropertyInfo = $JsonixModel
			.p("ElementRefsPropertyInfo");

	public final MemberProperty $JsonixXML = $Jsonix.p("XML");
	public final MemberProperty $JsonixXMLQName = $JsonixXML.p("QName");

	public final MemberProperty $JsonixSchema = $Jsonix.p("Schema");
	public final MemberProperty $JsonixSchemaXSD = $JsonixSchema.p("XSD");
	public final MemberProperty $JsonixSchemaXSDList = $JsonixSchemaXSD
			.p("List");
}
