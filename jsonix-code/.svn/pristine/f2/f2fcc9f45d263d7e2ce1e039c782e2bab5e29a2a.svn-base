if (typeof Jsonix === 'undefined' && typeof require === 'function') {
  var Jsonix = require('jsonix').Jsonix;
}
var org_hisrc_jsonix_samples_zero = new Jsonix.Model.Module({});
org_hisrc_jsonix_samples_zero.cs().c({
    name: 'AnyElementStrictType'
  }).c({
    name: 'ElementType'
  }).c({
    name: 'AnyElementSkipType'
  }).c({
    name: 'ExtendedType'
  }).c({
    name: 'BaseType'
  }).c({
    name: 'AttributeType'
  }).c({
    name: 'AnyAttributeType'
  }).c({
    name: 'ElementRefType'
  }).c({
    name: 'AnyElementLaxType'
  }).c({
    name: 'ElementRefsType'
  }).c({
    name: 'SimpleTypesType'
  }).c({
    name: 'ValueType'
  }).c({
    name: 'ElementsType'
  }).c({
    name: 'TypeWithAbstractElement'
  }).c({
    name: 'LabelType'
  });
if (typeof require === 'function') {
  module.exports.org_hisrc_jsonix_samples_zero = org_hisrc_jsonix_samples_zero;
}
{
  {
    org_hisrc_jsonix_samples_zero.AnyElementStrictType.ps().ae({
        name: 'any',
        typedObjectAllowed: true
      });
  }
  {
    org_hisrc_jsonix_samples_zero.ElementType.ps().e({
        name: 'element',
        elementName: 'element'
      }).e({
        name: 'elements',
        collection: true,
        elementName: 'elements'
      }).e({
        name: 'item',
        elementName: 'item',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE)
      }).er({
        name: 'items',
        collection: true,
        elementName: 'items',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE)
      });
  }
  {
    org_hisrc_jsonix_samples_zero.AnyElementSkipType.ps().ae({
        name: 'any',
        domAllowed: true
      });
  }
  {
    org_hisrc_jsonix_samples_zero.ExtendedType.b(org_hisrc_jsonix_samples_zero.BaseType);
    org_hisrc_jsonix_samples_zero.ExtendedType.ps().e({
        name: 'gamma',
        elementName: 'gamma'
      }).e({
        name: 'delta',
        collection: true,
        elementName: 'delta',
        typeInfo: Jsonix.Schema.XSD.Calendar.INSTANCE
      });
  }
  {
    org_hisrc_jsonix_samples_zero.BaseType.ps().e({
        name: 'alpha',
        elementName: 'alpha'
      }).e({
        name: 'beta',
        collection: true,
        elementName: 'beta',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      });
  }
  {
    org_hisrc_jsonix_samples_zero.AttributeType.ps().a({
        name: 'attribute',
        attributeName: 'attribute'
      });
  }
  {
    org_hisrc_jsonix_samples_zero.AnyAttributeType.ps().aa({
        name: 'otherAttributes'
      }).v({
        name: 'value'
      });
  }
  {
    org_hisrc_jsonix_samples_zero.ElementRefType.ps().er({
        name: 'base',
        elementName: 'base',
        typeInfo: org_hisrc_jsonix_samples_zero.BaseType
      });
  }
  {
    org_hisrc_jsonix_samples_zero.AnyElementLaxType.ps().ae({
        name: 'any',
        domAllowed: true,
        typedObjectAllowed: true
      });
  }
  {
    org_hisrc_jsonix_samples_zero.ElementRefsType.ps().ers({
        name: 'alphaOrBeta',
        collection: true,
        elementTypeInfos: [{
            elementName: 'alpha'
          }, {
            elementName: 'beta'
          }]
      });
  }
  {
    org_hisrc_jsonix_samples_zero.SimpleTypesType.ps().e({
        name: 'base64Binary',
        elementName: 'base64Binary',
        typeInfo: Jsonix.Schema.XSD.Base64Binary.INSTANCE
      }).e({
        name: 'hexBinary',
        elementName: 'hexBinary'
      }).e({
        name: 'duration',
        elementName: 'duration',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'dateTime',
        elementName: 'dateTime',
        typeInfo: Jsonix.Schema.XSD.Calendar.INSTANCE
      }).e({
        name: 'date',
        elementName: 'date',
        typeInfo: Jsonix.Schema.XSD.Calendar.INSTANCE
      }).e({
        name: 'time',
        elementName: 'time',
        typeInfo: Jsonix.Schema.XSD.Calendar.INSTANCE
      }).e({
        name: 'gYearMonth',
        elementName: 'gYearMonth',
        typeInfo: Jsonix.Schema.XSD.Calendar.INSTANCE
      }).e({
        name: 'gYear',
        elementName: 'gYear',
        typeInfo: Jsonix.Schema.XSD.Calendar.INSTANCE
      }).e({
        name: 'gMonthDay',
        elementName: 'gMonthDay',
        typeInfo: Jsonix.Schema.XSD.Calendar.INSTANCE
      }).e({
        name: 'gDay',
        elementName: 'gDay',
        typeInfo: Jsonix.Schema.XSD.Calendar.INSTANCE
      }).e({
        name: 'gMonth',
        elementName: 'gMonth',
        typeInfo: Jsonix.Schema.XSD.Calendar.INSTANCE
      }).e({
        name: '_float',
        elementName: 'float',
        typeInfo: Jsonix.Schema.XSD.Float.INSTANCE
      }).e({
        name: '_double',
        elementName: 'double',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      }).e({
        name: 'decimal',
        elementName: 'decimal',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'integer',
        elementName: 'integer',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: '_long',
        elementName: 'long',
        typeInfo: Jsonix.Schema.XSD.Long.INSTANCE
      }).e({
        name: '_int',
        elementName: 'int',
        typeInfo: Jsonix.Schema.XSD.Int.INSTANCE
      }).e({
        name: '_short',
        elementName: 'short',
        typeInfo: Jsonix.Schema.XSD.Short.INSTANCE
      }).e({
        name: '_byte',
        elementName: 'byte',
        typeInfo: Jsonix.Schema.XSD.Byte.INSTANCE
      }).e({
        name: 'unsignedLong',
        elementName: 'unsignedLong',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'unsignedInt',
        elementName: 'unsignedInt',
        typeInfo: Jsonix.Schema.XSD.Long.INSTANCE
      }).e({
        name: 'unsignedShort',
        elementName: 'unsignedShort',
        typeInfo: Jsonix.Schema.XSD.Int.INSTANCE
      }).e({
        name: 'unsignedByte',
        elementName: 'unsignedByte',
        typeInfo: Jsonix.Schema.XSD.Short.INSTANCE
      }).e({
        name: 'nonNegativeInteger',
        elementName: 'nonNegativeInteger',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'nonPositiveInteger',
        elementName: 'nonPositiveInteger',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'positiveInteger',
        elementName: 'positiveInteger',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'negativeInteger',
        elementName: 'negativeInteger',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: '_boolean',
        elementName: 'boolean',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'anyURI',
        elementName: 'anyURI'
      }).e({
        name: 'qName',
        elementName: 'QName',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'string',
        elementName: 'string'
      }).e({
        name: 'normalizedString',
        elementName: 'normalizedString'
      }).e({
        name: 'token',
        elementName: 'token'
      }).e({
        name: 'language',
        elementName: 'language'
      }).e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'ncName',
        elementName: 'NCName'
      }).e({
        name: 'id',
        elementName: 'ID',
        typeInfo: Jsonix.Schema.XSD.ID.INSTANCE
      }).e({
        name: 'idref',
        elementName: 'IDREF',
        typeInfo: Jsonix.Schema.XSD.IDREF.INSTANCE
      }).e({
        name: 'idrefs',
        elementName: 'IDREFS',
        typeInfo: Jsonix.Schema.XSD.IDREFS.INSTANCE
      }).e({
        name: 'entity',
        elementName: 'ENTITY'
      }).e({
        name: 'entities',
        elementName: 'ENTITIES',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE)
      }).e({
        name: 'nmtoken',
        elementName: 'NMTOKEN'
      }).e({
        name: 'nmtokens',
        elementName: 'NMTOKENS',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE)
      });
  }
  {
    org_hisrc_jsonix_samples_zero.ValueType.ps().v({
        name: 'value'
      }).a({
        name: 'attribute',
        attributeName: 'attribute'
      });
  }
  {
    org_hisrc_jsonix_samples_zero.ElementsType.ps().es({
        name: 'stringOrInteger',
        collection: true,
        elementTypeInfos: [{
            elementName: 'string'
          }, {
            elementName: 'integer',
            typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
          }]
      });
  }
  {
    org_hisrc_jsonix_samples_zero.TypeWithAbstractElement.ps().e({
        name: 'abstractElement',
        elementName: 'abstractElement',
        typeInfo: Jsonix.Schema.XSD.AnyType.INSTANCE
      });
  }
  {
    org_hisrc_jsonix_samples_zero.LabelType.ps().er({
        name: 'content',
        collection: true,
        mixed: true,
        elementName: 'value'
      });
  }
}
org_hisrc_jsonix_samples_zero.es().e({
    elementName: 'items',
    typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE),
    scope: org_hisrc_jsonix_samples_zero.ElementType
  }).e({
    elementName: 'anyElementStrict',
    typeInfo: org_hisrc_jsonix_samples_zero.AnyElementStrictType
  }).e({
    elementName: 'element',
    typeInfo: org_hisrc_jsonix_samples_zero.ElementType
  }).e({
    elementName: 'anyElementSkip',
    typeInfo: org_hisrc_jsonix_samples_zero.AnyElementSkipType
  }).e({
    elementName: 'extended',
    typeInfo: org_hisrc_jsonix_samples_zero.ExtendedType,
    substitutionHead: 'base'
  }).e({
    elementName: 'attribute',
    typeInfo: org_hisrc_jsonix_samples_zero.AttributeType
  }).e({
    elementName: 'anyAttribute',
    typeInfo: org_hisrc_jsonix_samples_zero.AnyAttributeType
  }).e({
    elementName: 'abstractElement',
    typeInfo: Jsonix.Schema.XSD.AnyType.INSTANCE
  }).e({
    elementName: 'elementRef',
    typeInfo: org_hisrc_jsonix_samples_zero.ElementRefType
  }).e({
    elementName: 'anyElementLax',
    typeInfo: org_hisrc_jsonix_samples_zero.AnyElementLaxType
  }).e({
    elementName: 'string',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'elementRefs',
    typeInfo: org_hisrc_jsonix_samples_zero.ElementRefsType
  }).e({
    elementName: 'value',
    typeInfo: org_hisrc_jsonix_samples_zero.ValueType
  }).e({
    elementName: 'base',
    typeInfo: org_hisrc_jsonix_samples_zero.BaseType
  }).e({
    elementName: 'simpleTypes',
    typeInfo: org_hisrc_jsonix_samples_zero.SimpleTypesType
  }).e({
    elementName: 'elements',
    typeInfo: org_hisrc_jsonix_samples_zero.ElementsType
  }).e({
    elementName: 'alpha',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
    scope: org_hisrc_jsonix_samples_zero.ElementRefsType
  }).e({
    elementName: 'beta',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
    scope: org_hisrc_jsonix_samples_zero.ElementRefsType
  }).e({
    elementName: 'value',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
    scope: org_hisrc_jsonix_samples_zero.LabelType
  });