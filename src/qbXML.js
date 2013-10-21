var Jsonix = require('../lib/jsonix/jsonixTweaked.js').Jsonix

module.exports = (function(){



var com = {}


if (typeof com === 'undefined') {
  com = {};
}
if (typeof com.intuit === 'undefined') {
  com.intuit = {};
}
if (typeof com.intuit.sb === 'undefined') {
  com.intuit.sb = {};
}
if (typeof com.intuit.sb.cdm === 'undefined') {
  com.intuit.sb.cdm = {};
}
com.intuit.sb.cdm.v2 = new Jsonix.Model.Module({
    name : 'IntuitV2',
    defaultElementNamespaceURI: 'http:\/\/www.intuit.com\/sb\/cdm\/v2'
  });

com.intuit.sb.cdm.v2.cs().c({
    name: 'BillPayments'
  }).c({
    name: 'CdmComplexBase'
  }).c({
    name: 'CreditMemoQuery'
  }).c({
    name: 'QueryBase'
  }).c({
    name: 'Customers'
  }).c({
    name: 'Classes'
  }).c({
    name: 'ChargeQuery'
  }).c({
    name: 'SalesTaxCodeQuery'
  }).c({
    name: 'Tasks'
  }).c({
    name: 'Vendors'
  }).c({
    name: 'Payment'
  }).c({
    name: 'CdmObject'
  }).c({
    name: 'SalesReps'
  }).c({
    name: 'BuildAssembly'
  }).c({
    name: 'Item'
  }).c({
    name: 'CreditCardCredits'
  }).c({
    name: 'CDCObjectRequest'
  }).c({
    name: 'CompaniesMetaData'
  }).c({
    name: 'BOMComponentQuery'
  }).c({
    name: 'Employees'
  }).c({
    name: 'SalesReceiptQuery'
  }).c({
    name: 'SalesTaxGroupQuery'
  }).c({
    name: 'PurchaseOrder'
  }).c({
    name: 'BillPaymentCreditCards'
  }).c({
    name: 'SalesOrder'
  }).c({
    name: 'Task'
  }).c({
    name: 'Class'
  }).c({
    name: 'BuildAssemblies'
  }).c({
    name: 'VendorCredits'
  }).c({
    name: 'TaskQuery'
  }).c({
    name: 'OtherNames'
  }).c({
    name: 'VendorType'
  }).c({
    name: 'CreditCardChargeQuery'
  }).c({
    name: 'ModRequest'
  }).c({
    name: 'AbstractRequest'
  }).c({
    name: 'CompanyPreferences'
  }).c({
    name: 'NameValueQuery'
  }).c({
    name: 'SyncStatusRequest'
  }).c({
    name: 'Checks'
  }).c({
    name: 'InventorySites'
  }).c({
    name: 'SalesTax'
  }).c({
    name: 'SalesTerms'
  }).c({
    name: 'SyncActivityResponse'
  }).c({
    name: 'TimeActivities'
  }).c({
    name: 'NameValue'
  }).c({
    name: 'ItemGroupComponent'
  }).c({
    name: 'PurchaseOrderQuery'
  }).c({
    name: 'CustomerMsg'
  }).c({
    name: 'BillPaymentCreditCard'
  }).c({
    name: 'TemplateFiles'
  }).c({
    name: 'Discounts'
  }).c({
    name: 'Items'
  }).c({
    name: 'InventoryAdjustments'
  }).c({
    name: 'ItemReceipts'
  }).c({
    name: 'PaymentQuery'
  }).c({
    name: 'CdmObjectRef'
  }).c({
    name: 'VendorCredit'
  }).c({
    name: 'ItemGroupComponents'
  }).c({
    name: 'ItemQuery'
  }).c({
    name: 'Employee'
  }).c({
    name: 'PayrollNonWageItem'
  }).c({
    name: 'PaymentMethodQuery'
  }).c({
    name: 'Estimates'
  }).c({
    name: 'ShipMethods'
  }).c({
    name: 'PayrollNonWageItems'
  }).c({
    name: 'RecordCountQuery'
  }).c({
    name: 'VendorQuery'
  }).c({
    name: 'CustomerTypes'
  }).c({
    name: 'InventoryTransferQuery'
  }).c({
    name: 'BatchRequestSet'
  }).c({
    name: 'BOMComponents'
  }).c({
    name: 'CustomFieldDefinitionSetQuery'
  }).c({
    name: 'Report'
  }).c({
    name: 'BooleanTypeCustomFieldDefinition'
  }).c({
    name: 'SalesByItemSummary'
  }).c({
    name: 'AdvReportParamBase'
  }).c({
    name: 'ItemReceiptQuery'
  }).c({
    name: 'SalesTaxPaymentChecks'
  }).c({
    name: 'AddRequest'
  }).c({
    name: 'Discount'
  }).c({
    name: 'CustomTxnDetail'
  }).c({
    name: 'CustomField'
  }).c({
    name: 'CustomerType'
  }).c({
    name: 'UOMQuery'
  }).c({
    name: 'CreditMemo'
  }).c({
    name: 'CreditCardRefund'
  }).c({
    name: 'PaymentMethod'
  }).c({
    name: 'JobQuery'
  }).c({
    name: 'AccountQuery'
  }).c({
    name: 'CreditCardCharges'
  }).c({
    name: 'SalesTaxPaymentCheckQuery'
  }).c({
    name: 'CreditCardRefunds'
  }).c({
    name: 'ItemReceipt'
  }).c({
    name: 'CurrencyInfoQuery'
  }).c({
    name: 'TemplateRefMap'
  }).c({
    name: 'SalesByCustomerSummary'
  }).c({
    name: 'ClassQuery'
  }).c({
    name: 'VendorCreditsToApply'
  }).c({
    name: 'CashPurchase'
  }).c({
    name: 'JournalEntryQuery'
  }).c({
    name: 'CustomFieldDefinitionRef'
  }).c({
    name: 'SalesTaxQuery'
  }).c({
    name: 'BalanceSheetStd'
  }).c({
    name: 'SalesOrders'
  }).c({
    name: 'OtherName'
  }).c({
    name: 'FixedAssets'
  }).c({
    name: 'CreditCardRefundQuery'
  }).c({
    name: 'SyncActivityRequest'
  }).c({
    name: 'Customer'
  }).c({
    name: 'AdvancedReportQuery'
  }).c({
    name: 'CDCObjectResponses'
  }).c({
    name: 'Deposits'
  }).c({
    name: 'Estimate'
  }).c({
    name: 'ItemConsolidatedQuery'
  }).c({
    name: 'SyncStatusResponse'
  }).c({
    name: 'VendorCreditToApply'
  }).c({
    name: 'JournalEntries'
  }).c({
    name: 'CheckQuery'
  }).c({
    name: 'Parties'
  }).c({
    name: 'ErrorResponse'
  }).c({
    name: 'DepositQuery'
  }).c({
    name: 'BillQuery'
  }).c({
    name: 'InventoryTransfers'
  }).c({
    name: 'Invoices'
  }).c({
    name: 'CreditMemos'
  }).c({
    name: 'UOM'
  }).c({
    name: 'TxnGenerics'
  }).c({
    name: 'TimeActivity'
  }).c({
    name: 'ReportCustomersWhoOweMe'
  }).c({
    name: 'VendorTypes'
  }).c({
    name: 'SalesTaxCodes'
  }).c({
    name: 'CompanyRequest'
  }).c({
    name: 'Party'
  }).c({
    name: 'JobTypes'
  }).c({
    name: 'PayrollNonWageItemQuery'
  }).c({
    name: 'EmployeeQuery'
  }).c({
    name: 'Charge'
  }).c({
    name: 'ReportTopCustomersBySales'
  }).c({
    name: 'CreditCardCredit'
  }).c({
    name: 'EstimateQuery'
  }).c({
    name: 'BillPaymentQuery'
  }).c({
    name: 'ItemConsolidated'
  }).c({
    name: 'SalesRep'
  }).c({
    name: 'VendorCreditQuery'
  }).c({
    name: 'UOMs'
  }).c({
    name: 'PayrollItems'
  }).c({
    name: 'SalesTaxGroup'
  }).c({
    name: 'Deposit'
  }).c({
    name: 'DiscountQuery'
  }).c({
    name: 'JobTypeQuery'
  }).c({
    name: 'InventorySiteQuery'
  }).c({
    name: 'DelRequest'
  }).c({
    name: 'SyncStatusResponses'
  }).c({
    name: 'ItemsConsolidated'
  }).c({
    name: 'InventoryAdjustment'
  }).c({
    name: 'PartyRoleRef'
  }).c({
    name: 'SalesTerm'
  }).c({
    name: 'CdmBase'
  }).c({
    name: 'TemplateName'
  }).c({
    name: 'StringTypeCustomFieldDefinition'
  }).c({
    name: 'TermQuery'
  }).c({
    name: 'ReportProfitAndLoss'
  }).c({
    name: 'SyncActivityResponses'
  }).c({
    name: 'TxnGeneric'
  }).c({
    name: 'Payments'
  }).c({
    name: 'Summary1099'
  }).c({
    name: 'ReportBalanceSheet'
  }).c({
    name: 'Bill'
  }).c({
    name: 'VendorTypeQuery'
  }).c({
    name: 'DateTypeCustomFieldDefinition'
  }).c({
    name: 'ReportIncomeBreakdown'
  }).c({
    name: 'CustomFieldQuery'
  }).c({
    name: 'ItemGroupComponentQuery'
  }).c({
    name: 'TimeActivityQuery'
  }).c({
    name: 'Person'
  }).c({
    name: 'CreditCardCreditQuery'
  }).c({
    name: 'InventoryTransfer'
  }).c({
    name: 'FixedAssetQuery'
  }).c({
    name: 'CustomerMsgs'
  }).c({
    name: 'OtherNameQuery'
  }).c({
    name: 'Bills'
  }).c({
    name: 'SalesReceipts'
  }).c({
    name: 'Organization'
  }).c({
    name: 'CreditCardCharge'
  }).c({
    name: 'CustomFieldDefinitionQuery'
  }).c({
    name: 'CustomerQuery'
  }).c({
    name: 'SalesReceipt'
  }).c({
    name: 'SalesTaxCode'
  }).c({
    name: 'CustomerMsgQuery'
  }).c({
    name: 'BatchResponseSet'
  }).c({
    name: 'RecordCounts'
  }).c({
    name: 'TemplateNameQuery'
  }).c({
    name: 'Invoice'
  }).c({
    name: 'SuccessResponse'
  }).c({
    name: 'CustomFieldDefinition'
  }).c({
    name: 'Persons'
  }).c({
    name: 'PayrollItem'
  }).c({
    name: 'CustomFieldDefinitions'
  }).c({
    name: 'SalesTaxes'
  }).c({
    name: 'CompanyMetaData'
  }).c({
    name: 'ShipMethodQuery'
  }).c({
    name: 'RestResponse'
  }).c({
    name: 'BuildAssemblyQuery'
  }).c({
    name: 'SalesTaxGroups'
  }).c({
    name: 'ExternalRoleQuery'
  }).c({
    name: 'ShipMethod'
  }).c({
    name: 'ObjectRef'
  }).c({
    name: 'Jobs'
  }).c({
    name: 'Organizations'
  }).c({
    name: 'ReportSalesSummary'
  }).c({
    name: 'Account'
  }).c({
    name: 'SalesRepQuery'
  }).c({
    name: 'ReportAccountBalances'
  }).c({
    name: 'CustomerTypeQuery'
  }).c({
    name: 'NameValues'
  }).c({
    name: 'Preferences'
  }).c({
    name: 'PayrollItemQuery'
  }).c({
    name: 'FixedAsset'
  }).c({
    name: 'InventorySite'
  }).c({
    name: 'Charges'
  }).c({
    name: 'SalesOrderQuery'
  }).c({
    name: 'PurchaseOrders'
  }).c({
    name: 'Accounts'
  }).c({
    name: 'Check'
  }).c({
    name: 'JournalEntry'
  }).c({
    name: 'NumberTypeCustomFieldDefinition'
  }).c({
    name: 'TemplateNames'
  }).c({
    name: 'InventoryAdjustmentQuery'
  }).c({
    name: 'InvoiceQuery'
  }).c({
    name: 'RevertRequest'
  }).c({
    name: 'PaymentMethods'
  }).c({
    name: 'CurrencyInfo'
  }).c({
    name: 'Job'
  }).c({
    name: 'JobType'
  }).c({
    name: 'BillPayment'
  }).c({
    name: 'Vendor'
  }).c({
    name: 'CurrencyInfos'
  }).c({
    name: 'BillPaymentCreditCardQuery'
  }).c({
    name: 'SalesTaxPaymentCheck'
  }).c({
    name: 'BOMComponent'
  }).c({
    name: 'SortByColumnInventorySiteWithOrder'
  }).c({
    name: 'PurchaseOrderLine'
  }).c({
    name: 'EmailAddress'
  }).c({
    name: 'JournalEntryQueryBase'
  }).c({
    name: 'ChargeLine'
  }).c({
    name: 'CreditCardRefundHeader'
  }).c({
    name: 'SyncStatusParam'
  }).c({
    name: 'CreditCardCreditLine'
  }).c({
    name: 'CheckHeader'
  }).c({
    name: 'BillPaymentLine'
  }).c({
    name: 'CDCObject'
  }).c({
    name: 'CashPurchaseHeader'
  }).c({
    name: 'SortByColumnEmployeeWithOrder'
  }).c({
    name: 'AccountRef'
  }).c({
    name: 'WorkersCompCode'
  }).c({
    name: 'CreditCardChargeLine'
  }).c({
    name: 'Offering'
  }).c({
    name: 'SortByColumnSalesReceiptWithOrder'
  }).c({
    name: 'EmployeeRef'
  }).c({
    name: 'SortByColumnChargeWithOrder'
  }).c({
    name: 'CreditCardCreditHeader'
  }).c({
    name: 'ModificationMetaData'
  }).c({
    name: 'CdmCollections'
  }).c({
    name: 'HeaderBase'
  }).c({
    name: 'AdvSummaryReportParam'
  }).c({
    name: 'PriceLevelPerItem'
  }).c({
    name: 'CustomFieldQueryParam'
  }).c({
    name: 'BuildAssemblyLine'
  }).c({
    name: 'ExternalKey'
  }).c({
    name: 'InventoryTransferLine'
  }).c({
    name: 'NumberTypeCustomField'
  }).c({
    name: 'StringTypeCustomField'
  }).c({
    name: 'SalesTaxPaymentCheckHeader'
  }).c({
    name: 'CashPayment'
  }).c({
    name: 'RefundAppliedTo'
  }).c({
    name: 'InventoryAdjustmentLine'
  }).c({
    name: 'SortByColumnDepositWithOrder'
  }).c({
    name: 'BillPaymentCreditCardHeader'
  }).c({
    name: 'PaymentDetail'
  }).c({
    name: 'DateTypeCustomField'
  }).c({
    name: 'BillHeader'
  }).c({
    name: 'IdType'
  }).c({
    name: 'SortByColumnInventoryAdjustmentWithOrder'
  }).c({
    name: 'QtyAdj'
  }).c({
    name: 'DepositHeader'
  }).c({
    name: 'ValueAdj'
  }).c({
    name: 'SalesOrderLine'
  }).c({
    name: 'LineBase'
  }).c({
    name: 'ColDataType'
  }).c({
    name: 'JournalEntryLine'
  }).c({
    name: 'TemplateRefMapQuery'
  }).c({
    name: 'PurchaseOrderHeader'
  }).c({
    name: 'CurrencyFormatInfo'
  }).c({
    name: 'HeaderPurchase'
  }).c({
    name: 'InvoiceHeader'
  }).c({
    name: 'CreditCardPayment'
  }).c({
    name: 'SalesTaxRef'
  }).c({
    name: 'SortByColumnTaskWithOrder'
  }).c({
    name: 'CreditCardChargeHeader'
  }).c({
    name: 'SortByColumnEstimateWithOrder'
  }).c({
    name: 'CustomFieldDefinitionSet'
  }).c({
    name: 'ColDesc'
  }).c({
    name: 'SortByColumnNameDateWithOrder'
  }).c({
    name: 'BuildAssemblyHeader'
  }).c({
    name: 'VendorRef'
  }).c({
    name: 'TxnRef'
  }).c({
    name: 'SortByColumnAccountWithOrder'
  }).c({
    name: 'TelephoneNumber'
  }).c({
    name: 'JobInfo'
  }).c({
    name: 'OtherNameRef'
  }).c({
    name: 'ItemReceiptLine'
  }).c({
    name: 'SortByColumnBuildAssemblyWithOrder'
  }).c({
    name: 'SortByColumnFixedAssetWithOrder'
  }).c({
    name: 'SortByColumnItemReceiptWithOrder'
  }).c({
    name: 'SortByColumnPayrollNonWageItemWithOrder'
  }).c({
    name: 'RecordCount'
  }).c({
    name: 'BillPaymentHeader'
  }).c({
    name: 'NameQueryBase'
  }).c({
    name: 'CreditMemoHeader'
  }).c({
    name: 'SortBy'
  }).c({
    name: 'ItemReceiptHeader'
  }).c({
    name: 'DataRow'
  }).c({
    name: 'AdvDetailReportParam'
  }).c({
    name: 'NgIdSet'
  }).c({
    name: 'SortByColumnCreditMemoWithOrder'
  }).c({
    name: 'AbstractResponse'
  }).c({
    name: 'UOMConvUnit'
  }).c({
    name: 'TemplateRefParam'
  }).c({
    name: 'SortByColumnCurrencyInfoWithOrder'
  }).c({
    name: 'SortByColumnJournalEntryWithOrder'
  }).c({
    name: 'PriceLevel'
  }).c({
    name: 'CreditMemoLine'
  }).c({
    name: 'CashPurchases'
  }).c({
    name: 'CreditChargeResponse'
  }).c({
    name: 'SalesReceiptHeader'
  }).c({
    name: 'SortByColumnBillPaymentWithOrder'
  }).c({
    name: 'Money'
  }).c({
    name: 'EstimateLine'
  }).c({
    name: 'Note'
  }).c({
    name: 'SortByColumn'
  }).c({
    name: 'Label'
  }).c({
    name: 'CustomerRef'
  }).c({
    name: 'SalesOrderHeader'
  }).c({
    name: 'BooleanTypeCustomField'
  }).c({
    name: 'InternalCustomField'
  }).c({
    name: 'SortByColumnCustomerWithOrder'
  }).c({
    name: 'ExternalRole'
  }).c({
    name: 'TransactionQueryBase'
  }).c({
    name: 'ChargeHeader'
  }).c({
    name: 'SortByColumnBillWithOrder'
  }).c({
    name: 'BillLine'
  }).c({
    name: 'ListQueryBase'
  }).c({
    name: 'JournalEntryHeader'
  }).c({
    name: 'IdSet'
  }).c({
    name: 'SalesReceiptLine'
  }).c({
    name: 'PaymentLine'
  }).c({
    name: 'ReimbursableInfo'
  }).c({
    name: 'RoleBase'
  }).c({
    name: 'Data'
  }).c({
    name: 'CashBackInfo'
  }).c({
    name: 'SortByColumnItemWithOrder'
  }).c({
    name: 'SortByColumnPurchaseOrderWithOrder'
  }).c({
    name: 'SyncStatusDrillDown'
  }).c({
    name: 'SortByColumnTimeActivityWithOrder'
  }).c({
    name: 'CreditChargeInfo'
  }).c({
    name: 'SortByColumnInventoryTransferWithOrder'
  }).c({
    name: 'LineSales'
  }).c({
    name: 'InventoryTransferHeader'
  }).c({
    name: 'RateHistory'
  }).c({
    name: 'HeaderSales'
  }).c({
    name: 'CheckPayment'
  }).c({
    name: 'InventoryAdjustmentHeader'
  }).c({
    name: 'TemplateRef'
  }).c({
    name: 'PhysicalAddress'
  }).c({
    name: 'WebSiteAddress'
  }).c({
    name: 'SortByColumnOtherNameWithOrder'
  }).c({
    name: 'PaymentHeader'
  }).c({
    name: 'SortByColumnInvoiceWithOrder'
  }).c({
    name: 'LinePurchase'
  }).c({
    name: 'SortByColumnPaymentWithOrder'
  }).c({
    name: 'InvoiceLine'
  }).c({
    name: 'CashPurchaseLine'
  }).c({
    name: 'VendorCreditHeader'
  }).c({
    name: 'SortByColumnVendorWithOrder'
  }).c({
    name: 'SalesTaxPaymentCheckLine'
  }).c({
    name: 'DepositLine'
  }).c({
    name: 'CheckLine'
  }).c({
    name: 'VendorCreditLine'
  }).c({
    name: 'SortByColumnSalesOrderWithOrder'
  }).c({
    name: 'ReportQueryBase'
  }).c({
    name: 'EstimateHeader'
  }).c({
    name: 'TaxLine'
  }).c({
    name: 'TemplateId'
  }).c({
    name: 'RoleId'
  }).c({
    name: 'Header'
  });


{
  {
    com.intuit.sb.cdm.v2.BillPayments.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.BillPayments.ps().e({
        name: 'billPayment',
        collection: true,
        elementName: 'BillPayment',
        typeInfo: com.intuit.sb.cdm.v2.BillPayment
      });
  }
  {
    com.intuit.sb.cdm.v2.CdmComplexBase.ps();
  }

    {
    com.intuit.sb.cdm.v2.CdmBase.b(com.intuit.sb.cdm.v2.CdmObject);
    com.intuit.sb.cdm.v2.CdmBase.ps().e({
        name: 'id',
        elementName: 'Id',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'syncToken',
        elementName: 'SyncToken'
      }).e({
        name: 'metaData',
        elementName: 'MetaData',
        typeInfo: com.intuit.sb.cdm.v2.ModificationMetaData
      }).e({
        name: 'externalKey',
        elementName: 'ExternalKey',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: '_synchronized',
        elementName: 'Synchronized',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'alternateId',
        collection: true,
        elementName: 'AlternateId',
        typeInfo: com.intuit.sb.cdm.v2.NameValue
      }).e({
        name: 'customField',
        collection: true,
        elementName: 'CustomField',
        typeInfo: com.intuit.sb.cdm.v2.CustomField
      }).e({
        name: 'draft',
        elementName: 'Draft',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'objectState',
        elementName: 'ObjectState',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditMemoQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.CreditMemoQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnCreditMemoWithOrder
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'includeDiscountLineDetails',
        elementName: 'IncludeDiscountLineDetails',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.QueryBase.ps().e({
        name: 'offeringId',
        elementName: 'OfferingId',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'iteratorId',
        elementName: 'IteratorId'
      }).e({
        name: 'startPage',
        elementName: 'StartPage',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'chunkSize',
        elementName: 'ChunkSize',
        typeInfo: Jsonix.Schema.XSD.Int.INSTANCE
      }).e({
        name: 'includeTagElements',
        collection: true,
        elementName: 'IncludeTagElements'
      }).a({
        name: 'deletedObjects',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'DeletedObjects'
      }).a({
        name: 'xmlns',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: 'xmlns'
      });
  }
  {
    com.intuit.sb.cdm.v2.Customers.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Customers.ps().e({
        name: 'customer',
        collection: true,
        elementName: 'Customer',
        typeInfo: com.intuit.sb.cdm.v2.Customer
      });
  }
  {
    com.intuit.sb.cdm.v2.Classes.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Classes.ps().e({
        name: 'clazz',
        collection: true,
        elementName: 'Class',
        typeInfo: com.intuit.sb.cdm.v2.Class
      });
  }
  {
    com.intuit.sb.cdm.v2.ChargeQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.ChargeQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnChargeWithOrder
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesTaxCodeQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.SalesTaxCodeQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.Tasks.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Tasks.ps().e({
        name: 'task',
        collection: true,
        elementName: 'Task',
        typeInfo: com.intuit.sb.cdm.v2.Task
      });
  }
  {
    com.intuit.sb.cdm.v2.Vendors.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Vendors.ps().e({
        name: 'vendor',
        collection: true,
        elementName: 'Vendor',
        typeInfo: com.intuit.sb.cdm.v2.Vendor
      });
  }
  {
    com.intuit.sb.cdm.v2.Payment.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Payment.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.PaymentHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.PaymentLine
      });
  }
  {
    com.intuit.sb.cdm.v2.CdmObject.ps();
  }
  {
    com.intuit.sb.cdm.v2.SalesReps.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.SalesReps.ps().e({
        name: 'salesRep',
        collection: true,
        elementName: 'SalesRep',
        typeInfo: com.intuit.sb.cdm.v2.SalesRep
      });
  }
  {
    com.intuit.sb.cdm.v2.BuildAssembly.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.BuildAssembly.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.BuildAssemblyHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.BuildAssemblyLine
      });
  }
  {
    com.intuit.sb.cdm.v2.Item.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Item.ps().e({
        name: 'itemParentId',
        elementName: 'ItemParentId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemParentName',
        elementName: 'ItemParentName'
      }).e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'desc',
        elementName: 'Desc'
      }).e({
        name: 'taxable',
        elementName: 'Taxable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'unitPrice',
        elementName: 'UnitPrice',
        typeInfo: com.intuit.sb.cdm.v2.Money
      }).e({
        name: 'ratePercent',
        elementName: 'RatePercent',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'type',
        elementName: 'Type',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'uomId',
        elementName: 'UOMId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'uomAbbrv',
        elementName: 'UOMAbbrv'
      }).e({
        name: 'incomeAccountRef',
        elementName: 'IncomeAccountRef',
        typeInfo: com.intuit.sb.cdm.v2.AccountRef
      }).e({
        name: 'purchaseDesc',
        elementName: 'PurchaseDesc'
      }).e({
        name: 'purchaseCost',
        elementName: 'PurchaseCost',
        typeInfo: com.intuit.sb.cdm.v2.Money
      }).e({
        name: 'expenseAccountRef',
        elementName: 'ExpenseAccountRef',
        typeInfo: com.intuit.sb.cdm.v2.AccountRef
      }).e({
        name: 'cogsAccountRef',
        elementName: 'COGSAccountRef',
        typeInfo: com.intuit.sb.cdm.v2.AccountRef
      }).e({
        name: 'assetAccountRef',
        elementName: 'AssetAccountRef',
        typeInfo: com.intuit.sb.cdm.v2.AccountRef
      }).e({
        name: 'prefVendorRef',
        elementName: 'PrefVendorRef',
        typeInfo: com.intuit.sb.cdm.v2.VendorRef
      }).e({
        name: 'avgCost',
        elementName: 'AvgCost',
        typeInfo: com.intuit.sb.cdm.v2.Money
      }).e({
        name: 'qtyOnHand',
        elementName: 'QtyOnHand',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'qtyOnPurchaseOrder',
        elementName: 'QtyOnPurchaseOrder',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'qtyOnSalesOrder',
        elementName: 'QtyOnSalesOrder',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'reorderPoint',
        elementName: 'ReorderPoint',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'manPartNum',
        elementName: 'ManPartNum'
      }).e({
        name: 'printGroupedItems',
        elementName: 'PrintGroupedItems',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditCardCredits.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.CreditCardCredits.ps().e({
        name: 'creditCardCredit',
        collection: true,
        elementName: 'CreditCardCredit',
        typeInfo: com.intuit.sb.cdm.v2.CreditCardCredit
      });
  }
  {
    com.intuit.sb.cdm.v2.CDCObjectRequest.ps().e({
        name: 'offeringId',
        elementName: 'OfferingId',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CompaniesMetaData.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.CompaniesMetaData.ps().e({
        name: 'companyMetaData',
        collection: true,
        elementName: 'CompanyMetaData',
        typeInfo: com.intuit.sb.cdm.v2.CompanyMetaData
      });
  }
  {
    com.intuit.sb.cdm.v2.BOMComponentQuery.b(com.intuit.sb.cdm.v2.QueryBase);
    com.intuit.sb.cdm.v2.BOMComponentQuery.ps().e({
        name: 'listIdSet',
        elementName: 'ListIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      });
  }
  {
    com.intuit.sb.cdm.v2.Employees.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Employees.ps().e({
        name: 'employee',
        collection: true,
        elementName: 'Employee',
        typeInfo: com.intuit.sb.cdm.v2.Employee
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesReceiptQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.SalesReceiptQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnSalesReceiptWithOrder
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'includeDiscountLineDetails',
        elementName: 'IncludeDiscountLineDetails',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesTaxGroupQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.SalesTaxGroupQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.PurchaseOrder.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.PurchaseOrder.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.PurchaseOrderHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.PurchaseOrderLine
      });
  }
  {
    com.intuit.sb.cdm.v2.BillPaymentCreditCards.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.BillPaymentCreditCards.ps().e({
        name: 'billPaymentCreditCard',
        collection: true,
        elementName: 'BillPaymentCreditCard',
        typeInfo: com.intuit.sb.cdm.v2.BillPaymentCreditCard
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesOrder.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.SalesOrder.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.SalesOrderHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.SalesOrderLine
      }).e({
        name: 'taxLine',
        collection: true,
        elementName: 'TaxLine',
        typeInfo: com.intuit.sb.cdm.v2.TaxLine
      });
  }
  {
    com.intuit.sb.cdm.v2.Task.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Task.ps().e({
        name: 'notes',
        elementName: 'Notes'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'done',
        elementName: 'Done',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'reminderDate',
        elementName: 'ReminderDate'
      });
  }
  {
    com.intuit.sb.cdm.v2.Class.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Class.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'classParentId',
        elementName: 'ClassParentId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'classParentName',
        elementName: 'ClassParentName'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.BuildAssemblies.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.BuildAssemblies.ps().e({
        name: 'buildAssembly',
        collection: true,
        elementName: 'BuildAssembly',
        typeInfo: com.intuit.sb.cdm.v2.BuildAssembly
      });
  }
  {
    com.intuit.sb.cdm.v2.VendorCredits.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.VendorCredits.ps().e({
        name: 'vendorCredit',
        collection: true,
        elementName: 'VendorCredit',
        typeInfo: com.intuit.sb.cdm.v2.VendorCredit
      });
  }
  {
    com.intuit.sb.cdm.v2.TaskQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.TaskQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnTaskWithOrder
      }).e({
        name: 'doneStatusFilter',
        elementName: 'DoneStatusFilter',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.OtherNames.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.OtherNames.ps().e({
        name: 'otherName',
        collection: true,
        elementName: 'OtherName',
        typeInfo: com.intuit.sb.cdm.v2.OtherName
      });
  }
  {
    com.intuit.sb.cdm.v2.VendorType.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.VendorType.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'vendorTypeParentId',
        elementName: 'VendorTypeParentId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'vendorTypeParentName',
        elementName: 'VendorTypeParentName'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditCardChargeQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.CreditCardChargeQuery.ps().e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.ModRequest.b(com.intuit.sb.cdm.v2.AbstractRequest);
    com.intuit.sb.cdm.v2.ModRequest.ps().er({
        name: 'cdmObject',
        elementName: 'CdmObject',
        typeInfo: com.intuit.sb.cdm.v2.CdmObject
      }).a({
        name: 'draft',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'Draft'
      }).a({
        name: 'sparse',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'Sparse'
      }).a({
        name: 'fullResponse',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'FullResponse'
      });
  }
  {
    com.intuit.sb.cdm.v2.AbstractRequest.ps().e({
        name: 'offeringId',
        elementName: 'OfferingId',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'externalRealmId',
        elementName: 'ExternalRealmId'
      }).a({
        name: 'requestId',
        attributeName: 'RequestId'
      });
  }
  {
    com.intuit.sb.cdm.v2.CompanyPreferences.b(com.intuit.sb.cdm.v2.CdmComplexBase);
    com.intuit.sb.cdm.v2.CompanyPreferences.ps().e({
        name: 'preferences',
        elementName: 'Preferences',
        typeInfo: com.intuit.sb.cdm.v2.Preferences
      });
  }
  {
    com.intuit.sb.cdm.v2.NameValueQuery.b(com.intuit.sb.cdm.v2.QueryBase);
    com.intuit.sb.cdm.v2.NameValueQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.SyncStatusRequest.ps().e({
        name: 'offeringId',
        elementName: 'OfferingId',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'ngIdSet',
        collection: true,
        elementName: 'NgIdSet',
        typeInfo: com.intuit.sb.cdm.v2.NgIdSet
      }).e({
        name: 'syncStatusParam',
        collection: true,
        elementName: 'SyncStatusParam',
        typeInfo: com.intuit.sb.cdm.v2.SyncStatusParam
      }).e({
        name: 'requestId',
        collection: true,
        elementName: 'RequestId'
      }).e({
        name: 'batchId',
        collection: true,
        elementName: 'BatchId'
      }).e({
        name: 'startCreatedTMS',
        elementName: 'StartCreatedTMS',
        
      }).e({
        name: 'endCreatedTMS',
        elementName: 'EndCreatedTMS',
        
      }).a({
        name: 'erroredObjectsOnly',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'ErroredObjectsOnly'
      });
  }
  {
    com.intuit.sb.cdm.v2.Checks.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Checks.ps().e({
        name: 'check',
        collection: true,
        elementName: 'Check',
        typeInfo: com.intuit.sb.cdm.v2.Check
      });
  }
  {
    com.intuit.sb.cdm.v2.InventorySites.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.InventorySites.ps().e({
        name: 'inventorySite',
        collection: true,
        elementName: 'InventorySite',
        typeInfo: com.intuit.sb.cdm.v2.InventorySite
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesTax.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.SalesTax.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'desc',
        elementName: 'Desc'
      }).e({
        name: 'taxRate',
        elementName: 'TaxRate',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'vendorId',
        elementName: 'VendorId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'vendorName',
        elementName: 'VendorName'
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesTerms.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.SalesTerms.ps().e({
        name: 'salesTerm',
        collection: true,
        elementName: 'SalesTerm',
        typeInfo: com.intuit.sb.cdm.v2.SalesTerm
      });
  }
  {
    com.intuit.sb.cdm.v2.SyncActivityResponse.ps().e({
        name: 'syncType',
        elementName: 'SyncType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'startSyncTMS',
        elementName: 'StartSyncTMS',
        
      }).e({
        name: 'endSyncTMS',
        elementName: 'EndSyncTMS',
        
      }).e({
        name: 'entityName',
        elementName: 'EntityName'
      }).e({
        name: 'entityRowCount',
        elementName: 'EntityRowCount',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'syncStatusDrillDown',
        collection: true,
        elementName: 'SyncStatusDrillDown',
        typeInfo: com.intuit.sb.cdm.v2.SyncStatusDrillDown
      });
  }
  {
    com.intuit.sb.cdm.v2.TimeActivities.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.TimeActivities.ps().e({
        name: 'timeActivity',
        collection: true,
        elementName: 'TimeActivity',
        typeInfo: com.intuit.sb.cdm.v2.TimeActivity
      });
  }
  {
    com.intuit.sb.cdm.v2.NameValue.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'value',
        elementName: 'Value'
      });
  }
  {
    com.intuit.sb.cdm.v2.ItemGroupComponent.b(com.intuit.sb.cdm.v2.CdmObject);
    com.intuit.sb.cdm.v2.ItemGroupComponent.ps().e({
        name: 'itemParentId',
        elementName: 'ItemParentId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemParentName',
        elementName: 'ItemParentName'
      }).e({
        name: 'itemId',
        elementName: 'ItemId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemName',
        elementName: 'ItemName'
      }).e({
        name: 'itemType',
        elementName: 'ItemType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'qty',
        elementName: 'Qty',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'uomId',
        elementName: 'UOMId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'uomAbbrv',
        elementName: 'UOMAbbrv'
      });
  }
  {
    com.intuit.sb.cdm.v2.PurchaseOrderQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.PurchaseOrderQuery.ps().e({
        name: 'minimumAmount',
        elementName: 'MinimumAmount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'minimumBalance',
        elementName: 'MinimumBalance',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnPurchaseOrderWithOrder
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CustomerMsg.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.CustomerMsg.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.BillPaymentCreditCard.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.BillPaymentCreditCard.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.BillPaymentCreditCardHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.BillPaymentLine
      });
  }
  {
    com.intuit.sb.cdm.v2.TemplateFiles.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.TemplateFiles.ps().e({
        name: 'templateFile',
        collection: true,
        elementName: 'TemplateFile'
      });
  }
  {
    com.intuit.sb.cdm.v2.Discounts.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Discounts.ps().e({
        name: 'discount',
        collection: true,
        elementName: 'Discount',
        typeInfo: com.intuit.sb.cdm.v2.Discount
      });
  }
  {
    com.intuit.sb.cdm.v2.Items.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Items.ps().e({
        name: 'item',
        collection: true,
        elementName: 'Item',
        typeInfo: com.intuit.sb.cdm.v2.Item
      });
  }
  {
    com.intuit.sb.cdm.v2.InventoryAdjustments.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.InventoryAdjustments.ps().e({
        name: 'inventoryAdjustment',
        collection: true,
        elementName: 'InventoryAdjustment',
        typeInfo: com.intuit.sb.cdm.v2.InventoryAdjustment
      });
  }
  {
    com.intuit.sb.cdm.v2.ItemReceipts.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.ItemReceipts.ps().e({
        name: 'itemReceipt',
        collection: true,
        elementName: 'ItemReceipt',
        typeInfo: com.intuit.sb.cdm.v2.ItemReceipt
      });
  }
  {
    com.intuit.sb.cdm.v2.PaymentQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.PaymentQuery.ps().e({
        name: 'minimumAmount',
        elementName: 'MinimumAmount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnPaymentWithOrder
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'jobIdSet',
        elementName: 'JobIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      });
  }
  {
    com.intuit.sb.cdm.v2.CdmObjectRef.ps().e({
        name: 'id',
        elementName: 'Id',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'syncToken',
        elementName: 'SyncToken'
      });
  }


  {
    com.intuit.sb.cdm.v2.VendorCredit.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.VendorCredit.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.VendorCreditHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.VendorCreditLine
      });
  }
  {
    com.intuit.sb.cdm.v2.ItemGroupComponents.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.ItemGroupComponents.ps().e({
        name: 'itemGroupComponent',
        collection: true,
        elementName: 'ItemGroupComponent',
        typeInfo: com.intuit.sb.cdm.v2.ItemGroupComponent
      });
  }
  {
    com.intuit.sb.cdm.v2.ItemQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.ItemQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnItemWithOrder
      }).e({
        name: 'printGroupedItemsEnable',
        elementName: 'PrintGroupedItemsEnable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'ratePercentEnable',
        elementName: 'RatePercentEnable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
   {
    com.intuit.sb.cdm.v2.RoleBase.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.RoleBase.ps().e({
        name: 'partyReferenceId',
        elementName: 'PartyReferenceId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'typeOf',
        elementName: 'TypeOf',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'address',
        collection: true,
        elementName: 'Address',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'phone',
        collection: true,
        elementName: 'Phone',
        typeInfo: com.intuit.sb.cdm.v2.TelephoneNumber
      }).e({
        name: 'webSite',
        collection: true,
        elementName: 'WebSite',
        typeInfo: com.intuit.sb.cdm.v2.WebSiteAddress
      }).e({
        name: 'email',
        collection: true,
        elementName: 'Email',
        typeInfo: com.intuit.sb.cdm.v2.EmailAddress
      }).e({
        name: 'externalId',
        elementName: 'ExternalId'
      }).e({
        name: 'title',
        elementName: 'Title'
      }).e({
        name: 'givenName',
        elementName: 'GivenName'
      }).e({
        name: 'middleName',
        elementName: 'MiddleName'
      }).e({
        name: 'familyName',
        elementName: 'FamilyName'
      }).e({
        name: 'suffix',
        elementName: 'Suffix'
      }).e({
        name: 'gender',
        elementName: 'Gender',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'birthDate',
        elementName: 'BirthDate'
      }).e({
        name: 'userId',
        elementName: 'UserId'
      }).e({
        name: 'orgId',
        elementName: 'OrgId'
      }).e({
        name: 'legalName',
        elementName: 'LegalName'
      }).e({
        name: 'dbaName',
        elementName: 'DBAName'
      }).e({
        name: 'industry',
        elementName: 'Industry'
      }).e({
        name: 'nonProfit',
        elementName: 'NonProfit',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'legalStructure',
        elementName: 'LegalStructure'
      }).e({
        name: 'category',
        elementName: 'Category'
      }).e({
        name: 'taxIdentifier',
        elementName: 'TaxIdentifier'
      }).e({
        name: 'notes',
        collection: true,
        elementName: 'Notes',
        typeInfo: com.intuit.sb.cdm.v2.Note
      });
  }

  {
    com.intuit.sb.cdm.v2.Employee.b(com.intuit.sb.cdm.v2.RoleBase);
    com.intuit.sb.cdm.v2.Employee.ps().e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'showAs',
        elementName: 'ShowAs'
      }).e({
        name: 'employeeType',
        elementName: 'EmployeeType'
      }).e({
        name: 'employeeNumber',
        elementName: 'EmployeeNumber'
      }).e({
        name: 'billableTime',
        elementName: 'BillableTime',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'hiredDate',
        elementName: 'HiredDate',
        typeInfo: Jsonix.Schema.XSD.Date.INSTANCE
      }).e({
        name: 'releasedDate',
        elementName: 'ReleasedDate',
      }).e({
        name: 'useTimeEntry',
        elementName: 'UseTimeEntry',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.PayrollNonWageItem.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.PayrollNonWageItem.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'type',
        elementName: 'Type',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'expenseAccountId',
        elementName: 'ExpenseAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'expenseAccountName',
        elementName: 'ExpenseAccountName'
      }).e({
        name: 'liabilityAccountId',
        elementName: 'LiabilityAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'liabilityAccountName',
        elementName: 'LiabilityAccountName'
      });
  }
  {
    com.intuit.sb.cdm.v2.PaymentMethodQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.PaymentMethodQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.Estimates.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Estimates.ps().e({
        name: 'estimate',
        collection: true,
        elementName: 'Estimate',
        typeInfo: com.intuit.sb.cdm.v2.Estimate
      });
  }
  {
    com.intuit.sb.cdm.v2.ShipMethods.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.ShipMethods.ps().e({
        name: 'shipMethod',
        collection: true,
        elementName: 'ShipMethod',
        typeInfo: com.intuit.sb.cdm.v2.ShipMethod
      });
  }
  {
    com.intuit.sb.cdm.v2.PayrollNonWageItems.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.PayrollNonWageItems.ps().e({
        name: 'payrollNonWageItem',
        collection: true,
        elementName: 'PayrollNonWageItem',
        typeInfo: com.intuit.sb.cdm.v2.PayrollNonWageItem
      });
  }
  {
    com.intuit.sb.cdm.v2.RecordCountQuery.b(com.intuit.sb.cdm.v2.QueryBase);
    com.intuit.sb.cdm.v2.RecordCountQuery.ps().er({
        name: 'queryObjects',
        elementName: 'QueryObjects',
        typeInfo: com.intuit.sb.cdm.v2.QueryBase
      });
  }
  {
    com.intuit.sb.cdm.v2.VendorQuery.b(com.intuit.sb.cdm.v2.NameQueryBase);
    com.intuit.sb.cdm.v2.VendorQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnVendorWithOrder
      }).e({
        name: 'firstLastName',
        elementName: 'FirstLastName'
      }).e({
        name: 'minimumBalance',
        elementName: 'MinimumBalance',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'firstLastEnd',
        elementName: 'FirstLastEnd'
      }).e({
        name: 'firstLastStart',
        elementName: 'FirstLastStart'
      }).e({
        name: 'firstLastInside',
        elementName: 'FirstLastInside'
      });
  }
  {
    com.intuit.sb.cdm.v2.CustomerTypes.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.CustomerTypes.ps().e({
        name: 'customerType',
        collection: true,
        elementName: 'CustomerType',
        typeInfo: com.intuit.sb.cdm.v2.CustomerType
      });
  }
  {
    com.intuit.sb.cdm.v2.InventoryTransferQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.InventoryTransferQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnInventoryTransferWithOrder
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'refNumber',
        elementName: 'RefNumber'
      }).e({
        name: 'fromSiteId',
        elementName: 'FromSiteId',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'toSiteId',
        elementName: 'ToSiteId',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      });
  }
  {
    com.intuit.sb.cdm.v2.BatchRequestSet.ps().e({
        name: 'offeringId',
        elementName: 'OfferingId',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'externalRealmId',
        elementName: 'ExternalRealmId'
      }).er({
        name: 'request',
        collection: true,
        elementName: 'Request',
        typeInfo: com.intuit.sb.cdm.v2.AbstractRequest
      }).a({
        name: 'requestId',
        attributeName: 'RequestId'
      });
  }
  {
    com.intuit.sb.cdm.v2.BOMComponents.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.BOMComponents.ps().e({
        name: 'bomComponent',
        collection: true,
        elementName: 'BOMComponent',
        typeInfo: com.intuit.sb.cdm.v2.BOMComponent
      });
  }
  {
    com.intuit.sb.cdm.v2.CustomFieldDefinitionSetQuery.b(com.intuit.sb.cdm.v2.QueryBase);
    com.intuit.sb.cdm.v2.CustomFieldDefinitionSetQuery.ps().e({
        name: 'setId',
        elementName: 'SetId',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'setName',
        elementName: 'SetName'
      });
  }
  {
    com.intuit.sb.cdm.v2.Report.b(com.intuit.sb.cdm.v2.CdmComplexBase);
    com.intuit.sb.cdm.v2.Report.ps().e({
        name: 'colDesc',
        collection: true,
        elementName: 'ColDesc',
        typeInfo: com.intuit.sb.cdm.v2.ColDesc
      }).e({
        name: 'data',
        elementName: 'Data',
        typeInfo: com.intuit.sb.cdm.v2.Data
      }).a({
        name: 'name',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: 'name'
      });
  }
  {
    com.intuit.sb.cdm.v2.BooleanTypeCustomFieldDefinition.b(com.intuit.sb.cdm.v2.CustomFieldDefinition);
    com.intuit.sb.cdm.v2.BooleanTypeCustomFieldDefinition.ps().e({
        name: 'defaultValue',
        elementName: 'DefaultValue',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesByItemSummary.b(com.intuit.sb.cdm.v2.AdvSummaryReportParam);
    com.intuit.sb.cdm.v2.SalesByItemSummary.ps();
  }
  {
    com.intuit.sb.cdm.v2.AdvReportParamBase.ps().e({
        name: 'offeringId',
        elementName: 'OfferingId',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'dateMacro',
        elementName: 'DateMacro',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'startTransactionDate',
        elementName: 'StartTransactionDate'
      }).e({
        name: 'endTransactionDate',
        elementName: 'EndTransactionDate'
      }).e({
        name: 'accountType',
        collection: true,
        elementName: 'AccountType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'accountIdSet',
        elementName: 'AccountIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'classIdSet',
        elementName: 'ClassIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'entityType',
        collection: true,
        elementName: 'EntityType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'entityIdSet',
        elementName: 'EntityIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'itemType',
        collection: true,
        elementName: 'ItemType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'itemIdSet',
        elementName: 'ItemIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'txnType',
        collection: true,
        elementName: 'TxnType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumn
      }).e({
        name: 'reportBasis',
        elementName: 'ReportBasis',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.ItemReceiptQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.ItemReceiptQuery.ps().e({
        name: 'minimumAmount',
        elementName: 'MinimumAmount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'minimumBalance',
        elementName: 'MinimumBalance',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnItemReceiptWithOrder
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesTaxPaymentChecks.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.SalesTaxPaymentChecks.ps().e({
        name: 'salesTaxPaymentCheck',
        collection: true,
        elementName: 'SalesTaxPaymentCheck',
        typeInfo: com.intuit.sb.cdm.v2.SalesTaxPaymentCheck
      });
  }
  {
    com.intuit.sb.cdm.v2.AddRequest.b(com.intuit.sb.cdm.v2.AbstractRequest);
    com.intuit.sb.cdm.v2.AddRequest.ps().er({
        name: 'cdmObject',
        elementName: 'CdmObject',
        typeInfo: com.intuit.sb.cdm.v2.CdmObject
      }).a({
        name: 'draft',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'Draft'
      }).a({
        name: 'fullResponse',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'FullResponse'
      });
  }
  {
    com.intuit.sb.cdm.v2.Discount.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Discount.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'desc',
        elementName: 'Desc'
      }).e({
        name: 'taxable',
        elementName: 'Taxable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'percent',
        elementName: 'Percent',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'amount',
        elementName: 'Amount',
        typeInfo: com.intuit.sb.cdm.v2.Money
      }).e({
        name: 'discountAccountId',
        elementName: 'DiscountAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'discountAccountName',
        elementName: 'DiscountAccountName'
      });
  }
  {
    com.intuit.sb.cdm.v2.CustomTxnDetail.b(com.intuit.sb.cdm.v2.AdvDetailReportParam);
    com.intuit.sb.cdm.v2.CustomTxnDetail.ps();
  }
  {
    com.intuit.sb.cdm.v2.CustomField.ps().e({
        name: 'definitionId',
        elementName: 'DefinitionId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'name',
        elementName: 'Name'
      });
  }
  {
    com.intuit.sb.cdm.v2.CustomerType.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.CustomerType.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'customerTypeParentId',
        elementName: 'CustomerTypeParentId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'customerTypeParentName',
        elementName: 'CustomerTypeParentName'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.UOMQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.UOMQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.CreditMemo.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.CreditMemo.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.CreditMemoHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.CreditMemoLine
      }).e({
        name: 'taxLine',
        collection: true,
        elementName: 'TaxLine',
        typeInfo: com.intuit.sb.cdm.v2.TaxLine
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditCardRefund.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.CreditCardRefund.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.CreditCardRefundHeader
      });
  }
  {
    com.intuit.sb.cdm.v2.PaymentMethod.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.PaymentMethod.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'type',
        elementName: 'Type'
      });
  }
  {
    com.intuit.sb.cdm.v2.JobQuery.b(com.intuit.sb.cdm.v2.NameQueryBase);
    com.intuit.sb.cdm.v2.JobQuery.ps().e({
        name: 'customerIdSet',
        elementName: 'CustomerIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'includeFinancialIndicator',
        elementName: 'IncludeFinancialIndicator',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.AccountQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.AccountQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnAccountWithOrder
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditCardCharges.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.CreditCardCharges.ps().e({
        name: 'creditCardCharge',
        collection: true,
        elementName: 'CreditCardCharge',
        typeInfo: com.intuit.sb.cdm.v2.CreditCardCharge
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesTaxPaymentCheckQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.SalesTaxPaymentCheckQuery.ps().e({
        name: 'minimumAmount',
        elementName: 'MinimumAmount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditCardRefunds.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.CreditCardRefunds.ps().e({
        name: 'creditCardRefund',
        collection: true,
        elementName: 'CreditCardRefund',
        typeInfo: com.intuit.sb.cdm.v2.CreditCardRefund
      });
  }
  {
    com.intuit.sb.cdm.v2.ItemReceipt.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.ItemReceipt.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.ItemReceiptHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.ItemReceiptLine
      });
  }
  {
    com.intuit.sb.cdm.v2.CurrencyInfoQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.CurrencyInfoQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnCurrencyInfoWithOrder
      }).e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'isUserDefined',
        elementName: 'IsUserDefined',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.TemplateRefMap.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.TemplateRefMap.ps().e({
        name: 'type',
        elementName: 'Type',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'txnId',
        elementName: 'TxnId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'templateId',
        elementName: 'TemplateId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'templateName',
        elementName: 'TemplateName'
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesByCustomerSummary.b(com.intuit.sb.cdm.v2.AdvSummaryReportParam);
    com.intuit.sb.cdm.v2.SalesByCustomerSummary.ps().e({
        name: 'customerIdSet',
        elementName: 'CustomerIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      });
  }
  {
    com.intuit.sb.cdm.v2.ClassQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.ClassQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.VendorCreditsToApply.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.VendorCreditsToApply.ps().e({
        name: 'vendorCreditToApply',
        collection: true,
        elementName: 'VendorCreditToApply',
        typeInfo: com.intuit.sb.cdm.v2.VendorCreditToApply
      });
  }
  {
    com.intuit.sb.cdm.v2.CashPurchase.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.CashPurchase.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.CashPurchaseHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.CashPurchaseLine
      });
  }
  {
    com.intuit.sb.cdm.v2.JournalEntryQuery.b(com.intuit.sb.cdm.v2.JournalEntryQueryBase);
    com.intuit.sb.cdm.v2.JournalEntryQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnJournalEntryWithOrder
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'draftFilter',
        elementName: 'DraftFilter',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'objectStateEnable',
        elementName: 'ObjectStateEnable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CustomFieldDefinitionRef.b(com.intuit.sb.cdm.v2.CdmObjectRef);
    com.intuit.sb.cdm.v2.CustomFieldDefinitionRef.ps();
  }
  {
    com.intuit.sb.cdm.v2.SalesTaxQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.SalesTaxQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.BalanceSheetStd.b(com.intuit.sb.cdm.v2.AdvSummaryReportParam);
    com.intuit.sb.cdm.v2.BalanceSheetStd.ps();
  }
  {
    com.intuit.sb.cdm.v2.SalesOrders.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.SalesOrders.ps().e({
        name: 'salesOrder',
        collection: true,
        elementName: 'SalesOrder',
        typeInfo: com.intuit.sb.cdm.v2.SalesOrder
      });
  }
  {
    com.intuit.sb.cdm.v2.OtherName.b(com.intuit.sb.cdm.v2.RoleBase);
    com.intuit.sb.cdm.v2.OtherName.ps().e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'acctNum',
        elementName: 'AcctNum'
      });
  }
  {
    com.intuit.sb.cdm.v2.FixedAssets.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.FixedAssets.ps().e({
        name: 'fixedAsset',
        collection: true,
        elementName: 'FixedAsset',
        typeInfo: com.intuit.sb.cdm.v2.FixedAsset
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditCardRefundQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.CreditCardRefundQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.SyncActivityRequest.ps().e({
        name: 'offeringId',
        elementName: 'OfferingId',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'startTransactionDate',
        elementName: 'StartTransactionDate'
      }).e({
        name: 'endTransactionDate',
        elementName: 'EndTransactionDate'
      }).e({
        name: 'startCreatedTMS',
        elementName: 'StartCreatedTMS',
        
      }).e({
        name: 'endCreatedTMS',
        elementName: 'EndCreatedTMS',
        
      });
  }
  {
    com.intuit.sb.cdm.v2.Customer.b(com.intuit.sb.cdm.v2.RoleBase);
    com.intuit.sb.cdm.v2.Customer.ps().e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'showAs',
        elementName: 'ShowAs'
      }).e({
        name: 'customerTypeId',
        elementName: 'CustomerTypeId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'customerTypeName',
        elementName: 'CustomerTypeName'
      }).e({
        name: 'salesTermId',
        elementName: 'SalesTermId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'salesTermName',
        elementName: 'SalesTermName'
      }).e({
        name: 'salesRepId',
        elementName: 'SalesRepId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'salesRepName',
        elementName: 'SalesRepName'
      }).e({
        name: 'salesTaxCodeId',
        elementName: 'SalesTaxCodeId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'salesTaxCodeName',
        elementName: 'SalesTaxCodeName'
      }).e({
        name: 'taxId',
        elementName: 'TaxId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'taxName',
        elementName: 'TaxName'
      }).e({
        name: 'taxGroupId',
        elementName: 'TaxGroupId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'taxGroupName',
        elementName: 'TaxGroupName'
      }).e({
        name: 'paymentMethodId',
        elementName: 'PaymentMethodId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'paymentMethodName',
        elementName: 'PaymentMethodName'
      }).e({
        name: 'priceLevelId',
        elementName: 'PriceLevelId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'priceLevelName',
        elementName: 'PriceLevelName'
      }).e({
        name: 'openBalance',
        elementName: 'OpenBalance',
        typeInfo: com.intuit.sb.cdm.v2.Money
      }).e({
        name: 'openBalanceDate',
        elementName: 'OpenBalanceDate'
      }).e({
        name: 'openBalanceWithJobs',
        elementName: 'OpenBalanceWithJobs',
        typeInfo: com.intuit.sb.cdm.v2.Money
      }).e({
        name: 'creditLimit',
        elementName: 'CreditLimit',
        typeInfo: com.intuit.sb.cdm.v2.Money
      }).e({
        name: 'acctNum',
        elementName: 'AcctNum'
      }).e({
        name: 'overDueBalance',
        elementName: 'OverDueBalance',
        typeInfo: com.intuit.sb.cdm.v2.Money
      }).e({
        name: 'totalRevenue',
        elementName: 'TotalRevenue',
        typeInfo: com.intuit.sb.cdm.v2.Money
      }).e({
        name: 'totalExpense',
        elementName: 'TotalExpense',
        typeInfo: com.intuit.sb.cdm.v2.Money
      }).e({
        name: 'jobInfo',
        elementName: 'JobInfo',
        typeInfo: com.intuit.sb.cdm.v2.JobInfo
      });
  }
  {
    com.intuit.sb.cdm.v2.AdvancedReportQuery.ps().er({
        name: 'advReportParamBase',
        elementName: 'AdvReportParamBase',
        typeInfo: com.intuit.sb.cdm.v2.AdvReportParamBase
      });
  }
  {
    com.intuit.sb.cdm.v2.CDCObjectResponses.b(com.intuit.sb.cdm.v2.CdmComplexBase);
    com.intuit.sb.cdm.v2.CDCObjectResponses.ps().e({
        name: 'cdcObject',
        collection: true,
        elementName: 'CDCObject',
        typeInfo: com.intuit.sb.cdm.v2.CDCObject
      });
  }
  {
    com.intuit.sb.cdm.v2.Deposits.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Deposits.ps().e({
        name: 'deposit',
        collection: true,
        elementName: 'Deposit',
        typeInfo: com.intuit.sb.cdm.v2.Deposit
      });
  }
  {
    com.intuit.sb.cdm.v2.Estimate.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Estimate.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.EstimateHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.EstimateLine
      }).e({
        name: 'taxLine',
        collection: true,
        elementName: 'TaxLine',
        typeInfo: com.intuit.sb.cdm.v2.TaxLine
      });
  }
  {
    com.intuit.sb.cdm.v2.ItemConsolidatedQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.ItemConsolidatedQuery.ps().e({
        name: 'nameContains',
        elementName: 'NameContains'
      }).e({
        name: 'printGroupedItemsEnable',
        elementName: 'PrintGroupedItemsEnable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SyncStatusResponse.ps().e({
        name: 'ngIdSet',
        elementName: 'NgIdSet',
        typeInfo: com.intuit.sb.cdm.v2.NgIdSet
      }).e({
        name: 'requestId',
        elementName: 'RequestId'
      }).e({
        name: 'syncStatusParam',
        elementName: 'SyncStatusParam',
        typeInfo: com.intuit.sb.cdm.v2.SyncStatusParam
      }).e({
        name: 'batchId',
        elementName: 'BatchId'
      }).e({
        name: 'stateCode',
        elementName: 'StateCode'
      }).e({
        name: 'stateDesc',
        elementName: 'StateDesc'
      }).e({
        name: 'messageCode',
        elementName: 'MessageCode'
      }).e({
        name: 'messageDesc',
        elementName: 'MessageDesc'
      }).e({
        name: 'responseLogTMS',
        elementName: 'ResponseLogTMS',
        
      });
  }
  {
    com.intuit.sb.cdm.v2.VendorCreditToApply.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.VendorCreditToApply.ps().e({
        name: 'txnType',
        elementName: 'TxnType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'vendorId',
        elementName: 'VendorId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'vendorName',
        elementName: 'VendorName'
      }).e({
        name: 'apAccountId',
        elementName: 'APAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'apAccountName',
        elementName: 'APAccountName'
      }).e({
        name: 'docNumber',
        elementName: 'DocNumber'
      }).e({
        name: 'txnDate',
        elementName: 'TxnDate'
      }).e({
        name: 'creditRemaining',
        elementName: 'CreditRemaining',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'currency',
        elementName: 'Currency',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.JournalEntries.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.JournalEntries.ps().e({
        name: 'journalEntry',
        collection: true,
        elementName: 'JournalEntry',
        typeInfo: com.intuit.sb.cdm.v2.JournalEntry
      });
  }
  {
    com.intuit.sb.cdm.v2.CheckQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.CheckQuery.ps().e({
        name: 'minimumAmount',
        elementName: 'MinimumAmount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.Parties.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Parties.ps().e({
        name: 'customFieldDefinition',
        collection: true,
        elementName: 'CustomFieldDefinition',
        typeInfo: com.intuit.sb.cdm.v2.CustomFieldDefinition
      }).e({
        name: 'party',
        collection: true,
        elementName: 'Party',
        typeInfo: com.intuit.sb.cdm.v2.Party
      });
  }
  {
    com.intuit.sb.cdm.v2.ErrorResponse.b(com.intuit.sb.cdm.v2.AbstractResponse);
    com.intuit.sb.cdm.v2.ErrorResponse.ps().e({
        name: 'errorCode',
        elementName: 'ErrorCode',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'errorDesc',
        elementName: 'ErrorDesc'
      }).e({
        name: 'dbErrorCode',
        elementName: 'DBErrorCode'
      });
  }
  {
    com.intuit.sb.cdm.v2.DepositQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.DepositQuery.ps().e({
        name: 'minimumAmount',
        elementName: 'MinimumAmount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnDepositWithOrder
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.BillQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.BillQuery.ps().e({
        name: 'minimumAmount',
        elementName: 'MinimumAmount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'minimumBalance',
        elementName: 'MinimumBalance',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnBillWithOrder
      });
  }
  {
    com.intuit.sb.cdm.v2.InventoryTransfers.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.InventoryTransfers.ps().e({
        name: 'inventoryTransfer',
        collection: true,
        elementName: 'InventoryTransfer',
        typeInfo: com.intuit.sb.cdm.v2.InventoryTransfer
      });
  }
  {
    com.intuit.sb.cdm.v2.Invoices.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Invoices.ps().e({
        name: 'invoice',
        collection: true,
        elementName: 'Invoice',
        typeInfo: com.intuit.sb.cdm.v2.Invoice
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditMemos.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.CreditMemos.ps().e({
        name: 'creditMemo',
        collection: true,
        elementName: 'CreditMemo',
        typeInfo: com.intuit.sb.cdm.v2.CreditMemo
      });
  }
  {
    com.intuit.sb.cdm.v2.UOM.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.UOM.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'abbrv',
        elementName: 'Abbrv'
      }).e({
        name: 'baseType',
        elementName: 'BaseType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'convUnit',
        collection: true,
        elementName: 'ConvUnit',
        typeInfo: com.intuit.sb.cdm.v2.UOMConvUnit
      });
  }
  {
    com.intuit.sb.cdm.v2.TxnGenerics.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.TxnGenerics.ps().e({
        name: 'txnGeneric',
        collection: true,
        elementName: 'TxnGeneric',
        typeInfo: com.intuit.sb.cdm.v2.TxnGeneric
      });
  }
  {
    com.intuit.sb.cdm.v2.TimeActivity.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.TimeActivity.ps().e({
        name: 'txnDate',
        elementName: 'TxnDate'
      }).e({
        name: 'nameOf',
        elementName: 'NameOf',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'employee',
        elementName: 'Employee',
        typeInfo: com.intuit.sb.cdm.v2.EmployeeRef
      }).e({
        name: 'vendor',
        elementName: 'Vendor',
        typeInfo: com.intuit.sb.cdm.v2.VendorRef
      }).e({
        name: 'customerId',
        elementName: 'CustomerId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'customerName',
        elementName: 'CustomerName'
      }).e({
        name: 'jobId',
        elementName: 'JobId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'jobName',
        elementName: 'JobName'
      }).e({
        name: 'itemId',
        elementName: 'ItemId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemName',
        elementName: 'ItemName'
      }).e({
        name: 'itemType',
        elementName: 'ItemType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'classId',
        elementName: 'ClassId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'className',
        elementName: 'ClassName'
      }).e({
        name: 'payItemId',
        elementName: 'PayItemId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'payItemName',
        elementName: 'PayItemName'
      }).e({
        name: 'billableStatus',
        elementName: 'BillableStatus',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'taxable',
        elementName: 'Taxable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'hourlyRate',
        elementName: 'HourlyRate',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'hours',
        elementName: 'Hours',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'minutes',
        elementName: 'Minutes',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'seconds',
        elementName: 'Seconds',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'breakHours',
        elementName: 'BreakHours',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'breakMinutes',
        elementName: 'BreakMinutes',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'startTime',
        elementName: 'StartTime',
        
      }).e({
        name: 'endTime',
        elementName: 'EndTime',
        
      }).e({
        name: 'description',
        elementName: 'Description'
      });
  }
  {
    com.intuit.sb.cdm.v2.ReportCustomersWhoOweMe.b(com.intuit.sb.cdm.v2.ReportQueryBase);
    com.intuit.sb.cdm.v2.ReportCustomersWhoOweMe.ps().e({
        name: 'sortByColumn',
        collection: true,
        elementName: 'SortByColumn',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.VendorTypes.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.VendorTypes.ps().e({
        name: 'vendorType',
        collection: true,
        elementName: 'VendorType',
        typeInfo: com.intuit.sb.cdm.v2.VendorType
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesTaxCodes.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.SalesTaxCodes.ps().e({
        name: 'salesTaxCode',
        collection: true,
        elementName: 'SalesTaxCode',
        typeInfo: com.intuit.sb.cdm.v2.SalesTaxCode
      });
  }
  {
    com.intuit.sb.cdm.v2.CompanyRequest.ps().e({
        name: 'action',
        elementName: 'Action',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'companyMetaData',
        elementName: 'CompanyMetaData',
        typeInfo: com.intuit.sb.cdm.v2.CompanyMetaData
      });
  }
  {
    com.intuit.sb.cdm.v2.Party.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Party.ps().ers({
        name: 'rest',
        collection: true,
        elementTypeInfos: [{
            elementName: 'Address',
            typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
          }, {
            elementName: 'ExternalId'
          }, {
            elementName: 'Email',
            typeInfo: com.intuit.sb.cdm.v2.EmailAddress
          }, {
            elementName: 'TypeOf',
            typeInfo: Jsonix.Schema.XSD.String.INSTANCE
          }, {
            elementName: 'Role',
            typeInfo: Jsonix.Schema.XSD.String.INSTANCE
          }, {
            elementName: 'WebSite',
            typeInfo: com.intuit.sb.cdm.v2.WebSiteAddress
          }, {
            elementName: 'Name'
          }, {
            elementName: 'CustomField',
            typeInfo: com.intuit.sb.cdm.v2.CustomField
          }, {
            elementName: 'Phone',
            typeInfo: com.intuit.sb.cdm.v2.TelephoneNumber
          }]
      });
  }
  {
    com.intuit.sb.cdm.v2.JobTypes.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.JobTypes.ps().e({
        name: 'jobType',
        collection: true,
        elementName: 'JobType',
        typeInfo: com.intuit.sb.cdm.v2.JobType
      });
  }
  {
    com.intuit.sb.cdm.v2.PayrollNonWageItemQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.PayrollNonWageItemQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnPayrollNonWageItemWithOrder
      }).e({
        name: 'name',
        elementName: 'Name'
      });
  }
  {
    com.intuit.sb.cdm.v2.EmployeeQuery.b(com.intuit.sb.cdm.v2.NameQueryBase);
    com.intuit.sb.cdm.v2.EmployeeQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnEmployeeWithOrder
      }).e({
        name: 'firstLastName',
        elementName: 'FirstLastName'
      }).e({
        name: 'firstLastEnd',
        elementName: 'FirstLastEnd'
      }).e({
        name: 'firstLastStart',
        elementName: 'FirstLastStart'
      }).e({
        name: 'firstLastInside',
        elementName: 'FirstLastInside'
      }).e({
        name: 'includeTimeEntryEnum',
        elementName: 'IncludeTimeEntryEnum',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.Charge.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Charge.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.ChargeHeader
      }).e({
        name: 'line',
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.ChargeLine
      });
  }
  {
    com.intuit.sb.cdm.v2.ReportTopCustomersBySales.b(com.intuit.sb.cdm.v2.ReportQueryBase);
    com.intuit.sb.cdm.v2.ReportTopCustomersBySales.ps().e({
        name: 'sortByColumn',
        collection: true,
        elementName: 'SortByColumn',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditCardCredit.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.CreditCardCredit.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.CreditCardCreditHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.CreditCardCreditLine
      });
  }
  {
    com.intuit.sb.cdm.v2.EstimateQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.EstimateQuery.ps().e({
        name: 'minimumAmount',
        elementName: 'MinimumAmount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnEstimateWithOrder
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'jobIdSet',
        elementName: 'JobIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'includeDiscountLineDetails',
        elementName: 'IncludeDiscountLineDetails',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'includeDueDate',
        elementName: 'IncludeDueDate',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'statusFilter',
        elementName: 'StatusFilter',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.BillPaymentQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.BillPaymentQuery.ps().e({
        name: 'minimumAmount',
        elementName: 'MinimumAmount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnBillPaymentWithOrder
      });
  }
  {
    com.intuit.sb.cdm.v2.ItemConsolidated.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.ItemConsolidated.ps().e({
        name: 'itemParentId',
        elementName: 'ItemParentId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemParentName',
        elementName: 'ItemParentName'
      }).e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'desc',
        elementName: 'Desc'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'unitPrice',
        elementName: 'UnitPrice',
        typeInfo: com.intuit.sb.cdm.v2.Money
      }).e({
        name: 'ratePercent',
        elementName: 'RatePercent',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'type',
        elementName: 'Type',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'salesTaxCodeId',
        elementName: 'SalesTaxCodeId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'salesTaxCodeName',
        elementName: 'SalesTaxCodeName'
      }).e({
        name: 'printGroupedItems',
        elementName: 'PrintGroupedItems',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesRep.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.SalesRep.ps().e({
        name: 'nameOf',
        elementName: 'NameOf',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'employee',
        elementName: 'Employee',
        typeInfo: com.intuit.sb.cdm.v2.EmployeeRef
      }).e({
        name: 'vendor',
        elementName: 'Vendor',
        typeInfo: com.intuit.sb.cdm.v2.VendorRef
      }).e({
        name: 'otherName',
        elementName: 'OtherName',
        typeInfo: com.intuit.sb.cdm.v2.OtherNameRef
      }).e({
        name: 'initials',
        elementName: 'Initials'
      });
  }
  {
    com.intuit.sb.cdm.v2.VendorCreditQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.VendorCreditQuery.ps().e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.UOMs.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.UOMs.ps().e({
        name: 'uom',
        collection: true,
        elementName: 'UOM',
        typeInfo: com.intuit.sb.cdm.v2.UOM
      });
  }
  {
    com.intuit.sb.cdm.v2.PayrollItems.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.PayrollItems.ps().e({
        name: 'payrollItem',
        collection: true,
        elementName: 'PayrollItem',
        typeInfo: com.intuit.sb.cdm.v2.PayrollItem
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesTaxGroup.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.SalesTaxGroup.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'desc',
        elementName: 'Desc'
      }).e({
        name: 'salesTax',
        collection: true,
        elementName: 'SalesTax',
        typeInfo: com.intuit.sb.cdm.v2.SalesTaxRef
      });
  }
  {
    com.intuit.sb.cdm.v2.Deposit.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Deposit.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.DepositHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.DepositLine
      });
  }
  {
    com.intuit.sb.cdm.v2.DiscountQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.DiscountQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.JobTypeQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.JobTypeQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnNameDateWithOrder
      });
  }
  {
    com.intuit.sb.cdm.v2.InventorySiteQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.InventorySiteQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnInventorySiteWithOrder
      }).e({
        name: 'name',
        elementName: 'Name'
      });
  }
  {
    com.intuit.sb.cdm.v2.DelRequest.b(com.intuit.sb.cdm.v2.AbstractRequest);
    com.intuit.sb.cdm.v2.DelRequest.ps().er({
        name: 'cdmObject',
        elementName: 'CdmObject',
        typeInfo: com.intuit.sb.cdm.v2.CdmObject
      });
  }
  {
    com.intuit.sb.cdm.v2.SyncStatusResponses.b(com.intuit.sb.cdm.v2.CdmComplexBase);
    com.intuit.sb.cdm.v2.SyncStatusResponses.ps().e({
        name: 'syncStatusResponse',
        collection: true,
        elementName: 'SyncStatusResponse',
        typeInfo: com.intuit.sb.cdm.v2.SyncStatusResponse
      }).er({
        name: 'cdmObject',
        collection: true,
        elementName: 'CdmObject',
        typeInfo: com.intuit.sb.cdm.v2.CdmObject
      }).a({
        name: 'includeRelatedObjects',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'IncludeRelatedObjects'
      });
  }
  {
    com.intuit.sb.cdm.v2.ItemsConsolidated.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.ItemsConsolidated.ps().e({
        name: 'itemConsolidated',
        collection: true,
        elementName: 'ItemConsolidated',
        typeInfo: com.intuit.sb.cdm.v2.ItemConsolidated
      });
  }
  {
    com.intuit.sb.cdm.v2.InventoryAdjustment.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.InventoryAdjustment.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.InventoryAdjustmentHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.InventoryAdjustmentLine
      });
  }
  {
    com.intuit.sb.cdm.v2.PartyRoleRef.b(com.intuit.sb.cdm.v2.ObjectRef);
    com.intuit.sb.cdm.v2.PartyRoleRef.ps().e({
        name: 'partyReferenceId',
        elementName: 'PartyReferenceId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesTerm.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.SalesTerm.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'type',
        elementName: 'Type'
      }).e({
        name: 'dueDays',
        elementName: 'DueDays',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'discountDays',
        elementName: 'DiscountDays',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'discountPercent',
        elementName: 'DiscountPercent',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'dayOfMonthDue',
        elementName: 'DayOfMonthDue',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'dueNextMonthDays',
        elementName: 'DueNextMonthDays',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'discountDayOfMonth',
        elementName: 'DiscountDayOfMonth',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'dateDiscountPercent',
        elementName: 'DateDiscountPercent',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }

  {
    com.intuit.sb.cdm.v2.TemplateName.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.TemplateName.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'type',
        elementName: 'Type',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.StringTypeCustomFieldDefinition.b(com.intuit.sb.cdm.v2.CustomFieldDefinition);
    com.intuit.sb.cdm.v2.StringTypeCustomFieldDefinition.ps().e({
        name: 'defaultString',
        elementName: 'DefaultString'
      }).e({
        name: 'regularExpression',
        elementName: 'RegularExpression'
      }).e({
        name: 'maxLength',
        elementName: 'MaxLength',
        typeInfo: Jsonix.Schema.XSD.Int.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.TermQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.TermQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.ReportProfitAndLoss.b(com.intuit.sb.cdm.v2.ReportQueryBase);
    com.intuit.sb.cdm.v2.ReportProfitAndLoss.ps().e({
        name: 'summarizeColumnsBy',
        elementName: 'SummarizeColumnsBy',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SyncActivityResponses.b(com.intuit.sb.cdm.v2.CdmComplexBase);
    com.intuit.sb.cdm.v2.SyncActivityResponses.ps().e({
        name: 'syncActivityResponse',
        collection: true,
        elementName: 'SyncActivityResponse',
        typeInfo: com.intuit.sb.cdm.v2.SyncActivityResponse
      });
  }
  {
    com.intuit.sb.cdm.v2.TxnGeneric.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.TxnGeneric.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.Header
      });
  }
  {
    com.intuit.sb.cdm.v2.Payments.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Payments.ps().e({
        name: 'payment',
        collection: true,
        elementName: 'Payment',
        typeInfo: com.intuit.sb.cdm.v2.Payment
      });
  }
  {
    com.intuit.sb.cdm.v2.Summary1099.b(com.intuit.sb.cdm.v2.AdvSummaryReportParam);
    com.intuit.sb.cdm.v2.Summary1099.ps().e({
        name: 'useThresholds',
        elementName: 'UseThresholds',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.ReportBalanceSheet.b(com.intuit.sb.cdm.v2.ReportQueryBase);
    com.intuit.sb.cdm.v2.ReportBalanceSheet.ps();
  }
  {
    com.intuit.sb.cdm.v2.Bill.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Bill.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.BillHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.BillLine
      });
  }
  {
    com.intuit.sb.cdm.v2.VendorTypeQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.VendorTypeQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnNameDateWithOrder
      });
  }
  {
    com.intuit.sb.cdm.v2.DateTypeCustomFieldDefinition.b(com.intuit.sb.cdm.v2.CustomFieldDefinition);
    com.intuit.sb.cdm.v2.DateTypeCustomFieldDefinition.ps().e({
        name: 'defaultDate',
        elementName: 'DefaultDate',
        
      }).e({
        name: 'minDate',
        elementName: 'MinDate',
        
      }).e({
        name: 'maxDate',
        elementName: 'MaxDate',
        
      });
  }
  {
    com.intuit.sb.cdm.v2.ReportIncomeBreakdown.b(com.intuit.sb.cdm.v2.ReportQueryBase);
    com.intuit.sb.cdm.v2.ReportIncomeBreakdown.ps().e({
        name: 'sortByColumn',
        collection: true,
        elementName: 'SortByColumn',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CustomFieldQuery.b(com.intuit.sb.cdm.v2.QueryBase);
    com.intuit.sb.cdm.v2.CustomFieldQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.ItemGroupComponentQuery.b(com.intuit.sb.cdm.v2.QueryBase);
    com.intuit.sb.cdm.v2.ItemGroupComponentQuery.ps().e({
        name: 'listIdSet',
        elementName: 'ListIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      });
  }
  {
    com.intuit.sb.cdm.v2.TimeActivityQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.TimeActivityQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnTimeActivityWithOrder
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'secondsEnable',
        elementName: 'SecondsEnable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.Person.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Person.ps().e({
        name: 'title',
        elementName: 'Title'
      }).e({
        name: 'givenName',
        elementName: 'GivenName'
      }).e({
        name: 'middleName',
        elementName: 'MiddleName'
      }).e({
        name: 'familyName',
        elementName: 'FamilyName'
      }).e({
        name: 'suffix',
        elementName: 'Suffix'
      }).e({
        name: 'gender',
        elementName: 'Gender',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'birthDate',
        elementName: 'BirthDate'
      }).e({
        name: 'userId',
        elementName: 'UserId'
      }).e({
        name: 'taxId',
        elementName: 'TaxId'
      }).e({
        name: 'address',
        collection: true,
        elementName: 'Address',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'phone',
        collection: true,
        elementName: 'Phone',
        typeInfo: com.intuit.sb.cdm.v2.TelephoneNumber
      }).e({
        name: 'webSite',
        collection: true,
        elementName: 'WebSite',
        typeInfo: com.intuit.sb.cdm.v2.WebSiteAddress
      }).e({
        name: 'email',
        collection: true,
        elementName: 'Email',
        typeInfo: com.intuit.sb.cdm.v2.EmailAddress
      }).e({
        name: 'role',
        collection: true,
        elementName: 'Role',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditCardCreditQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.CreditCardCreditQuery.ps().e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.InventoryTransfer.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.InventoryTransfer.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.InventoryTransferHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.InventoryTransferLine
      });
  }
  {
    com.intuit.sb.cdm.v2.FixedAssetQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.FixedAssetQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnFixedAssetWithOrder
      });
  }
  {
    com.intuit.sb.cdm.v2.CustomerMsgs.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.CustomerMsgs.ps().e({
        name: 'customerMsg',
        collection: true,
        elementName: 'CustomerMsg',
        typeInfo: com.intuit.sb.cdm.v2.CustomerMsg
      });
  }
  {
    com.intuit.sb.cdm.v2.OtherNameQuery.b(com.intuit.sb.cdm.v2.NameQueryBase);
    com.intuit.sb.cdm.v2.OtherNameQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnOtherNameWithOrder
      }).e({
        name: 'firstLastName',
        elementName: 'FirstLastName'
      }).e({
        name: 'firstLastEnd',
        elementName: 'FirstLastEnd'
      }).e({
        name: 'firstLastStart',
        elementName: 'FirstLastStart'
      }).e({
        name: 'firstLastInside',
        elementName: 'FirstLastInside'
      });
  }
  {
    com.intuit.sb.cdm.v2.Bills.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Bills.ps().e({
        name: 'bill',
        collection: true,
        elementName: 'Bill',
        typeInfo: com.intuit.sb.cdm.v2.Bill
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesReceipts.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.SalesReceipts.ps().e({
        name: 'salesReceipt',
        collection: true,
        elementName: 'SalesReceipt',
        typeInfo: com.intuit.sb.cdm.v2.SalesReceipt
      });
  }
  {
    com.intuit.sb.cdm.v2.Organization.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Organization.ps().e({
        name: 'orgId',
        elementName: 'OrgId'
      }).e({
        name: 'legalName',
        elementName: 'LegalName'
      }).e({
        name: 'dbaName',
        elementName: 'DBAName'
      }).e({
        name: 'industry',
        elementName: 'Industry'
      }).e({
        name: 'nonProfit',
        elementName: 'NonProfit',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'legalStructure',
        elementName: 'LegalStructure'
      }).e({
        name: 'category',
        elementName: 'Category'
      }).e({
        name: 'taxId',
        elementName: 'TaxId'
      }).e({
        name: 'address',
        collection: true,
        elementName: 'Address',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'phone',
        collection: true,
        elementName: 'Phone',
        typeInfo: com.intuit.sb.cdm.v2.TelephoneNumber
      }).e({
        name: 'webSite',
        collection: true,
        elementName: 'WebSite',
        typeInfo: com.intuit.sb.cdm.v2.WebSiteAddress
      }).e({
        name: 'email',
        collection: true,
        elementName: 'Email',
        typeInfo: com.intuit.sb.cdm.v2.EmailAddress
      }).e({
        name: 'role',
        collection: true,
        elementName: 'Role',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditCardCharge.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.CreditCardCharge.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.CreditCardChargeHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.CreditCardChargeLine
      });
  }
  {
    com.intuit.sb.cdm.v2.CustomFieldDefinitionQuery.b(com.intuit.sb.cdm.v2.QueryBase);
    com.intuit.sb.cdm.v2.CustomFieldDefinitionQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.CustomerQuery.b(com.intuit.sb.cdm.v2.NameQueryBase);
    com.intuit.sb.cdm.v2.CustomerQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnCustomerWithOrder
      }).e({
        name: 'firstLastName',
        elementName: 'FirstLastName'
      }).e({
        name: 'minimumBalance',
        elementName: 'MinimumBalance',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'firstLastEnd',
        elementName: 'FirstLastEnd'
      }).e({
        name: 'firstLastStart',
        elementName: 'FirstLastStart'
      }).e({
        name: 'firstLastInside',
        elementName: 'FirstLastInside'
      }).e({
        name: 'openBalanceWithJobs',
        elementName: 'OpenBalanceWithJobs',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'includeFinancialIndicator',
        elementName: 'IncludeFinancialIndicator',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesReceipt.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.SalesReceipt.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.SalesReceiptHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.SalesReceiptLine
      }).e({
        name: 'taxLine',
        collection: true,
        elementName: 'TaxLine',
        typeInfo: com.intuit.sb.cdm.v2.TaxLine
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesTaxCode.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.SalesTaxCode.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'taxable',
        elementName: 'Taxable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'desc',
        elementName: 'Desc'
      });
  }
  {
    com.intuit.sb.cdm.v2.CustomerMsgQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.CustomerMsgQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnNameDateWithOrder
      });
  }
  {
    com.intuit.sb.cdm.v2.BatchResponseSet.b(com.intuit.sb.cdm.v2.CdmComplexBase);
    com.intuit.sb.cdm.v2.BatchResponseSet.ps().er({
        name: 'systemResponse',
        collection: true,
        elementName: 'SystemResponse',
        typeInfo: com.intuit.sb.cdm.v2.CdmComplexBase
      }).a({
        name: 'requestId',
        attributeName: 'RequestId'
      });
  }
  {
    com.intuit.sb.cdm.v2.RecordCounts.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.RecordCounts.ps().e({
        name: 'recordCount',
        elementName: 'RecordCount',
        typeInfo: com.intuit.sb.cdm.v2.RecordCount
      });
  }
  {
    com.intuit.sb.cdm.v2.TemplateNameQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.TemplateNameQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.Invoice.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Invoice.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.InvoiceHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.InvoiceLine
      }).e({
        name: 'taxLine',
        collection: true,
        elementName: 'TaxLine',
        typeInfo: com.intuit.sb.cdm.v2.TaxLine
      });
  }
  {
    com.intuit.sb.cdm.v2.SuccessResponse.b(com.intuit.sb.cdm.v2.AbstractResponse);
    com.intuit.sb.cdm.v2.SuccessResponse.ps();
  }
  {
    com.intuit.sb.cdm.v2.CustomFieldDefinition.b(com.intuit.sb.cdm.v2.CdmObject);
    com.intuit.sb.cdm.v2.CustomFieldDefinition.ps().e({
        name: 'id',
        elementName: 'Id',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'syncToken',
        elementName: 'SyncToken'
      }).e({
        name: 'cdmType',
        elementName: 'CdmType'
      }).e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'hidden',
        elementName: 'Hidden',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'required',
        elementName: 'Required',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'setName',
        elementName: 'SetName'
      }).e({
        name: 'setId',
        elementName: 'SetId',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.Persons.ps().e({
        name: 'person',
        collection: true,
        elementName: 'Person',
        typeInfo: com.intuit.sb.cdm.v2.Person
      });
  }
  {
    com.intuit.sb.cdm.v2.PayrollItem.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.PayrollItem.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'type',
        elementName: 'Type',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CustomFieldDefinitions.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.CustomFieldDefinitions.ps().er({
        name: 'cdmObject',
        collection: true,
        elementName: 'CdmObject',
        typeInfo: com.intuit.sb.cdm.v2.CdmObject
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesTaxes.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.SalesTaxes.ps().e({
        name: 'salesTax',
        collection: true,
        elementName: 'SalesTax',
        typeInfo: com.intuit.sb.cdm.v2.SalesTax
      });
  }
  {
    com.intuit.sb.cdm.v2.CompanyMetaData.b(com.intuit.sb.cdm.v2.CdmObject);
    com.intuit.sb.cdm.v2.CompanyMetaData.ps().e({
        name: 'externalRealmId',
        elementName: 'ExternalRealmId'
      }).e({
        name: 'qbnRegisteredCompanyName',
        elementName: 'QBNRegisteredCompanyName'
      }).e({
        name: 'companySignUpDateTime',
        elementName: 'CompanySignUpDateTime',
        
      }).e({
        name: 'latestUploadDateTime',
        elementName: 'LatestUploadDateTime',
        
      }).e({
        name: 'latestWritebackDateTime',
        elementName: 'LatestWritebackDateTime',
        
      }).e({
        name: 'qbVersion',
        elementName: 'QBVersion'
      }).e({
        name: 'companyFileName',
        elementName: 'CompanyFileName'
      }).e({
        name: 'flavorStratum',
        elementName: 'FlavorStratum'
      }).e({
        name: 'sampleFile',
        elementName: 'SampleFile',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'qbnCompanyUserAdminIdNumber',
        elementName: 'QBNCompanyUserAdminIdNumber'
      }).e({
        name: 'qbnCompanyUserAdminEmail',
        elementName: 'QBNCompanyUserAdminEmail'
      }).e({
        name: 'syncEnabled',
        elementName: 'SyncEnabled',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'latestForcedSyncDateTime',
        elementName: 'LatestForcedSyncDateTime',
        
      }).e({
        name: 'syncEnvironmentName',
        elementName: 'SyncEnvironmentName'
      }).e({
        name: 'offering',
        collection: true,
        elementName: 'Offering',
        typeInfo: com.intuit.sb.cdm.v2.Offering
      }).e({
        name: 'address',
        collection: true,
        elementName: 'Address',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'phone',
        collection: true,
        elementName: 'Phone',
        typeInfo: com.intuit.sb.cdm.v2.TelephoneNumber
      }).e({
        name: 'email',
        collection: true,
        elementName: 'Email',
        typeInfo: com.intuit.sb.cdm.v2.EmailAddress
      }).e({
        name: 'fax',
        collection: true,
        elementName: 'Fax'
      }).e({
        name: 'webSite',
        collection: true,
        elementName: 'WebSite',
        typeInfo: com.intuit.sb.cdm.v2.WebSiteAddress
      }).e({
        name: 'legalAddress',
        elementName: 'LegalAddress',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'industryType',
        elementName: 'IndustryType'
      }).e({
        name: 'fiscalYearStart',
        elementName: 'FiscalYearStart',
        typeInfo: Jsonix.Schema.XSD.Int.INSTANCE
      }).e({
        name: 'incomeTaxYearStart',
        elementName: 'IncomeTaxYearStart',
        typeInfo: Jsonix.Schema.XSD.Int.INSTANCE
      }).e({
        name: 'taxForm',
        elementName: 'TaxForm',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'taxIdentifier',
        elementName: 'TaxIdentifier'
      }).e({
        name: 'customField',
        collection: true,
        elementName: 'CustomField',
        typeInfo: com.intuit.sb.cdm.v2.CustomField
      });
  }
  {
    com.intuit.sb.cdm.v2.ShipMethodQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.ShipMethodQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.RestResponse.ps().er({
        name: 'systemResponse',
        elementName: 'SystemResponse',
        typeInfo: com.intuit.sb.cdm.v2.CdmComplexBase
      });
  }
  {
    com.intuit.sb.cdm.v2.BuildAssemblyQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.BuildAssemblyQuery.ps().e({
        name: 'assemblyItemIdSet',
        elementName: 'AssemblyItemIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnBuildAssemblyWithOrder
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesTaxGroups.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.SalesTaxGroups.ps().e({
        name: 'salesTaxGroup',
        collection: true,
        elementName: 'SalesTaxGroup',
        typeInfo: com.intuit.sb.cdm.v2.SalesTaxGroup
      });
  }
  {
    com.intuit.sb.cdm.v2.ExternalRoleQuery.b(com.intuit.sb.cdm.v2.QueryBase);
    com.intuit.sb.cdm.v2.ExternalRoleQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.ShipMethod.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.ShipMethod.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.ObjectRef.b(com.intuit.sb.cdm.v2.CdmObjectRef);
    com.intuit.sb.cdm.v2.ObjectRef.ps().e({
        name: 'lastUpdatedTime',
        elementName: 'LastUpdatedTime',
        
      });
  }
  {
    com.intuit.sb.cdm.v2.Jobs.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Jobs.ps().e({
        name: 'job',
        collection: true,
        elementName: 'Job',
        typeInfo: com.intuit.sb.cdm.v2.Job
      });
  }
  {
    com.intuit.sb.cdm.v2.Organizations.ps().e({
        name: 'organization',
        collection: true,
        elementName: 'Organization',
        typeInfo: com.intuit.sb.cdm.v2.Organization
      });
  }
  {
    com.intuit.sb.cdm.v2.ReportSalesSummary.b(com.intuit.sb.cdm.v2.ReportQueryBase);
    com.intuit.sb.cdm.v2.ReportSalesSummary.ps();
  }
  {
    com.intuit.sb.cdm.v2.Account.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Account.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'accountParentId',
        elementName: 'AccountParentId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'accountParentName',
        elementName: 'AccountParentName'
      }).e({
        name: 'desc',
        elementName: 'Desc'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'type',
        elementName: 'Type',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'subtype',
        elementName: 'Subtype'
      }).e({
        name: 'acctNum',
        elementName: 'AcctNum'
      }).e({
        name: 'bankNum',
        elementName: 'BankNum'
      }).e({
        name: 'routingNum',
        elementName: 'RoutingNum'
      }).e({
        name: 'openingBalance',
        elementName: 'OpeningBalance',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'openingBalanceDate',
        elementName: 'OpeningBalanceDate'
      }).e({
        name: 'currentBalance',
        elementName: 'CurrentBalance',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'currentBalanceWithSubAccounts',
        elementName: 'CurrentBalanceWithSubAccounts',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesRepQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.SalesRepQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.ReportAccountBalances.b(com.intuit.sb.cdm.v2.ReportQueryBase);
    com.intuit.sb.cdm.v2.ReportAccountBalances.ps().e({
        name: 'sortByColumn',
        collection: true,
        elementName: 'SortByColumn',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CustomerTypeQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.CustomerTypeQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnNameDateWithOrder
      });
  }
  {
    com.intuit.sb.cdm.v2.NameValues.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.NameValues.ps().e({
        name: 'nameValue',
        collection: true,
        elementName: 'NameValue',
        typeInfo: com.intuit.sb.cdm.v2.NameValue
      });
  }
  {
    com.intuit.sb.cdm.v2.Preferences.ps().e({
        name: 'usingAccountNumbers',
        elementName: 'UsingAccountNumbers',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'requiringAccounts',
        elementName: 'RequiringAccounts',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'usingClasses',
        elementName: 'UsingClasses',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'closingDate',
        elementName: 'ClosingDate'
      }).e({
        name: 'usingMultiCurrency',
        elementName: 'UsingMultiCurrency',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'homeCurrency',
        elementName: 'HomeCurrency',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'usingInventory',
        elementName: 'UsingInventory',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'daysBillsAreDue',
        elementName: 'DaysBillsAreDue',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'discountAccountId',
        elementName: 'DiscountAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'discountAccountName',
        elementName: 'DiscountAccountName'
      }).e({
        name: 'shipMethodId',
        elementName: 'ShipMethodId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'shipMethodName',
        elementName: 'ShipMethodName'
      }).e({
        name: 'defaultMarkup',
        elementName: 'DefaultMarkup',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'trackReimbursableExpenses',
        elementName: 'TrackReimbursableExpenses',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'autoApplyPayments',
        elementName: 'AutoApplyPayments',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'taxId',
        elementName: 'TaxId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'taxName',
        elementName: 'TaxName'
      }).e({
        name: 'taxGroupId',
        elementName: 'TaxGroupId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'taxGroupName',
        elementName: 'TaxGroupName'
      }).e({
        name: 'paySalesTax',
        elementName: 'PaySalesTax',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.PayrollItemQuery.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.PayrollItemQuery.ps();
  }
  {
    com.intuit.sb.cdm.v2.FixedAsset.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.FixedAsset.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'acquiredAs',
        elementName: 'AcquiredAs',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'purchaseDesc',
        elementName: 'PurchaseDesc'
      }).e({
        name: 'purchaseDate',
        elementName: 'PurchaseDate'
      }).e({
        name: 'purchaseCost',
        elementName: 'PurchaseCost',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'vendor',
        elementName: 'Vendor'
      }).e({
        name: 'assetAccountRef',
        elementName: 'AssetAccountRef',
        typeInfo: com.intuit.sb.cdm.v2.AccountRef
      }).e({
        name: 'salesDesc',
        elementName: 'SalesDesc'
      }).e({
        name: 'salesDate',
        elementName: 'SalesDate'
      }).e({
        name: 'salesPrice',
        elementName: 'SalesPrice',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'salesExpense',
        elementName: 'SalesExpense',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'location',
        elementName: 'Location'
      }).e({
        name: 'poNumber',
        elementName: 'PONumber'
      }).e({
        name: 'serialNumber',
        elementName: 'SerialNumber'
      }).e({
        name: 'warrantyExpDate',
        elementName: 'WarrantyExpDate'
      }).e({
        name: 'desc',
        elementName: 'Desc'
      }).e({
        name: 'notes',
        elementName: 'Notes'
      }).e({
        name: 'assetNum',
        elementName: 'AssetNum',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'costBasis',
        elementName: 'CostBasis',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'depreciation',
        elementName: 'Depreciation',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'bookValue',
        elementName: 'BookValue',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.InventorySite.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.InventorySite.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'defaultSite',
        elementName: 'DefaultSite',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'desc',
        elementName: 'Desc'
      }).e({
        name: 'contact',
        elementName: 'Contact'
      }).e({
        name: 'address',
        collection: true,
        elementName: 'Address',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'phone',
        collection: true,
        elementName: 'Phone',
        typeInfo: com.intuit.sb.cdm.v2.TelephoneNumber
      }).e({
        name: 'webSite',
        collection: true,
        elementName: 'WebSite',
        typeInfo: com.intuit.sb.cdm.v2.WebSiteAddress
      }).e({
        name: 'email',
        collection: true,
        elementName: 'Email',
        typeInfo: com.intuit.sb.cdm.v2.EmailAddress
      });
  }
  {
    com.intuit.sb.cdm.v2.Charges.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Charges.ps().e({
        name: 'charge',
        collection: true,
        elementName: 'Charge',
        typeInfo: com.intuit.sb.cdm.v2.Charge
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesOrderQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.SalesOrderQuery.ps().e({
        name: 'minimumAmount',
        elementName: 'MinimumAmount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'minimumBalance',
        elementName: 'MinimumBalance',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnSalesOrderWithOrder
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'jobIdSet',
        elementName: 'JobIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'includeDiscountLineDetails',
        elementName: 'IncludeDiscountLineDetails',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'statusFilter',
        elementName: 'StatusFilter',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.PurchaseOrders.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.PurchaseOrders.ps().e({
        name: 'purchaseOrder',
        collection: true,
        elementName: 'PurchaseOrder',
        typeInfo: com.intuit.sb.cdm.v2.PurchaseOrder
      });
  }
  {
    com.intuit.sb.cdm.v2.Accounts.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.Accounts.ps().e({
        name: 'account',
        collection: true,
        elementName: 'Account',
        typeInfo: com.intuit.sb.cdm.v2.Account
      });
  }
  {
    com.intuit.sb.cdm.v2.Check.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Check.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.CheckHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.CheckLine
      });
  }
  {
    com.intuit.sb.cdm.v2.JournalEntry.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.JournalEntry.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.JournalEntryHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.JournalEntryLine
      });
  }
  {
    com.intuit.sb.cdm.v2.NumberTypeCustomFieldDefinition.b(com.intuit.sb.cdm.v2.CustomFieldDefinition);
    com.intuit.sb.cdm.v2.NumberTypeCustomFieldDefinition.ps().e({
        name: 'defaultValue',
        elementName: 'DefaultValue',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'minValue',
        elementName: 'MinValue',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'maxValue',
        elementName: 'MaxValue',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.TemplateNames.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.TemplateNames.ps().e({
        name: 'templateName',
        collection: true,
        elementName: 'TemplateName',
        typeInfo: com.intuit.sb.cdm.v2.TemplateName
      });
  }
  {
    com.intuit.sb.cdm.v2.InventoryAdjustmentQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.InventoryAdjustmentQuery.ps().e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnInventoryAdjustmentWithOrder
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'refNumber',
        elementName: 'RefNumber'
      });
  }
  {
    com.intuit.sb.cdm.v2.InvoiceQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.InvoiceQuery.ps().e({
        name: 'minimumAmount',
        elementName: 'MinimumAmount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'minimumBalance',
        elementName: 'MinimumBalance',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'isPaid',
        elementName: 'IsPaid',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'isOverDue',
        elementName: 'IsOverDue',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'sortByColumn',
        elementName: 'SortByColumn',
        typeInfo: com.intuit.sb.cdm.v2.SortByColumnInvoiceWithOrder
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'jobIdSet',
        elementName: 'JobIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'includeDiscountLineDetails',
        elementName: 'IncludeDiscountLineDetails',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.RevertRequest.b(com.intuit.sb.cdm.v2.AbstractRequest);
    com.intuit.sb.cdm.v2.RevertRequest.ps().er({
        name: 'cdmObject',
        elementName: 'CdmObject',
        typeInfo: com.intuit.sb.cdm.v2.CdmObject
      }).a({
        name: 'fullResponse',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'FullResponse'
      });
  }
  {
    com.intuit.sb.cdm.v2.PaymentMethods.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.PaymentMethods.ps().e({
        name: 'paymentMethod',
        collection: true,
        elementName: 'PaymentMethod',
        typeInfo: com.intuit.sb.cdm.v2.PaymentMethod
      });
  }
  {
    com.intuit.sb.cdm.v2.CurrencyInfo.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.CurrencyInfo.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'currencyCode',
        elementName: 'CurrencyCode'
      }).e({
        name: 'userDefined',
        elementName: 'UserDefined',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'currencyFormat',
        elementName: 'CurrencyFormat',
        typeInfo: com.intuit.sb.cdm.v2.CurrencyFormatInfo
      }).e({
        name: 'exchangeRate',
        elementName: 'ExchangeRate',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'asOfDate',
        elementName: 'AsOfDate'
      });
  }
  {
    com.intuit.sb.cdm.v2.Job.b(com.intuit.sb.cdm.v2.Customer);
    com.intuit.sb.cdm.v2.Job.ps().e({
        name: 'customerId',
        elementName: 'CustomerId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'customerName',
        elementName: 'CustomerName'
      }).e({
        name: 'jobParentId',
        elementName: 'JobParentId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'jobParentName',
        elementName: 'JobParentName'
      });
  }
  {
    com.intuit.sb.cdm.v2.JobType.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.JobType.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'jobTypeParentId',
        elementName: 'JobTypeParentId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'jobTypeParentName',
        elementName: 'JobTypeParentName'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.BillPayment.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.BillPayment.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.BillPaymentHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.BillPaymentLine
      });
  }
  {
    com.intuit.sb.cdm.v2.Vendor.b(com.intuit.sb.cdm.v2.RoleBase);
    com.intuit.sb.cdm.v2.Vendor.ps().e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'showAs',
        elementName: 'ShowAs'
      }).e({
        name: 'vendorTypeId',
        elementName: 'VendorTypeId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'vendorTypeName',
        elementName: 'VendorTypeName'
      }).e({
        name: 'salesTermId',
        elementName: 'SalesTermId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'salesTermName',
        elementName: 'SalesTermName'
      }).e({
        name: 'openBalance',
        elementName: 'OpenBalance',
        typeInfo: com.intuit.sb.cdm.v2.Money
      }).e({
        name: 'openBalanceDate',
        elementName: 'OpenBalanceDate'
      }).e({
        name: 'creditLimit',
        elementName: 'CreditLimit',
        typeInfo: com.intuit.sb.cdm.v2.Money
      }).e({
        name: 'acctNum',
        elementName: 'AcctNum'
      }).e({
        name: 'vendor1099',
        elementName: 'Vendor1099',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CurrencyInfos.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.CurrencyInfos.ps().e({
        name: 'currencyInfo',
        collection: true,
        elementName: 'CurrencyInfo',
        typeInfo: com.intuit.sb.cdm.v2.CurrencyInfo
      });
  }
  {
    com.intuit.sb.cdm.v2.BillPaymentCreditCardQuery.b(com.intuit.sb.cdm.v2.TransactionQueryBase);
    com.intuit.sb.cdm.v2.BillPaymentCreditCardQuery.ps().e({
        name: 'minimumAmount',
        elementName: 'MinimumAmount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'includeLine',
        elementName: 'IncludeLine',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesTaxPaymentCheck.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.SalesTaxPaymentCheck.ps().e({
        name: 'header',
        elementName: 'Header',
        typeInfo: com.intuit.sb.cdm.v2.SalesTaxPaymentCheckHeader
      }).e({
        name: 'line',
        collection: true,
        elementName: 'Line',
        typeInfo: com.intuit.sb.cdm.v2.SalesTaxPaymentCheckLine
      });
  }
  {
    com.intuit.sb.cdm.v2.BOMComponent.b(com.intuit.sb.cdm.v2.CdmObject);
    com.intuit.sb.cdm.v2.BOMComponent.ps().e({
        name: 'itemParentId',
        elementName: 'ItemParentId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemParentName',
        elementName: 'ItemParentName'
      }).e({
        name: 'itemId',
        elementName: 'ItemId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemName',
        elementName: 'ItemName'
      }).e({
        name: 'itemType',
        elementName: 'ItemType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'qty',
        elementName: 'Qty',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'uomId',
        elementName: 'UOMId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'uomAbbrv',
        elementName: 'UOMAbbrv'
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnInventorySiteWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnInventorySiteWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.PurchaseOrderLine.b(com.intuit.sb.cdm.v2.LineBase);
    com.intuit.sb.cdm.v2.PurchaseOrderLine.ps().e({
        name: 'amount',
        elementName: 'Amount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'classId',
        elementName: 'ClassId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'className',
        elementName: 'ClassName'
      }).e({
        name: 'reimbursableInfo',
        elementName: 'ReimbursableInfo',
        typeInfo: com.intuit.sb.cdm.v2.ReimbursableInfo
      }).e({
        name: 'itemId',
        elementName: 'ItemId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemName',
        elementName: 'ItemName'
      }).e({
        name: 'itemType',
        elementName: 'ItemType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'unitPrice',
        elementName: 'UnitPrice',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'qty',
        elementName: 'Qty',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'uomId',
        elementName: 'UOMId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'uomAbbrv',
        elementName: 'UOMAbbrv'
      }).e({
        name: 'overrideItemAccountId',
        elementName: 'OverrideItemAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'overrideItemAccountName',
        elementName: 'OverrideItemAccountName'
      }).e({
        name: 'manPartNum',
        elementName: 'ManPartNum'
      }).e({
        name: 'serviceDate',
        elementName: 'ServiceDate'
      }).e({
        name: 'custom1',
        elementName: 'Custom1'
      }).e({
        name: 'custom2',
        elementName: 'Custom2'
      });
  }
  {
    com.intuit.sb.cdm.v2.EmailAddress.ps().e({
        name: 'id',
        elementName: 'Id',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'address',
        elementName: 'Address'
      }).e({
        name: 'dateLastVerified',
        elementName: 'DateLastVerified',
        
      }).e({
        name: '_default',
        elementName: 'Default',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'tag',
        collection: true,
        elementName: 'Tag'
      });
  }
  {
    com.intuit.sb.cdm.v2.JournalEntryQueryBase.b(com.intuit.sb.cdm.v2.QueryBase);
    com.intuit.sb.cdm.v2.JournalEntryQueryBase.ps().e({
        name: 'customFieldEnable',
        elementName: 'CustomFieldEnable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'customFieldQueryParam',
        collection: true,
        elementName: 'CustomFieldQueryParam',
        typeInfo: com.intuit.sb.cdm.v2.CustomFieldQueryParam
      }).e({
        name: 'customFieldFilter',
        elementName: 'CustomFieldFilter',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'customFieldDefinitionIdSet',
        elementName: 'CustomFieldDefinitionIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'contactIdSet',
        elementName: 'ContactIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'transactionIdSet',
        elementName: 'TransactionIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'accountIdSet',
        elementName: 'AccountIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'startCreatedTMS',
        elementName: 'StartCreatedTMS',
        
      }).e({
        name: 'endCreatedTMS',
        elementName: 'EndCreatedTMS',
        
      }).e({
        name: 'startModifiedTMS',
        elementName: 'StartModifiedTMS',
        
      }).e({
        name: 'endModifiedTMS',
        elementName: 'EndModifiedTMS',
        
      }).e({
        name: 'startTransactionDate',
        elementName: 'StartTransactionDate'
      }).e({
        name: 'endTransactionDate',
        elementName: 'EndTransactionDate'
      });
  }
  {
    com.intuit.sb.cdm.v2.ChargeLine.b(com.intuit.sb.cdm.v2.LineBase);
    com.intuit.sb.cdm.v2.ChargeLine.ps().e({
        name: 'itemId',
        elementName: 'ItemId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemName',
        elementName: 'ItemName'
      }).e({
        name: 'itemType',
        elementName: 'ItemType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'unitPrice',
        elementName: 'UnitPrice',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'qty',
        elementName: 'Qty',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'uomId',
        elementName: 'UOMId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'uomAbbrv',
        elementName: 'UOMAbbrv'
      }).e({
        name: 'overrideItemAccountId',
        elementName: 'OverrideItemAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'overrideItemAccountName',
        elementName: 'OverrideItemAccountName'
      }).e({
        name: 'amount',
        elementName: 'Amount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditCardRefundHeader.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.CreditCardRefundHeader.ps().e({
        name: 'customerId',
        elementName: 'CustomerId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'customerName',
        elementName: 'CustomerName'
      }).e({
        name: 'jobId',
        elementName: 'JobId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'jobName',
        elementName: 'JobName'
      }).e({
        name: 'refundAccountId',
        elementName: 'RefundAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'refundAccountName',
        elementName: 'RefundAccountName'
      }).e({
        name: 'arAccountId',
        elementName: 'ARAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'arAccountName',
        elementName: 'ARAccountName'
      }).e({
        name: 'paymentMethodId',
        elementName: 'PaymentMethodId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'paymentMethodName',
        elementName: 'PaymentMethodName'
      }).e({
        name: 'address',
        elementName: 'Address',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'totalAmt',
        elementName: 'TotalAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'ccDetail',
        elementName: 'CCDetail',
        typeInfo: com.intuit.sb.cdm.v2.CreditCardPayment
      }).e({
        name: 'processPayment',
        elementName: 'ProcessPayment',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'appliedTo',
        collection: true,
        elementName: 'AppliedTo',
        typeInfo: com.intuit.sb.cdm.v2.RefundAppliedTo
      });
  }
  {
    com.intuit.sb.cdm.v2.SyncStatusParam.ps().e({
        name: 'idSet',
        elementName: 'IdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'syncToken',
        elementName: 'SyncToken'
      }).e({
        name: 'objectType',
        elementName: 'ObjectType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'partyId',
        elementName: 'PartyId'
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditCardCreditLine.b(com.intuit.sb.cdm.v2.LinePurchase);
    com.intuit.sb.cdm.v2.CreditCardCreditLine.ps();
  }
  {
    com.intuit.sb.cdm.v2.CheckHeader.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.CheckHeader.ps().e({
        name: 'bankAccountId',
        elementName: 'BankAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'bankAccountName',
        elementName: 'BankAccountName'
      }).e({
        name: 'entityId',
        elementName: 'EntityId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'entityName',
        elementName: 'EntityName'
      }).e({
        name: 'entityType',
        elementName: 'EntityType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'payeeAddr',
        elementName: 'PayeeAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'totalAmt',
        elementName: 'TotalAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'toBePrinted',
        elementName: 'ToBePrinted',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'txnId',
        elementName: 'TxnId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'txnNum',
        elementName: 'TxnNum'
      });
  }
  {
    com.intuit.sb.cdm.v2.BillPaymentLine.b(com.intuit.sb.cdm.v2.LineBase);
    com.intuit.sb.cdm.v2.BillPaymentLine.ps().e({
        name: 'amount',
        elementName: 'Amount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'balance',
        elementName: 'Balance',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'txnId',
        elementName: 'TxnId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'txnNum',
        elementName: 'TxnNum'
      }).e({
        name: 'discountAmt',
        elementName: 'DiscountAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'discountId',
        elementName: 'DiscountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'discountName',
        elementName: 'DiscountName'
      }).e({
        name: 'discountAccountId',
        elementName: 'DiscountAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'discountAccountName',
        elementName: 'DiscountAccountName'
      });
  }
  {
    com.intuit.sb.cdm.v2.CDCObject.ps().e({
        name: 'objectName',
        elementName: 'ObjectName',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'mostRecentTMS',
        elementName: 'MostRecentTMS',
        
      });
  }
  {
    com.intuit.sb.cdm.v2.CashPurchaseHeader.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.CashPurchaseHeader.ps().e({
        name: 'cashAccountId',
        elementName: 'CashAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'cashAccountName',
        elementName: 'CashAccountName'
      }).e({
        name: 'entityId',
        elementName: 'EntityId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'entityName',
        elementName: 'EntityName'
      }).e({
        name: 'entityType',
        elementName: 'EntityType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'payeeAddr',
        elementName: 'PayeeAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'totalAmt',
        elementName: 'TotalAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'txnId',
        elementName: 'TxnId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'txnNum',
        elementName: 'TxnNum'
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnEmployeeWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnEmployeeWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.AccountRef.ps().e({
        name: 'accountId',
        elementName: 'AccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'accountName',
        elementName: 'AccountName'
      }).e({
        name: 'accountType',
        elementName: 'AccountType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.WorkersCompCode.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.WorkersCompCode.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'desc',
        elementName: 'Desc'
      }).e({
        name: 'currentRate',
        elementName: 'CurrentRate',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'currentEffectiveDate',
        elementName: 'CurrentEffectiveDate'
      }).e({
        name: 'nextRate',
        elementName: 'NextRate',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'nextEffectiveDate',
        elementName: 'NextEffectiveDate'
      }).e({
        name: 'rateHistory',
        collection: true,
        elementName: 'RateHistory',
        typeInfo: com.intuit.sb.cdm.v2.RateHistory
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditCardChargeLine.b(com.intuit.sb.cdm.v2.LinePurchase);
    com.intuit.sb.cdm.v2.CreditCardChargeLine.ps();
  }
  {
    com.intuit.sb.cdm.v2.Offering.ps().e({
        name: 'offeringId',
        elementName: 'OfferingId',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'offeringName',
        elementName: 'OfferingName'
      }).e({
        name: 'activationDate',
        elementName: 'ActivationDate'
      }).e({
        name: 'trialExpiryDate',
        elementName: 'TrialExpiryDate'
      }).e({
        name: 'cancelationDate',
        elementName: 'CancelationDate'
      }).e({
        name: 'seats',
        elementName: 'Seats',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'seatType',
        elementName: 'SeatType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnSalesReceiptWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnSalesReceiptWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.EmployeeRef.ps().e({
        name: 'employeeId',
        elementName: 'EmployeeId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'employeeName',
        elementName: 'EmployeeName'
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnChargeWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnChargeWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.CreditCardCreditHeader.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.CreditCardCreditHeader.ps().e({
        name: 'ccAccountId',
        elementName: 'CCAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'ccAccountName',
        elementName: 'CCAccountName'
      }).e({
        name: 'entityId',
        elementName: 'EntityId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'entityName',
        elementName: 'EntityName'
      }).e({
        name: 'entityType',
        elementName: 'EntityType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'totalAmt',
        elementName: 'TotalAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.ModificationMetaData.ps().e({
        name: 'createdBy',
        elementName: 'CreatedBy'
      }).e({
        name: 'createdById',
        elementName: 'CreatedById'
      }).e({
        name: 'createTime',
        elementName: 'CreateTime',
       // 
      }).e({
        name: 'lastModifiedBy',
        elementName: 'LastModifiedBy'
      }).e({
        name: 'lastModifiedById',
        elementName: 'LastModifiedById'
      }).e({
        name: 'lastUpdatedTime',
        elementName: 'LastUpdatedTime',
       // 
      });
  }
  {
    com.intuit.sb.cdm.v2.CdmCollections.b(com.intuit.sb.cdm.v2.CdmComplexBase);
    com.intuit.sb.cdm.v2.CdmCollections.ps();
  }
  {
    com.intuit.sb.cdm.v2.HeaderBase.ps().e({
        name: 'docNumber',
        elementName: 'DocNumber'
      }).e({
        name: 'txnDate',
        elementName: 'TxnDate'
      }).e({
        name: 'currency',
        elementName: 'Currency',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'msg',
        elementName: 'Msg'
      }).e({
        name: 'note',
        elementName: 'Note'
      }).e({
        name: 'status',
        elementName: 'Status'
      });
  }
  {
    com.intuit.sb.cdm.v2.AdvSummaryReportParam.b(com.intuit.sb.cdm.v2.AdvReportParamBase);
    com.intuit.sb.cdm.v2.AdvSummaryReportParam.ps();
  }
  {
    com.intuit.sb.cdm.v2.PriceLevelPerItem.b(com.intuit.sb.cdm.v2.CdmObject);
    com.intuit.sb.cdm.v2.PriceLevelPerItem.ps().e({
        name: 'itemId',
        elementName: 'ItemId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemName',
        elementName: 'ItemName'
      }).e({
        name: 'itemType',
        elementName: 'ItemType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'customPrice',
        elementName: 'CustomPrice',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'customPricePercent',
        elementName: 'CustomPricePercent',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CustomFieldQueryParam.ps().e({
        name: 'customFieldDefinitionId',
        elementName: 'CustomFieldDefinitionId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'customFieldValue',
        elementName: 'CustomFieldValue'
      }).e({
        name: 'operator',
        elementName: 'Operator',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.BuildAssemblyLine.b(com.intuit.sb.cdm.v2.LineBase);
    com.intuit.sb.cdm.v2.BuildAssemblyLine.ps().e({
        name: 'itemId',
        elementName: 'ItemId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemName',
        elementName: 'ItemName'
      }).e({
        name: 'itemType',
        elementName: 'ItemType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'siteId',
        elementName: 'SiteId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'siteName',
        elementName: 'SiteName'
      }).e({
        name: 'qty',
        elementName: 'Qty',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.ExternalKey.b(com.intuit.sb.cdm.v2.IdType);
    com.intuit.sb.cdm.v2.ExternalKey.ps();
  }
  {
    com.intuit.sb.cdm.v2.InventoryTransferLine.b(com.intuit.sb.cdm.v2.LineBase);
    com.intuit.sb.cdm.v2.InventoryTransferLine.ps().e({
        name: 'itemId',
        elementName: 'ItemId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemName',
        elementName: 'ItemName'
      }).e({
        name: 'itemType',
        elementName: 'ItemType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'qty',
        elementName: 'Qty',
        typeInfo: com.intuit.sb.cdm.v2.QtyAdj
      });
  }
  {
    com.intuit.sb.cdm.v2.NumberTypeCustomField.b(com.intuit.sb.cdm.v2.CustomField);
    com.intuit.sb.cdm.v2.NumberTypeCustomField.ps().e({
        name: 'value',
        elementName: 'Value',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.StringTypeCustomField.b(com.intuit.sb.cdm.v2.CustomField);
    com.intuit.sb.cdm.v2.StringTypeCustomField.ps().e({
        name: 'value',
        elementName: 'Value'
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesTaxPaymentCheckHeader.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.SalesTaxPaymentCheckHeader.ps().e({
        name: 'vendorId',
        elementName: 'VendorId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'vendorName',
        elementName: 'VendorName'
      }).e({
        name: 'bankAccountId',
        elementName: 'BankAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'bankAccountName',
        elementName: 'BankAccountName'
      }).e({
        name: 'toBePrinted',
        elementName: 'ToBePrinted',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'checkDetail',
        elementName: 'CheckDetail',
        typeInfo: com.intuit.sb.cdm.v2.CheckPayment
      }).e({
        name: 'payeeAddr',
        elementName: 'PayeeAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'totalAmt',
        elementName: 'TotalAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.CashPayment.ps().e({
        name: 'desc',
        elementName: 'Desc'
      });
  }
  {
    com.intuit.sb.cdm.v2.RefundAppliedTo.ps().e({
        name: 'txnId',
        elementName: 'TxnId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'txnNum',
        elementName: 'TxnNum'
      }).e({
        name: 'txnType',
        elementName: 'TxnType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'refundAmt',
        elementName: 'RefundAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'creditRemaining',
        elementName: 'CreditRemaining',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.InventoryAdjustmentLine.b(com.intuit.sb.cdm.v2.LineBase);
    com.intuit.sb.cdm.v2.InventoryAdjustmentLine.ps().e({
        name: 'itemId',
        elementName: 'ItemId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemName',
        elementName: 'ItemName'
      }).e({
        name: 'itemType',
        elementName: 'ItemType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'qtyAdj',
        elementName: 'QtyAdj',
        typeInfo: com.intuit.sb.cdm.v2.QtyAdj
      }).e({
        name: 'valueAdj',
        elementName: 'ValueAdj',
        typeInfo: com.intuit.sb.cdm.v2.ValueAdj
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnDepositWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnDepositWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.BillPaymentCreditCardHeader.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.BillPaymentCreditCardHeader.ps().e({
        name: 'entityId',
        elementName: 'EntityId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'entityName',
        elementName: 'EntityName'
      }).e({
        name: 'entityType',
        elementName: 'EntityType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'apAccountId',
        elementName: 'APAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'apAccountName',
        elementName: 'APAccountName'
      }).e({
        name: 'ccAccountId',
        elementName: 'CCAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'ccAccountName',
        elementName: 'CCAccountName'
      }).e({
        name: 'ccDetail',
        elementName: 'CCDetail',
        typeInfo: com.intuit.sb.cdm.v2.CreditCardPayment
      }).e({
        name: 'totalAmt',
        elementName: 'TotalAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.PaymentDetail.ps().e({
        name: 'cash',
        elementName: 'Cash',
        typeInfo: com.intuit.sb.cdm.v2.CashPayment
      }).e({
        name: 'creditCard',
        elementName: 'CreditCard',
        typeInfo: com.intuit.sb.cdm.v2.CreditCardPayment
      }).e({
        name: 'check',
        elementName: 'Check',
        typeInfo: com.intuit.sb.cdm.v2.CheckPayment
      });
  }
  {
    com.intuit.sb.cdm.v2.DateTypeCustomField.b(com.intuit.sb.cdm.v2.CustomField);
    com.intuit.sb.cdm.v2.DateTypeCustomField.ps().e({
        name: 'value',
        elementName: 'Value',
        
      });
  }
  {
    com.intuit.sb.cdm.v2.BillHeader.b(com.intuit.sb.cdm.v2.HeaderPurchase);
    com.intuit.sb.cdm.v2.BillHeader.ps().e({
        name: 'payerId',
        elementName: 'PayerId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'payerName',
        elementName: 'PayerName'
      }).e({
        name: 'apAccountId',
        elementName: 'APAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'apAccountName',
        elementName: 'APAccountName'
      }).e({
        name: 'salesTermId',
        elementName: 'SalesTermId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'salesTermName',
        elementName: 'SalesTermName'
      }).e({
        name: 'dueDate',
        elementName: 'DueDate'
      }).e({
        name: 'remitToAddr',
        elementName: 'RemitToAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'shipAddr',
        elementName: 'ShipAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'balance',
        elementName: 'Balance',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'txnId',
        collection: true,
        elementName: 'TxnId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      });
  }
  {

    com.intuit.sb.cdm.v2.IdType.ps({
      // parse : function(value){
      //   console.log('parse')
      //   return value;
      // },
      // print : function(value){

      //   console.log('print')
      //   return value;
      // },
      // CLASS_NAME : 'com.intuit.sb.cdm.v2.IdType'

    }).v({
        name: 'id',
        parse : function(value){}
      }).a({
        name: 'idDomain',
        //typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: 'idDomain'
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnInventoryAdjustmentWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnInventoryAdjustmentWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.QtyAdj.ps().e({
        name: 'newQty',
        elementName: 'NewQty',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'qtyDiff',
        elementName: 'QtyDiff',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.DepositHeader.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.DepositHeader.ps().e({
        name: 'depositToAccountId',
        elementName: 'DepositToAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'depositToAccountName',
        elementName: 'DepositToAccountName'
      }).e({
        name: 'cashBack',
        elementName: 'CashBack',
        typeInfo: com.intuit.sb.cdm.v2.CashBackInfo
      }).e({
        name: 'totalAmt',
        elementName: 'TotalAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.ValueAdj.ps().e({
        name: 'newValue',
        elementName: 'NewValue',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'newQty',
        elementName: 'NewQty',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesOrderLine.b(com.intuit.sb.cdm.v2.LineSales);
    com.intuit.sb.cdm.v2.SalesOrderLine.ps().e({
        name: 'manuallyClosed',
        elementName: 'ManuallyClosed',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.LineBase.ps().e({
        name: 'id',
        elementName: 'Id',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'desc',
        elementName: 'Desc'
      }).e({
        name: 'groupMember',
        elementName: 'GroupMember',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'customField',
        collection: true,
        elementName: 'CustomField',
        typeInfo: com.intuit.sb.cdm.v2.CustomField
      });
  }
  {
    com.intuit.sb.cdm.v2.ColDataType.ps().v({
        name: 'value'
      }).a({
        name: 'idDomain',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: 'idDomain'
      });
  }
  {
    com.intuit.sb.cdm.v2.JournalEntryLine.b(com.intuit.sb.cdm.v2.LineBase);
    com.intuit.sb.cdm.v2.JournalEntryLine.ps().e({
        name: 'amount',
        elementName: 'Amount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'postingType',
        elementName: 'PostingType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'accountId',
        elementName: 'AccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'accountName',
        elementName: 'AccountName'
      }).e({
        name: 'accountType',
        elementName: 'AccountType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'entityId',
        elementName: 'EntityId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'entityName',
        elementName: 'EntityName'
      }).e({
        name: 'entityType',
        elementName: 'EntityType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'classId',
        elementName: 'ClassId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'className',
        elementName: 'ClassName'
      }).e({
        name: 'billableStatus',
        elementName: 'BillableStatus',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.TemplateRefMapQuery.b(com.intuit.sb.cdm.v2.QueryBase);
    com.intuit.sb.cdm.v2.TemplateRefMapQuery.ps().e({
        name: 'templateRefParam',
        collection: true,
        elementName: 'TemplateRefParam',
        typeInfo: com.intuit.sb.cdm.v2.TemplateRefParam
      });
  }
  {
    com.intuit.sb.cdm.v2.PurchaseOrderHeader.b(com.intuit.sb.cdm.v2.HeaderPurchase);
    com.intuit.sb.cdm.v2.PurchaseOrderHeader.ps().e({
        name: 'classId',
        elementName: 'ClassId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'className',
        elementName: 'ClassName'
      }).e({
        name: 'salesTermId',
        elementName: 'SalesTermId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'salesTermName',
        elementName: 'SalesTermName'
      }).e({
        name: 'dueDate',
        elementName: 'DueDate'
      }).e({
        name: 'expectedDate',
        elementName: 'ExpectedDate'
      }).e({
        name: 'remitToAddr',
        elementName: 'RemitToAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'dropShipToCustomer',
        elementName: 'DropShipToCustomer',
        typeInfo: com.intuit.sb.cdm.v2.CustomerRef
      }).e({
        name: 'dropShipToVendor',
        elementName: 'DropShipToVendor',
        typeInfo: com.intuit.sb.cdm.v2.VendorRef
      }).e({
        name: 'dropShipToEmployee',
        elementName: 'DropShipToEmployee',
        typeInfo: com.intuit.sb.cdm.v2.EmployeeRef
      }).e({
        name: 'dropShipToOtherName',
        elementName: 'DropShipToOtherName',
        typeInfo: com.intuit.sb.cdm.v2.OtherNameRef
      }).e({
        name: 'shipAddr',
        elementName: 'ShipAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'shipMethodId',
        elementName: 'ShipMethodId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'shipMethodName',
        elementName: 'ShipMethodName'
      }).e({
        name: 'fob',
        elementName: 'FOB'
      }).e({
        name: 'poEmail',
        elementName: 'POEmail'
      }).e({
        name: 'toBePrinted',
        elementName: 'ToBePrinted',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'toBeEmailed',
        elementName: 'ToBeEmailed',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'custom1',
        elementName: 'Custom1'
      }).e({
        name: 'custom2',
        elementName: 'Custom2'
      });
  }
  {
    com.intuit.sb.cdm.v2.CurrencyFormatInfo.ps().e({
        name: 'decimalPlaces',
        elementName: 'DecimalPlaces',
        typeInfo: Jsonix.Schema.XSD.Int.INSTANCE
      }).e({
        name: 'decimalSeparator',
        elementName: 'DecimalSeparator',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'valueGroupSeparator',
        elementName: 'ValueGroupSeparator',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'valueGrouping',
        elementName: 'ValueGrouping'
      });
  }
  {
    com.intuit.sb.cdm.v2.HeaderPurchase.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.HeaderPurchase.ps().e({
        name: 'vendorId',
        elementName: 'VendorId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'vendorName',
        elementName: 'VendorName'
      }).e({
        name: 'billEmail',
        elementName: 'BillEmail'
      }).e({
        name: 'replyEmail',
        elementName: 'ReplyEmail'
      }).e({
        name: 'totalAmt',
        elementName: 'TotalAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.InvoiceHeader.b(com.intuit.sb.cdm.v2.HeaderSales);
    com.intuit.sb.cdm.v2.InvoiceHeader.ps().e({
        name: 'arAccountId',
        elementName: 'ARAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'arAccountName',
        elementName: 'ARAccountName'
      }).e({
        name: 'salesTermId',
        elementName: 'SalesTermId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'salesTermName',
        elementName: 'SalesTermName'
      }).e({
        name: 'dueDate',
        elementName: 'DueDate'
      }).e({
        name: 'billAddr',
        elementName: 'BillAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'shipAddr',
        elementName: 'ShipAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'billEmail',
        elementName: 'BillEmail'
      }).e({
        name: 'shipMethodId',
        elementName: 'ShipMethodId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'shipMethodName',
        elementName: 'ShipMethodName'
      }).e({
        name: 'balance',
        elementName: 'Balance',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'discountAmt',
        elementName: 'DiscountAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'discountRate',
        elementName: 'DiscountRate',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'discountAccountId',
        elementName: 'DiscountAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'discountAccountName',
        elementName: 'DiscountAccountName'
      }).e({
        name: 'discountTaxable',
        elementName: 'DiscountTaxable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'txnId',
        collection: true,
        elementName: 'TxnId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditCardPayment.ps().e({
        name: 'creditChargeInfo',
        elementName: 'CreditChargeInfo',
        typeInfo: com.intuit.sb.cdm.v2.CreditChargeInfo
      }).e({
        name: 'creditChargeResponse',
        elementName: 'CreditChargeResponse',
        typeInfo: com.intuit.sb.cdm.v2.CreditChargeResponse
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesTaxRef.ps().e({
        name: 'taxId',
        elementName: 'TaxId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'taxName',
        elementName: 'TaxName'
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnTaskWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnTaskWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.CreditCardChargeHeader.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.CreditCardChargeHeader.ps().e({
        name: 'ccAccountId',
        elementName: 'CCAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'ccAccountName',
        elementName: 'CCAccountName'
      }).e({
        name: 'entityId',
        elementName: 'EntityId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'entityName',
        elementName: 'EntityName'
      }).e({
        name: 'entityType',
        elementName: 'EntityType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'totalAmt',
        elementName: 'TotalAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnEstimateWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnEstimateWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.CustomFieldDefinitionSet.b(com.intuit.sb.cdm.v2.CdmObject);
    com.intuit.sb.cdm.v2.CustomFieldDefinitionSet.ps().e({
        name: 'targetRealmId',
        elementName: 'TargetRealmId'
      }).e({
        name: 'setId',
        elementName: 'SetId',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'setName',
        elementName: 'SetName'
      });
  }
  {
    com.intuit.sb.cdm.v2.ColDesc.ps().e({
        name: 'colTitle',
        elementName: 'ColTitle'
      }).e({
        name: 'colType',
        elementName: 'ColType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnNameDateWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnNameDateWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.BuildAssemblyHeader.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.BuildAssemblyHeader.ps().e({
        name: 'itemId',
        elementName: 'ItemId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemName',
        elementName: 'ItemName'
      }).e({
        name: 'itemType',
        elementName: 'ItemType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'siteId',
        elementName: 'SiteId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'siteName',
        elementName: 'SiteName'
      }).e({
        name: 'qtyToBuild',
        elementName: 'QtyToBuild',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'qtyCanBuild',
        elementName: 'QtyCanBuild',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'qtyOnSalesOrder',
        elementName: 'QtyOnSalesOrder',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.VendorRef.ps().e({
        name: 'vendorId',
        elementName: 'VendorId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'vendorName',
        elementName: 'VendorName'
      });
  }
  {
    com.intuit.sb.cdm.v2.TxnRef.ps().e({
        name: 'txnId',
        elementName: 'TxnId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'txnNum',
        elementName: 'TxnNum'
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnAccountWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnAccountWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.TelephoneNumber.ps().e({
        name: 'id',
        elementName: 'Id',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'deviceType',
        elementName: 'DeviceType'
      }).e({
        name: 'countryCode',
        elementName: 'CountryCode'
      }).e({
        name: 'areaCode',
        elementName: 'AreaCode'
      }).e({
        name: 'exchangeCode',
        elementName: 'ExchangeCode'
      }).e({
        name: 'extension',
        elementName: 'Extension'
      }).e({
        name: 'freeFormNumber',
        elementName: 'FreeFormNumber'
      }).e({
        name: 'pin',
        elementName: 'PIN'
      }).e({
        name: 'dateLastVerified',
        elementName: 'DateLastVerified',
        
      }).e({
        name: '_default',
        elementName: 'Default',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'tag',
        collection: true,
        elementName: 'Tag'
      });
  }
  {
    com.intuit.sb.cdm.v2.JobInfo.ps().e({
        name: 'status',
        elementName: 'Status',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'startDate',
        elementName: 'StartDate'
      }).e({
        name: 'projectedEndDate',
        elementName: 'ProjectedEndDate'
      }).e({
        name: 'endDate',
        elementName: 'EndDate'
      }).e({
        name: 'description',
        elementName: 'Description'
      }).e({
        name: 'jobTypeId',
        elementName: 'JobTypeId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'jobTypeName',
        elementName: 'JobTypeName'
      });
  }
  {
    com.intuit.sb.cdm.v2.OtherNameRef.ps().e({
        name: 'otherNameId',
        elementName: 'OtherNameId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'otherNameName',
        elementName: 'OtherNameName'
      });
  }
  {
    com.intuit.sb.cdm.v2.ItemReceiptLine.b(com.intuit.sb.cdm.v2.LinePurchase);
    com.intuit.sb.cdm.v2.ItemReceiptLine.ps().e({
        name: 'txnId',
        elementName: 'TxnId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'txnLineId',
        elementName: 'TxnLineId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnBuildAssemblyWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnBuildAssemblyWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnFixedAssetWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnFixedAssetWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnItemReceiptWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnItemReceiptWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnPayrollNonWageItemWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnPayrollNonWageItemWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.RecordCount.ps().e({
        name: 'objectName',
        elementName: 'ObjectName'
      }).e({
        name: 'count',
        elementName: 'Count',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.BillPaymentHeader.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.BillPaymentHeader.ps().e({
        name: 'entityId',
        elementName: 'EntityId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'entityName',
        elementName: 'EntityName'
      }).e({
        name: 'entityType',
        elementName: 'EntityType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'apAccountId',
        elementName: 'APAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'apAccountName',
        elementName: 'APAccountName'
      }).e({
        name: 'bankAccountId',
        elementName: 'BankAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'bankAccountName',
        elementName: 'BankAccountName'
      }).e({
        name: 'toBePrinted',
        elementName: 'ToBePrinted',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'checkDetail',
        elementName: 'CheckDetail',
        typeInfo: com.intuit.sb.cdm.v2.CheckPayment
      }).e({
        name: 'payeeAddr',
        elementName: 'PayeeAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'ccAccountId',
        elementName: 'CCAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'ccAccountName',
        elementName: 'CCAccountName'
      }).e({
        name: 'ccDetail',
        elementName: 'CCDetail',
        typeInfo: com.intuit.sb.cdm.v2.CreditCardPayment
      }).e({
        name: 'totalAmt',
        elementName: 'TotalAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.NameQueryBase.b(com.intuit.sb.cdm.v2.ListQueryBase);
    com.intuit.sb.cdm.v2.NameQueryBase.ps();
  }
  {
    com.intuit.sb.cdm.v2.CreditMemoHeader.b(com.intuit.sb.cdm.v2.HeaderSales);
    com.intuit.sb.cdm.v2.CreditMemoHeader.ps().e({
        name: 'arAccountId',
        elementName: 'ARAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'arAccountName',
        elementName: 'ARAccountName'
      }).e({
        name: 'salesTermId',
        elementName: 'SalesTermId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'salesTermName',
        elementName: 'SalesTermName'
      }).e({
        name: 'dueDate',
        elementName: 'DueDate'
      }).e({
        name: 'billAddr',
        elementName: 'BillAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'shipAddr',
        elementName: 'ShipAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'billEmail',
        elementName: 'BillEmail'
      }).e({
        name: 'shipMethodId',
        elementName: 'ShipMethodId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'shipMethodName',
        elementName: 'ShipMethodName'
      }).e({
        name: 'remainingCredit',
        elementName: 'RemainingCredit',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'detail',
        elementName: 'Detail',
        typeInfo: com.intuit.sb.cdm.v2.PaymentDetail
      }).e({
        name: 'discountAmt',
        elementName: 'DiscountAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'discountRate',
        elementName: 'DiscountRate',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'discountAccountId',
        elementName: 'DiscountAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'discountAccountName',
        elementName: 'DiscountAccountName'
      }).e({
        name: 'discountTaxable',
        elementName: 'DiscountTaxable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SortBy.ps().v({
        name: 'value'
      }).a({
        name: 'sortOrder',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: 'sortOrder'
      });
  }
  {
    com.intuit.sb.cdm.v2.ItemReceiptHeader.b(com.intuit.sb.cdm.v2.HeaderPurchase);
    com.intuit.sb.cdm.v2.ItemReceiptHeader.ps().e({
        name: 'apAccountId',
        elementName: 'APAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'apAccountName',
        elementName: 'APAccountName'
      }).e({
        name: 'txnId',
        collection: true,
        elementName: 'TxnId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      });
  }
  {
    com.intuit.sb.cdm.v2.DataRow.ps().e({
        name: 'colData',
        collection: true,
        elementName: 'ColData',
        typeInfo: com.intuit.sb.cdm.v2.ColDataType
      });
  }
  {
    com.intuit.sb.cdm.v2.AdvDetailReportParam.b(com.intuit.sb.cdm.v2.AdvReportParamBase);
    com.intuit.sb.cdm.v2.AdvDetailReportParam.ps().e({
        name: 'columns',
        collection: true,
        elementName: 'Columns',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.NgIdSet.ps().e({
        name: 'ngId',
        elementName: 'NgId'
      }).e({
        name: 'syncToken',
        elementName: 'SyncToken'
      }).e({
        name: 'ngObjectType',
        elementName: 'NgObjectType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'partyId',
        elementName: 'PartyId'
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnCreditMemoWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnCreditMemoWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.AbstractResponse.b(com.intuit.sb.cdm.v2.CdmComplexBase);
    com.intuit.sb.cdm.v2.AbstractResponse.ps().er({
        name: 'cdmObjectRef',
        elementName: 'CdmObjectRef',
        typeInfo: com.intuit.sb.cdm.v2.CdmObjectRef
      }).er({
        name: 'cdmObject',
        elementName: 'CdmObject',
        typeInfo: com.intuit.sb.cdm.v2.CdmObject
      }).e({
        name: 'requestName',
        elementName: 'RequestName',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'processedTime',
        elementName: 'ProcessedTime',
        
      }).a({
        name: 'requestId',
        attributeName: 'RequestId'
      });
  }
  {
    com.intuit.sb.cdm.v2.UOMConvUnit.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'abbrv',
        elementName: 'Abbrv'
      }).e({
        name: 'convRatio',
        elementName: 'ConvRatio',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.TemplateRefParam.ps().e({
        name: 'txnId',
        elementName: 'TxnId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'type',
        elementName: 'Type',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnCurrencyInfoWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnCurrencyInfoWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnJournalEntryWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnJournalEntryWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.PriceLevel.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.PriceLevel.ps().e({
        name: 'name',
        elementName: 'Name',
        typeInfo: Jsonix.Schema.XSD.AnyType.INSTANCE
      }).e({
        name: 'active',
        elementName: 'Active',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'priceLevelType',
        elementName: 'PriceLevelType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'fixedPercentage',
        elementName: 'FixedPercentage',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'priceLevelPerItem',
        collection: true,
        elementName: 'PriceLevelPerItem',
        typeInfo: com.intuit.sb.cdm.v2.PriceLevelPerItem
      }).e({
        name: 'currencyId',
        elementName: 'CurrencyId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'currencyName',
        elementName: 'CurrencyName'
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditMemoLine.b(com.intuit.sb.cdm.v2.LineSales);
    com.intuit.sb.cdm.v2.CreditMemoLine.ps().e({
        name: 'serviceDate',
        elementName: 'ServiceDate'
      });
  }
  {
    com.intuit.sb.cdm.v2.CashPurchases.b(com.intuit.sb.cdm.v2.CdmCollections);
    com.intuit.sb.cdm.v2.CashPurchases.ps().e({
        name: 'cashPurchase',
        collection: true,
        elementName: 'CashPurchase',
        typeInfo: com.intuit.sb.cdm.v2.CashPurchase
      });
  }
  {
    com.intuit.sb.cdm.v2.CreditChargeResponse.ps().e({
        name: 'ccTransId',
        elementName: 'CCTransId'
      }).e({
        name: 'status',
        elementName: 'Status'
      }).e({
        name: 'resultCode',
        elementName: 'ResultCode',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'resultMsg',
        elementName: 'ResultMsg'
      }).e({
        name: 'merchantAcctNum',
        elementName: 'MerchantAcctNum'
      }).e({
        name: 'cardSecurityCodeMatch',
        elementName: 'CardSecurityCodeMatch',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'authCode',
        elementName: 'AuthCode'
      }).e({
        name: 'avsStreet',
        elementName: 'AvsStreet'
      }).e({
        name: 'avsZip',
        elementName: 'AvsZip'
      }).e({
        name: 'securityCode',
        elementName: 'SecurityCode'
      }).e({
        name: 'reconBatchId',
        elementName: 'ReconBatchId'
      }).e({
        name: 'paymentGroupingCode',
        elementName: 'PaymentGroupingCode',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'txnAuthorizationTime',
        elementName: 'TxnAuthorizationTime',
        
      }).e({
        name: 'txnAuthorizationStamp',
        elementName: 'TxnAuthorizationStamp',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'clientTransID',
        elementName: 'ClientTransID'
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesReceiptHeader.b(com.intuit.sb.cdm.v2.HeaderSales);
    com.intuit.sb.cdm.v2.SalesReceiptHeader.ps().e({
        name: 'shipAddr',
        elementName: 'ShipAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'shipMethodId',
        elementName: 'ShipMethodId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'shipMethodName',
        elementName: 'ShipMethodName'
      }).e({
        name: 'depositToAccountId',
        elementName: 'DepositToAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'depositToAccountName',
        elementName: 'DepositToAccountName'
      }).e({
        name: 'paymentMethodId',
        elementName: 'PaymentMethodId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'paymentMethodName',
        elementName: 'PaymentMethodName'
      }).e({
        name: 'detail',
        elementName: 'Detail',
        typeInfo: com.intuit.sb.cdm.v2.PaymentDetail
      }).e({
        name: 'discountAmt',
        elementName: 'DiscountAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'discountRate',
        elementName: 'DiscountRate',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'discountAccountId',
        elementName: 'DiscountAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'discountAccountName',
        elementName: 'DiscountAccountName'
      }).e({
        name: 'discountTaxable',
        elementName: 'DiscountTaxable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnBillPaymentWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnBillPaymentWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.Money.ps().e({
        name: 'currencyCode',
        elementName: 'CurrencyCode',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'amount',
        elementName: 'Amount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.EstimateLine.b(com.intuit.sb.cdm.v2.LineSales);
    com.intuit.sb.cdm.v2.EstimateLine.ps();
  }
  {
    com.intuit.sb.cdm.v2.Note.b(com.intuit.sb.cdm.v2.CdmBase);
    com.intuit.sb.cdm.v2.Note.ps().e({
        name: 'content',
        elementName: 'Content'
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumn.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumn.ps();
  }
  {
    com.intuit.sb.cdm.v2.Label.ps().e({
        name: 'id',
        elementName: 'Id',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'name',
        elementName: 'Name'
      });
  }
  {
    com.intuit.sb.cdm.v2.CustomerRef.ps().e({
        name: 'customerId',
        elementName: 'CustomerId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'customerName',
        elementName: 'CustomerName'
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesOrderHeader.b(com.intuit.sb.cdm.v2.HeaderSales);
    com.intuit.sb.cdm.v2.SalesOrderHeader.ps().e({
        name: 'salesTermId',
        elementName: 'SalesTermId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'salesTermName',
        elementName: 'SalesTermName'
      }).e({
        name: 'dueDate',
        elementName: 'DueDate'
      }).e({
        name: 'billAddr',
        elementName: 'BillAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'shipAddr',
        elementName: 'ShipAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'billEmail',
        elementName: 'BillEmail'
      }).e({
        name: 'shipMethodId',
        elementName: 'ShipMethodId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'shipMethodName',
        elementName: 'ShipMethodName'
      }).e({
        name: 'balance',
        elementName: 'Balance',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'manuallyClosed',
        elementName: 'ManuallyClosed',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.BooleanTypeCustomField.b(com.intuit.sb.cdm.v2.CustomField);
    com.intuit.sb.cdm.v2.BooleanTypeCustomField.ps().e({
        name: 'value',
        elementName: 'Value',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.InternalCustomField.b(com.intuit.sb.cdm.v2.CustomField);
    com.intuit.sb.cdm.v2.InternalCustomField.ps();
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnCustomerWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnCustomerWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.ExternalRole.b(com.intuit.sb.cdm.v2.CdmObject);
    com.intuit.sb.cdm.v2.ExternalRole.ps().e({
        name: 'authId',
        elementName: 'AuthId'
      }).e({
        name: 'roleId',
        elementName: 'RoleId',
        typeInfo: com.intuit.sb.cdm.v2.RoleId
      }).e({
        name: 'roleType',
        elementName: 'RoleType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.TransactionQueryBase.b(com.intuit.sb.cdm.v2.QueryBase);
    com.intuit.sb.cdm.v2.TransactionQueryBase.ps().e({
        name: 'cdcAsOf',
        elementName: 'CDCAsOf',
        
      }).e({
        name: 'synchronizedFilter',
        elementName: 'SynchronizedFilter',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'draftFilter',
        elementName: 'DraftFilter',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'objectStateEnable',
        elementName: 'ObjectStateEnable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'customFieldEnable',
        elementName: 'CustomFieldEnable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'customFieldQueryParam',
        collection: true,
        elementName: 'CustomFieldQueryParam',
        typeInfo: com.intuit.sb.cdm.v2.CustomFieldQueryParam
      }).e({
        name: 'customFieldFilter',
        elementName: 'CustomFieldFilter',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'customFieldDefinitionIdSet',
        elementName: 'CustomFieldDefinitionIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'contactIdSet',
        elementName: 'ContactIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'transactionIdSet',
        elementName: 'TransactionIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'startCreatedTMS',
        elementName: 'StartCreatedTMS',
        
      }).e({
        name: 'endCreatedTMS',
        elementName: 'EndCreatedTMS',
        
      }).e({
        name: 'startModifiedTMS',
        elementName: 'StartModifiedTMS',
        
      }).e({
        name: 'endModifiedTMS',
        elementName: 'EndModifiedTMS',
        
      }).e({
        name: 'startTransactionDate',
        elementName: 'StartTransactionDate'
      }).e({
        name: 'endTransactionDate',
        elementName: 'EndTransactionDate'
      }).e({
        name: 'thinObject',
        elementName: 'ThinObject',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'templateRefMapEnable',
        elementName: 'TemplateRefMapEnable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'includeCustomFieldLineDetails',
        elementName: 'IncludeCustomFieldLineDetails',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).a({
        name: 'erroredObjectsOnly',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'ErroredObjectsOnly'
      }).a({
        name: 'includeGroupMemberFlag',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'IncludeGroupMemberFlag'
      });
  }
  {
    com.intuit.sb.cdm.v2.ChargeHeader.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.ChargeHeader.ps().e({
        name: 'customerId',
        elementName: 'CustomerId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'customerName',
        elementName: 'CustomerName'
      }).e({
        name: 'jobId',
        elementName: 'JobId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'jobName',
        elementName: 'JobName'
      }).e({
        name: 'remitToId',
        elementName: 'RemitToId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'remitToName',
        elementName: 'RemitToName'
      }).e({
        name: 'arAccountId',
        elementName: 'ARAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'arAccountName',
        elementName: 'ARAccountName'
      }).e({
        name: 'classId',
        elementName: 'ClassId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'className',
        elementName: 'ClassName'
      }).e({
        name: 'salesTermId',
        elementName: 'SalesTermId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'salesTermName',
        elementName: 'SalesTermName'
      }).e({
        name: 'dueDate',
        elementName: 'DueDate'
      }).e({
        name: 'billedDate',
        elementName: 'BilledDate',
        
      }).e({
        name: 'totalAmt',
        elementName: 'TotalAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnBillWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnBillWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.BillLine.b(com.intuit.sb.cdm.v2.LinePurchase);
    com.intuit.sb.cdm.v2.BillLine.ps().e({
        name: 'txnId',
        elementName: 'TxnId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'txnLineId',
        elementName: 'TxnLineId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      });
  }
  {
    com.intuit.sb.cdm.v2.ListQueryBase.b(com.intuit.sb.cdm.v2.QueryBase);
    com.intuit.sb.cdm.v2.ListQueryBase.ps().e({
        name: 'cdcAsOf',
        elementName: 'CDCAsOf',
        
      }).e({
        name: 'synchronizedFilter',
        elementName: 'SynchronizedFilter',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'draftFilter',
        elementName: 'DraftFilter',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'objectStateEnable',
        elementName: 'ObjectStateEnable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'customFieldEnable',
        elementName: 'CustomFieldEnable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'customFieldQueryParam',
        collection: true,
        elementName: 'CustomFieldQueryParam',
        typeInfo: com.intuit.sb.cdm.v2.CustomFieldQueryParam
      }).e({
        name: 'customFieldFilter',
        elementName: 'CustomFieldFilter',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'customFieldDefinitionIdSet',
        elementName: 'CustomFieldDefinitionIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'listIdSet',
        elementName: 'ListIdSet',
        typeInfo: com.intuit.sb.cdm.v2.IdSet
      }).e({
        name: 'startCreatedTMS',
        elementName: 'StartCreatedTMS',
        
      }).e({
        name: 'endCreatedTMS',
        elementName: 'EndCreatedTMS',
        
      }).e({
        name: 'startModifiedTMS',
        elementName: 'StartModifiedTMS',
        
      }).e({
        name: 'endModifiedTMS',
        elementName: 'EndModifiedTMS',
        
      }).a({
        name: 'erroredObjectsOnly',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'ErroredObjectsOnly'
      }).a({
        name: 'activeOnly',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'ActiveOnly'
      });
  }
  {
    com.intuit.sb.cdm.v2.JournalEntryHeader.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.JournalEntryHeader.ps().e({
        name: 'adjustment',
        elementName: 'Adjustment',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.IdSet.ps().e({
        name: 'id',
        collection: true,
        elementName: 'Id',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      });
  }
  {
    com.intuit.sb.cdm.v2.SalesReceiptLine.b(com.intuit.sb.cdm.v2.LineSales);
    com.intuit.sb.cdm.v2.SalesReceiptLine.ps().e({
        name: 'serviceDate',
        elementName: 'ServiceDate'
      });
  }
  {
    com.intuit.sb.cdm.v2.PaymentLine.b(com.intuit.sb.cdm.v2.LineBase);
    com.intuit.sb.cdm.v2.PaymentLine.ps().e({
        name: 'amount',
        elementName: 'Amount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'txnId',
        elementName: 'TxnId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'txnNum',
        elementName: 'TxnNum'
      }).e({
        name: 'discountAmt',
        elementName: 'DiscountAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'discountId',
        elementName: 'DiscountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'discountName',
        elementName: 'DiscountName'
      }).e({
        name: 'discountAccountId',
        elementName: 'DiscountAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'discountAccountName',
        elementName: 'DiscountAccountName'
      });
  }
  {
    com.intuit.sb.cdm.v2.ReimbursableInfo.ps().e({
        name: 'customerId',
        elementName: 'CustomerId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'customerName',
        elementName: 'CustomerName'
      }).e({
        name: 'jobId',
        elementName: 'JobId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'jobName',
        elementName: 'JobName'
      });
  }
 
  {
    com.intuit.sb.cdm.v2.Data.ps().e({
        name: 'dataRow',
        collection: true,
        elementName: 'DataRow',
        typeInfo: com.intuit.sb.cdm.v2.DataRow
      });
  }
  {
    com.intuit.sb.cdm.v2.CashBackInfo.ps().e({
        name: 'accountId',
        elementName: 'AccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'accountName',
        elementName: 'AccountName'
      }).e({
        name: 'accountType',
        elementName: 'AccountType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'amount',
        elementName: 'Amount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'memo',
        elementName: 'Memo'
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnItemWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnItemWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnPurchaseOrderWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnPurchaseOrderWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.SyncStatusDrillDown.ps().e({
        name: 'syncEventId',
        elementName: 'SyncEventId'
      }).e({
        name: 'syncTMS',
        elementName: 'SyncTMS',
        
      }).e({
        name: 'entityId',
        elementName: 'EntityId'
      }).e({
        name: 'requestId',
        elementName: 'RequestId'
      }).e({
        name: 'ngObjectType',
        elementName: 'NgObjectType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'operationType',
        elementName: 'OperationType'
      }).e({
        name: 'syncMessageCode',
        elementName: 'SyncMessageCode'
      }).e({
        name: 'syncMessage',
        elementName: 'SyncMessage'
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnTimeActivityWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnTimeActivityWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.CreditChargeInfo.ps().e({
        name: 'number',
        elementName: 'Number'
      }).e({
        name: 'token',
        elementName: 'Token'
      }).e({
        name: 'type',
        elementName: 'Type',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'nameOnAcct',
        elementName: 'NameOnAcct'
      }).e({
        name: 'ccExpirMn',
        elementName: 'CcExpirMn',
        typeInfo: Jsonix.Schema.XSD.Int.INSTANCE
      }).e({
        name: 'ccExpirYr',
        elementName: 'CcExpirYr',
        typeInfo: Jsonix.Schema.XSD.Int.INSTANCE
      }).e({
        name: 'billAddrStreet',
        elementName: 'BillAddrStreet'
      }).e({
        name: 'zipCode',
        elementName: 'ZipCode'
      }).e({
        name: 'cvv',
        elementName: 'Cvv'
      }).e({
        name: 'commercialCardCode',
        elementName: 'CommercialCardCode'
      }).e({
        name: 'ccTxnMode',
        elementName: 'CCTxnMode',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'ccTxnType',
        elementName: 'CCTxnType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnInventoryTransferWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnInventoryTransferWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.LineSales.b(com.intuit.sb.cdm.v2.LineBase);
    com.intuit.sb.cdm.v2.LineSales.ps().e({
        name: 'amount',
        elementName: 'Amount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'classId',
        elementName: 'ClassId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'className',
        elementName: 'ClassName'
      }).e({
        name: 'taxable',
        elementName: 'Taxable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'itemId',
        elementName: 'ItemId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemName',
        elementName: 'ItemName'
      }).e({
        name: 'itemType',
        elementName: 'ItemType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'unitPrice',
        elementName: 'UnitPrice',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'ratePercent',
        elementName: 'RatePercent',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'priceLevelId',
        elementName: 'PriceLevelId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'priceLevelName',
        elementName: 'PriceLevelName'
      }).e({
        name: 'qty',
        elementName: 'Qty',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'uomId',
        elementName: 'UOMId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'uomAbbrv',
        elementName: 'UOMAbbrv'
      }).e({
        name: 'overrideItemAccountId',
        elementName: 'OverrideItemAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'overrideItemAccountName',
        elementName: 'OverrideItemAccountName'
      }).e({
        name: 'discountId',
        elementName: 'DiscountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'discountName',
        elementName: 'DiscountName'
      }).e({
        name: 'discountAmount',
        elementName: 'DiscountAmount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'discountRatePercent',
        elementName: 'DiscountRatePercent',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'salesTaxCodeId',
        elementName: 'SalesTaxCodeId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'salesTaxCodeName',
        elementName: 'SalesTaxCodeName'
      }).e({
        name: 'custom1',
        elementName: 'Custom1'
      }).e({
        name: 'custom2',
        elementName: 'Custom2'
      });
  }
  {
    com.intuit.sb.cdm.v2.InventoryTransferHeader.ps().e({
        name: 'docNumber',
        elementName: 'DocNumber'
      }).e({
        name: 'txnDate',
        elementName: 'TxnDate'
      }).e({
        name: 'note',
        elementName: 'Note'
      }).e({
        name: 'fromSiteID',
        elementName: 'FromSiteID',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'fromSiteName',
        elementName: 'FromSiteName'
      }).e({
        name: 'toSiteID',
        elementName: 'ToSiteID',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'toSiteName',
        elementName: 'ToSiteName'
      });
  }
  {
    com.intuit.sb.cdm.v2.RateHistory.ps().e({
        name: 'rate',
        elementName: 'Rate',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'effectiveDate',
        elementName: 'EffectiveDate'
      });
  }
  {
    com.intuit.sb.cdm.v2.HeaderSales.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.HeaderSales.ps().e({
        name: 'customerId',
        elementName: 'CustomerId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'customerName',
        elementName: 'CustomerName'
      }).e({
        name: 'jobId',
        elementName: 'JobId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'jobName',
        elementName: 'JobName'
      }).e({
        name: 'remitToId',
        elementName: 'RemitToId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'remitToName',
        elementName: 'RemitToName'
      }).e({
        name: 'classId',
        elementName: 'ClassId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'className',
        elementName: 'ClassName'
      }).e({
        name: 'salesRepId',
        elementName: 'SalesRepId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'salesRepName',
        elementName: 'SalesRepName'
      }).e({
        name: 'salesTaxCodeId',
        elementName: 'SalesTaxCodeId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'salesTaxCodeName',
        elementName: 'SalesTaxCodeName'
      }).e({
        name: 'poNumber',
        elementName: 'PONumber'
      }).e({
        name: 'fob',
        elementName: 'FOB'
      }).e({
        name: 'shipDate',
        elementName: 'ShipDate'
      }).e({
        name: 'subTotalAmt',
        elementName: 'SubTotalAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'taxId',
        elementName: 'TaxId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'taxName',
        elementName: 'TaxName'
      }).e({
        name: 'taxGroupId',
        elementName: 'TaxGroupId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'taxGroupName',
        elementName: 'TaxGroupName'
      }).e({
        name: 'taxRate',
        elementName: 'TaxRate',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'taxAmt',
        elementName: 'TaxAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'totalAmt',
        elementName: 'TotalAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'toBePrinted',
        elementName: 'ToBePrinted',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'toBeEmailed',
        elementName: 'ToBeEmailed',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'custom',
        elementName: 'Custom'
      });
  }
  {
    com.intuit.sb.cdm.v2.CheckPayment.ps().e({
        name: 'checkNum',
        elementName: 'CheckNum'
      }).e({
        name: 'status',
        elementName: 'Status'
      }).e({
        name: 'nameOnAcct',
        elementName: 'NameOnAcct'
      }).e({
        name: 'acctNum',
        elementName: 'AcctNum'
      }).e({
        name: 'routingNum',
        elementName: 'RoutingNum'
      }).e({
        name: 'bankName',
        elementName: 'BankName'
      });
  }
  {
    com.intuit.sb.cdm.v2.InventoryAdjustmentHeader.ps().e({
        name: 'docNumber',
        elementName: 'DocNumber'
      }).e({
        name: 'txnDate',
        elementName: 'TxnDate'
      }).e({
        name: 'note',
        elementName: 'Note'
      }).e({
        name: 'accountId',
        elementName: 'AccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'accountName',
        elementName: 'AccountName'
      }).e({
        name: 'accountType',
        elementName: 'AccountType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'siteId',
        elementName: 'SiteId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'siteName',
        elementName: 'SiteName'
      }).e({
        name: 'customerId',
        elementName: 'CustomerId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'customerName',
        elementName: 'CustomerName'
      }).e({
        name: 'classId',
        elementName: 'ClassId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'className',
        elementName: 'ClassName'
      });
  }
  {
    com.intuit.sb.cdm.v2.TemplateRef.b(com.intuit.sb.cdm.v2.InternalCustomField);
    com.intuit.sb.cdm.v2.TemplateRef.ps().e({
        name: 'templateId',
        elementName: 'TemplateId',
        typeInfo: com.intuit.sb.cdm.v2.TemplateId
      }).e({
        name: 'templateName',
        elementName: 'TemplateName'
      });
  }
  {
    com.intuit.sb.cdm.v2.PhysicalAddress.ps().e({
        name: 'id',
        elementName: 'Id',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'line1',
        elementName: 'Line1'
      }).e({
        name: 'line2',
        elementName: 'Line2'
      }).e({
        name: 'line3',
        elementName: 'Line3'
      }).e({
        name: 'line4',
        elementName: 'Line4'
      }).e({
        name: 'line5',
        elementName: 'Line5'
      }).e({
        name: 'city',
        elementName: 'City'
      }).e({
        name: 'county',
        elementName: 'County'
      }).e({
        name: 'countyCode',
        elementName: 'CountyCode'
      }).e({
        name: 'country',
        elementName: 'Country'
      }).e({
        name: 'countryCode',
        elementName: 'CountryCode'
      }).e({
        name: 'countrySubDivisionCode',
        elementName: 'CountrySubDivisionCode'
      }).e({
        name: 'postalCode',
        elementName: 'PostalCode'
      }).e({
        name: 'postalCodeSuffix',
        elementName: 'PostalCodeSuffix'
      }).e({
        name: 'geoCode',
        elementName: 'GeoCode'
      }).e({
        name: 'dateLastVerified',
        elementName: 'DateLastVerified',
        
      }).e({
        name: '_default',
        elementName: 'Default',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'tag',
        collection: true,
        elementName: 'Tag'
      });
  }
  {
    com.intuit.sb.cdm.v2.WebSiteAddress.ps().e({
        name: 'id',
        elementName: 'Id',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'uri',
        elementName: 'URI'
      }).e({
        name: 'dateLastVerified',
        elementName: 'DateLastVerified',
        
      }).e({
        name: '_default',
        elementName: 'Default',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'tag',
        collection: true,
        elementName: 'Tag'
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnOtherNameWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnOtherNameWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.PaymentHeader.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.PaymentHeader.ps().e({
        name: 'customerId',
        elementName: 'CustomerId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'customerName',
        elementName: 'CustomerName'
      }).e({
        name: 'jobId',
        elementName: 'JobId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'jobName',
        elementName: 'JobName'
      }).e({
        name: 'remitToId',
        elementName: 'RemitToId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'remitToName',
        elementName: 'RemitToName'
      }).e({
        name: 'arAccountId',
        elementName: 'ARAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'arAccountName',
        elementName: 'ARAccountName'
      }).e({
        name: 'depositToAccountId',
        elementName: 'DepositToAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'depositToAccountName',
        elementName: 'DepositToAccountName'
      }).e({
        name: 'paymentMethodId',
        elementName: 'PaymentMethodId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'paymentMethodName',
        elementName: 'PaymentMethodName'
      }).e({
        name: 'detail',
        elementName: 'Detail',
        typeInfo: com.intuit.sb.cdm.v2.PaymentDetail
      }).e({
        name: 'totalAmt',
        elementName: 'TotalAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'unappliedAmt',
        elementName: 'UnappliedAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'processPayment',
        elementName: 'ProcessPayment',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnInvoiceWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnInvoiceWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.LinePurchase.b(com.intuit.sb.cdm.v2.LineBase);
    com.intuit.sb.cdm.v2.LinePurchase.ps().e({
        name: 'amount',
        elementName: 'Amount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'classId',
        elementName: 'ClassId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'className',
        elementName: 'ClassName'
      }).e({
        name: 'reimbursableInfo',
        elementName: 'ReimbursableInfo',
        typeInfo: com.intuit.sb.cdm.v2.ReimbursableInfo
      }).e({
        name: 'billableStatus',
        elementName: 'BillableStatus',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'itemId',
        elementName: 'ItemId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'itemName',
        elementName: 'ItemName'
      }).e({
        name: 'itemType',
        elementName: 'ItemType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'unitPrice',
        elementName: 'UnitPrice',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'qty',
        elementName: 'Qty',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'uomId',
        elementName: 'UOMId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'uomAbbrv',
        elementName: 'UOMAbbrv'
      }).e({
        name: 'overrideItemAccountId',
        elementName: 'OverrideItemAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'overrideItemAccountName',
        elementName: 'OverrideItemAccountName'
      }).e({
        name: 'accountId',
        elementName: 'AccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'accountName',
        elementName: 'AccountName'
      }).e({
        name: 'accountType',
        elementName: 'AccountType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnPaymentWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnPaymentWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.InvoiceLine.b(com.intuit.sb.cdm.v2.LineSales);
    com.intuit.sb.cdm.v2.InvoiceLine.ps().e({
        name: 'serviceDate',
        elementName: 'ServiceDate'
      }).e({
        name: 'txnId',
        elementName: 'TxnId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'txnLineId',
        elementName: 'TxnLineId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      });
  }
  {
    com.intuit.sb.cdm.v2.CashPurchaseLine.b(com.intuit.sb.cdm.v2.LinePurchase);
    com.intuit.sb.cdm.v2.CashPurchaseLine.ps();
  }
  {
    com.intuit.sb.cdm.v2.VendorCreditHeader.b(com.intuit.sb.cdm.v2.HeaderPurchase);
    com.intuit.sb.cdm.v2.VendorCreditHeader.ps().e({
        name: 'payerId',
        elementName: 'PayerId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'payerName',
        elementName: 'PayerName'
      }).e({
        name: 'apAccountId',
        elementName: 'APAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'apAccountName',
        elementName: 'APAccountName'
      });
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnVendorWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnVendorWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.SalesTaxPaymentCheckLine.b(com.intuit.sb.cdm.v2.LineBase);
    com.intuit.sb.cdm.v2.SalesTaxPaymentCheckLine.ps().e({
        name: 'amount',
        elementName: 'Amount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'taxId',
        elementName: 'TaxId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'taxName',
        elementName: 'TaxName'
      });
  }
  {
    com.intuit.sb.cdm.v2.DepositLine.b(com.intuit.sb.cdm.v2.LineBase);
    com.intuit.sb.cdm.v2.DepositLine.ps().e({
        name: 'txnId',
        elementName: 'TxnId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'txnLineId',
        elementName: 'TxnLineId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'txnType',
        elementName: 'TxnType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'accountId',
        elementName: 'AccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'accountName',
        elementName: 'AccountName'
      }).e({
        name: 'accountType',
        elementName: 'AccountType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'entityId',
        elementName: 'EntityId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'entityName',
        elementName: 'EntityName'
      }).e({
        name: 'entityType',
        elementName: 'EntityType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'paymentMethodId',
        elementName: 'PaymentMethodId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'paymentMethodName',
        elementName: 'PaymentMethodName'
      }).e({
        name: 'classId',
        elementName: 'ClassId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'className',
        elementName: 'ClassName'
      }).e({
        name: 'amount',
        elementName: 'Amount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'checkNum',
        elementName: 'CheckNum'
      });
  }
  {
    com.intuit.sb.cdm.v2.CheckLine.b(com.intuit.sb.cdm.v2.LinePurchase);
    com.intuit.sb.cdm.v2.CheckLine.ps();
  }
  {
    com.intuit.sb.cdm.v2.VendorCreditLine.b(com.intuit.sb.cdm.v2.LinePurchase);
    com.intuit.sb.cdm.v2.VendorCreditLine.ps();
  }
  {
    com.intuit.sb.cdm.v2.SortByColumnSalesOrderWithOrder.b(com.intuit.sb.cdm.v2.SortBy);
    com.intuit.sb.cdm.v2.SortByColumnSalesOrderWithOrder.ps();
  }
  {
    com.intuit.sb.cdm.v2.ReportQueryBase.ps().e({
        name: 'offeringId',
        elementName: 'OfferingId',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'iteratorId',
        elementName: 'IteratorId'
      }).e({
        name: 'startPage',
        elementName: 'StartPage',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'chunkSize',
        elementName: 'ChunkSize',
        typeInfo: Jsonix.Schema.XSD.Int.INSTANCE
      }).e({
        name: 'dateMacro',
        elementName: 'DateMacro',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'startTransactionDate',
        elementName: 'StartTransactionDate'
      }).e({
        name: 'endTransactionDate',
        elementName: 'EndTransactionDate'
      }).e({
        name: 'reportBasis',
        elementName: 'ReportBasis',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    com.intuit.sb.cdm.v2.EstimateHeader.b(com.intuit.sb.cdm.v2.HeaderSales);
    com.intuit.sb.cdm.v2.EstimateHeader.ps().e({
        name: 'salesTermId',
        elementName: 'SalesTermId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'salesTermName',
        elementName: 'SalesTermName'
      }).e({
        name: 'dueDate',
        elementName: 'DueDate'
      }).e({
        name: 'billAddr',
        elementName: 'BillAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'shipAddr',
        elementName: 'ShipAddr',
        typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress
      }).e({
        name: 'billEmail',
        elementName: 'BillEmail'
      }).e({
        name: 'discountAmt',
        elementName: 'DiscountAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'discountRate',
        elementName: 'DiscountRate',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'discountAccountId',
        elementName: 'DiscountAccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'discountAccountName',
        elementName: 'DiscountAccountName'
      }).e({
        name: 'discountTaxable',
        elementName: 'DiscountTaxable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE
      }).e({
        name: 'expirationDate',
        elementName: 'ExpirationDate'
      }).e({
        name: 'acceptedBy',
        elementName: 'AcceptedBy'
      }).e({
        name: 'acceptedDate',
        elementName: 'AcceptedDate'
      });
  }
  {
    com.intuit.sb.cdm.v2.TaxLine.b(com.intuit.sb.cdm.v2.LineBase);
    com.intuit.sb.cdm.v2.TaxLine.ps().e({
        name: 'amount',
        elementName: 'Amount',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'taxId',
        elementName: 'TaxId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'taxName',
        elementName: 'TaxName'
      });
  }
  {
    com.intuit.sb.cdm.v2.TemplateId.b(com.intuit.sb.cdm.v2.IdType);
    com.intuit.sb.cdm.v2.TemplateId.ps();
  }
  {
    com.intuit.sb.cdm.v2.RoleId.b(com.intuit.sb.cdm.v2.IdType);
    com.intuit.sb.cdm.v2.RoleId.ps();
  }
  {
    com.intuit.sb.cdm.v2.Header.b(com.intuit.sb.cdm.v2.HeaderBase);
    com.intuit.sb.cdm.v2.Header.ps().e({
        name: 'txnType',
        elementName: 'TxnType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'accountId',
        elementName: 'AccountId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'accountName',
        elementName: 'AccountName'
      }).e({
        name: 'accountType',
        elementName: 'AccountType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'entityId',
        elementName: 'EntityId',
        typeInfo: com.intuit.sb.cdm.v2.IdType
      }).e({
        name: 'entityName',
        elementName: 'EntityName'
      }).e({
        name: 'entityType',
        elementName: 'EntityType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'totalAmt',
        elementName: 'TotalAmt',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
}
com.intuit.sb.cdm.v2.es().e({
    elementName: 'BatchRequestSet',
    typeInfo: com.intuit.sb.cdm.v2.BatchRequestSet
  }).e({
    elementName: 'RestResponse',
    typeInfo: com.intuit.sb.cdm.v2.RestResponse
  }).e({
    elementName: 'SalesTaxCodes',
    typeInfo: com.intuit.sb.cdm.v2.SalesTaxCodes,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'CompanyRequest',
    typeInfo: com.intuit.sb.cdm.v2.CompanyRequest
  }).e({
    elementName: 'VendorTypes',
    typeInfo: com.intuit.sb.cdm.v2.VendorTypes,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'ReportCustomersWhoOweMe',
    typeInfo: com.intuit.sb.cdm.v2.ReportCustomersWhoOweMe
  }).e({
    elementName: 'TimeActivity',
    typeInfo: com.intuit.sb.cdm.v2.TimeActivity,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'TxnGenerics',
    typeInfo: com.intuit.sb.cdm.v2.TxnGenerics,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'SalesRep',
    typeInfo: com.intuit.sb.cdm.v2.SalesRep,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'ItemConsolidated',
    typeInfo: com.intuit.sb.cdm.v2.ItemConsolidated,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'BillPaymentQuery',
    typeInfo: com.intuit.sb.cdm.v2.BillPaymentQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'EstimateQuery',
    typeInfo: com.intuit.sb.cdm.v2.EstimateQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'CreditCardCredit',
    typeInfo: com.intuit.sb.cdm.v2.CreditCardCredit,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'ReportTopCustomersBySales',
    typeInfo: com.intuit.sb.cdm.v2.ReportTopCustomersBySales
  }).e({
    elementName: 'Charge',
    typeInfo: com.intuit.sb.cdm.v2.Charge,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'EmployeeQuery',
    typeInfo: com.intuit.sb.cdm.v2.EmployeeQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'JobTypes',
    typeInfo: com.intuit.sb.cdm.v2.JobTypes,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'PayrollNonWageItemQuery',
    typeInfo: com.intuit.sb.cdm.v2.PayrollNonWageItemQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'Party',
    typeInfo: com.intuit.sb.cdm.v2.Party
  }).e({
    elementName: 'SalesTerm',
    typeInfo: com.intuit.sb.cdm.v2.SalesTerm,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'Object',
    typeInfo: com.intuit.sb.cdm.v2.CdmBase,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'PartyRoleRef',
    typeInfo: com.intuit.sb.cdm.v2.PartyRoleRef,
    substitutionHead: 'CdmObjectRef'
  }).e({
    elementName: 'ItemsConsolidated',
    typeInfo: com.intuit.sb.cdm.v2.ItemsConsolidated,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'InventoryAdjustment',
    typeInfo: com.intuit.sb.cdm.v2.InventoryAdjustment,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'SyncStatusResponses',
    typeInfo: com.intuit.sb.cdm.v2.SyncStatusResponses,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Del',
    typeInfo: com.intuit.sb.cdm.v2.DelRequest,
    substitutionHead: 'Request'
  }).e({
    elementName: 'InventorySiteQuery',
    typeInfo: com.intuit.sb.cdm.v2.InventorySiteQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'JobTypeQuery',
    typeInfo: com.intuit.sb.cdm.v2.JobTypeQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'DiscountQuery',
    typeInfo: com.intuit.sb.cdm.v2.DiscountQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'Deposit',
    typeInfo: com.intuit.sb.cdm.v2.Deposit,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'SalesTaxGroup',
    typeInfo: com.intuit.sb.cdm.v2.SalesTaxGroup,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'Request',
    typeInfo: com.intuit.sb.cdm.v2.AbstractRequest
  }).e({
    elementName: 'PayrollItems',
    typeInfo: com.intuit.sb.cdm.v2.PayrollItems,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'UOMs',
    typeInfo: com.intuit.sb.cdm.v2.UOMs,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'VendorCreditQuery',
    typeInfo: com.intuit.sb.cdm.v2.VendorCreditQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'CreditCardCreditQuery',
    typeInfo: com.intuit.sb.cdm.v2.CreditCardCreditQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'InventoryTransfer',
    typeInfo: com.intuit.sb.cdm.v2.InventoryTransfer,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'Person',
    typeInfo: com.intuit.sb.cdm.v2.Person
  }).e({
    elementName: 'TimeActivityQuery',
    typeInfo: com.intuit.sb.cdm.v2.TimeActivityQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'ItemGroupComponentQuery',
    typeInfo: com.intuit.sb.cdm.v2.ItemGroupComponentQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'ReportIncomeBreakdown',
    typeInfo: com.intuit.sb.cdm.v2.ReportIncomeBreakdown
  }).e({
    elementName: 'CustomFieldQuery',
    typeInfo: com.intuit.sb.cdm.v2.CustomFieldQuery
  }).e({
    elementName: 'DateTypeCustomFieldDefinition',
    typeInfo: com.intuit.sb.cdm.v2.DateTypeCustomFieldDefinition,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'ReportBalanceSheet',
    typeInfo: com.intuit.sb.cdm.v2.ReportBalanceSheet
  }).e({
    elementName: 'Bill',
    typeInfo: com.intuit.sb.cdm.v2.Bill,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'VendorTypeQuery',
    typeInfo: com.intuit.sb.cdm.v2.VendorTypeQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'Summary1099',
    typeInfo: com.intuit.sb.cdm.v2.Summary1099,
    substitutionHead: 'AdvReportParamBase'
  }).e({
    elementName: 'Payments',
    typeInfo: com.intuit.sb.cdm.v2.Payments,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'TxnGeneric',
    typeInfo: com.intuit.sb.cdm.v2.TxnGeneric,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'ReportProfitAndLoss',
    typeInfo: com.intuit.sb.cdm.v2.ReportProfitAndLoss
  }).e({
    elementName: 'SyncActivityResponses',
    typeInfo: com.intuit.sb.cdm.v2.SyncActivityResponses,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'TermQuery',
    typeInfo: com.intuit.sb.cdm.v2.TermQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'StringTypeCustomFieldDefinition',
    typeInfo: com.intuit.sb.cdm.v2.StringTypeCustomFieldDefinition,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'TemplateName',
    typeInfo: com.intuit.sb.cdm.v2.TemplateName
  }).e({
    elementName: 'CustomerMsgQuery',
    typeInfo: com.intuit.sb.cdm.v2.CustomerMsgQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'SalesTaxCode',
    typeInfo: com.intuit.sb.cdm.v2.SalesTaxCode,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'SalesReceipt',
    typeInfo: com.intuit.sb.cdm.v2.SalesReceipt,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'CustomerQuery',
    typeInfo: com.intuit.sb.cdm.v2.CustomerQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'CustomFieldDefinitionQuery',
    typeInfo: com.intuit.sb.cdm.v2.CustomFieldDefinitionQuery
  }).e({
    elementName: 'CreditCardCharge',
    typeInfo: com.intuit.sb.cdm.v2.CreditCardCharge,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'SalesReceipts',
    typeInfo: com.intuit.sb.cdm.v2.SalesReceipts,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Organization',
    typeInfo: com.intuit.sb.cdm.v2.Organization
  }).e({
    elementName: 'OtherNameQuery',
    typeInfo: com.intuit.sb.cdm.v2.OtherNameQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'Bills',
    typeInfo: com.intuit.sb.cdm.v2.Bills,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'CustomerMsgs',
    typeInfo: com.intuit.sb.cdm.v2.CustomerMsgs,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'FixedAssetQuery',
    typeInfo: com.intuit.sb.cdm.v2.FixedAssetQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'ObjectRef',
    typeInfo: com.intuit.sb.cdm.v2.ObjectRef,
    substitutionHead: 'CdmObjectRef'
  }).e({
    elementName: 'ShipMethod',
    typeInfo: com.intuit.sb.cdm.v2.ShipMethod,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'ExternalRoleQuery',
    typeInfo: com.intuit.sb.cdm.v2.ExternalRoleQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'SalesTaxGroups',
    typeInfo: com.intuit.sb.cdm.v2.SalesTaxGroups,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'BuildAssemblyQuery',
    typeInfo: com.intuit.sb.cdm.v2.BuildAssemblyQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'ShipMethodQuery',
    typeInfo: com.intuit.sb.cdm.v2.ShipMethodQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'CompanyMetaData',
    typeInfo: com.intuit.sb.cdm.v2.CompanyMetaData,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'SalesTaxes',
    typeInfo: com.intuit.sb.cdm.v2.SalesTaxes,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'CustomFieldDefinitions',
    typeInfo: com.intuit.sb.cdm.v2.CustomFieldDefinitions,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'PayrollItem',
    typeInfo: com.intuit.sb.cdm.v2.PayrollItem
  }).e({
    elementName: 'Persons',
    typeInfo: com.intuit.sb.cdm.v2.Persons
  }).e({
    elementName: 'CustomFieldDefinition',
    typeInfo: com.intuit.sb.cdm.v2.CustomFieldDefinition,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'Success',
    typeInfo: com.intuit.sb.cdm.v2.SuccessResponse,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Invoice',
    typeInfo: com.intuit.sb.cdm.v2.Invoice,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'RecordCounts',
    typeInfo: com.intuit.sb.cdm.v2.RecordCounts,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'TemplateNameQuery',
    typeInfo: com.intuit.sb.cdm.v2.TemplateNameQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'BatchResponseSet',
    typeInfo: com.intuit.sb.cdm.v2.BatchResponseSet,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'SalesOrderQuery',
    typeInfo: com.intuit.sb.cdm.v2.SalesOrderQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'Charges',
    typeInfo: com.intuit.sb.cdm.v2.Charges,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'InventorySite',
    typeInfo: com.intuit.sb.cdm.v2.InventorySite,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'FixedAsset',
    typeInfo: com.intuit.sb.cdm.v2.FixedAsset,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'PayrollItemQuery',
    typeInfo: com.intuit.sb.cdm.v2.PayrollItemQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'Preferences',
    typeInfo: com.intuit.sb.cdm.v2.Preferences
  }).e({
    elementName: 'NameValues',
    typeInfo: com.intuit.sb.cdm.v2.NameValues,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'CustomerTypeQuery',
    typeInfo: com.intuit.sb.cdm.v2.CustomerTypeQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'ReportAccountBalances',
    typeInfo: com.intuit.sb.cdm.v2.ReportAccountBalances
  }).e({
    elementName: 'SalesRepQuery',
    typeInfo: com.intuit.sb.cdm.v2.SalesRepQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'Account',
    typeInfo: com.intuit.sb.cdm.v2.Account,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'ReportSalesSummary',
    typeInfo: com.intuit.sb.cdm.v2.ReportSalesSummary
  }).e({
    elementName: 'Organizations',
    typeInfo: com.intuit.sb.cdm.v2.Organizations
  }).e({
    elementName: 'Jobs',
    typeInfo: com.intuit.sb.cdm.v2.Jobs,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'BOMComponent',
    typeInfo: com.intuit.sb.cdm.v2.BOMComponent,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'SalesTaxPaymentCheck',
    typeInfo: com.intuit.sb.cdm.v2.SalesTaxPaymentCheck,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'BillPaymentCreditCardQuery',
    typeInfo: com.intuit.sb.cdm.v2.BillPaymentCreditCardQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'CurrencyInfos',
    typeInfo: com.intuit.sb.cdm.v2.CurrencyInfos,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Vendor',
    typeInfo: com.intuit.sb.cdm.v2.Vendor,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'BillPayment',
    typeInfo: com.intuit.sb.cdm.v2.BillPayment,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'JobType',
    typeInfo: com.intuit.sb.cdm.v2.JobType,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'Job',
    typeInfo: com.intuit.sb.cdm.v2.Job,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'CurrencyInfo',
    typeInfo: com.intuit.sb.cdm.v2.CurrencyInfo,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'PaymentMethods',
    typeInfo: com.intuit.sb.cdm.v2.PaymentMethods,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Revert',
    typeInfo: com.intuit.sb.cdm.v2.RevertRequest,
    substitutionHead: 'Request'
  }).e({
    elementName: 'InvoiceQuery',
    typeInfo: com.intuit.sb.cdm.v2.InvoiceQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'InventoryAdjustmentQuery',
    typeInfo: com.intuit.sb.cdm.v2.InventoryAdjustmentQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'TemplateNames',
    typeInfo: com.intuit.sb.cdm.v2.TemplateNames,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'NumberTypeCustomFieldDefinition',
    typeInfo: com.intuit.sb.cdm.v2.NumberTypeCustomFieldDefinition,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'JournalEntry',
    typeInfo: com.intuit.sb.cdm.v2.JournalEntry,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'Check',
    typeInfo: com.intuit.sb.cdm.v2.Check,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'Accounts',
    typeInfo: com.intuit.sb.cdm.v2.Accounts,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'PurchaseOrders',
    typeInfo: com.intuit.sb.cdm.v2.PurchaseOrders,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'CDCObjectRequest',
    typeInfo: com.intuit.sb.cdm.v2.CDCObjectRequest
  }).e({
    elementName: 'CreditCardCredits',
    typeInfo: com.intuit.sb.cdm.v2.CreditCardCredits,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Item',
    typeInfo: com.intuit.sb.cdm.v2.Item,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'BuildAssembly',
    typeInfo: com.intuit.sb.cdm.v2.BuildAssembly,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'SalesReps',
    typeInfo: com.intuit.sb.cdm.v2.SalesReps,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Vendors',
    typeInfo: com.intuit.sb.cdm.v2.Vendors,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Payment',
    typeInfo: com.intuit.sb.cdm.v2.Payment,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'Tasks',
    typeInfo: com.intuit.sb.cdm.v2.Tasks,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'SalesTaxCodeQuery',
    typeInfo: com.intuit.sb.cdm.v2.SalesTaxCodeQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'ChargeQuery',
    typeInfo: com.intuit.sb.cdm.v2.ChargeQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'Classes',
    typeInfo: com.intuit.sb.cdm.v2.Classes,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Customers',
    typeInfo: com.intuit.sb.cdm.v2.Customers,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'CreditMemoQuery',
    typeInfo: com.intuit.sb.cdm.v2.CreditMemoQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'BillPayments',
    typeInfo: com.intuit.sb.cdm.v2.BillPayments,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'OtherNames',
    typeInfo: com.intuit.sb.cdm.v2.OtherNames,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'TaskQuery',
    typeInfo: com.intuit.sb.cdm.v2.TaskQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'VendorCredits',
    typeInfo: com.intuit.sb.cdm.v2.VendorCredits,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'BuildAssemblies',
    typeInfo: com.intuit.sb.cdm.v2.BuildAssemblies,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Task',
    typeInfo: com.intuit.sb.cdm.v2.Task,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'Class',
    typeInfo: com.intuit.sb.cdm.v2.Class,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'SalesOrder',
    typeInfo: com.intuit.sb.cdm.v2.SalesOrder,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'BillPaymentCreditCards',
    typeInfo: com.intuit.sb.cdm.v2.BillPaymentCreditCards,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'PurchaseOrder',
    typeInfo: com.intuit.sb.cdm.v2.PurchaseOrder,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'SalesTaxGroupQuery',
    typeInfo: com.intuit.sb.cdm.v2.SalesTaxGroupQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'SalesReceiptQuery',
    typeInfo: com.intuit.sb.cdm.v2.SalesReceiptQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'Employees',
    typeInfo: com.intuit.sb.cdm.v2.Employees,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'BOMComponentQuery',
    typeInfo: com.intuit.sb.cdm.v2.BOMComponentQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'CompaniesMetaData',
    typeInfo: com.intuit.sb.cdm.v2.CompaniesMetaData,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'TemplateFiles',
    typeInfo: com.intuit.sb.cdm.v2.TemplateFiles,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'BillPaymentCreditCard',
    typeInfo: com.intuit.sb.cdm.v2.BillPaymentCreditCard,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'CustomerMsg',
    typeInfo: com.intuit.sb.cdm.v2.CustomerMsg,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'PurchaseOrderQuery',
    typeInfo: com.intuit.sb.cdm.v2.PurchaseOrderQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'ItemGroupComponent',
    typeInfo: com.intuit.sb.cdm.v2.ItemGroupComponent,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'TimeActivities',
    typeInfo: com.intuit.sb.cdm.v2.TimeActivities,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'NameValue',
    typeInfo: com.intuit.sb.cdm.v2.NameValue
  }).e({
    elementName: 'SalesTerms',
    typeInfo: com.intuit.sb.cdm.v2.SalesTerms,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'SyncActivityResponse',
    typeInfo: com.intuit.sb.cdm.v2.SyncActivityResponse
  }).e({
    elementName: 'SalesTax',
    typeInfo: com.intuit.sb.cdm.v2.SalesTax,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'InventorySites',
    typeInfo: com.intuit.sb.cdm.v2.InventorySites,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Checks',
    typeInfo: com.intuit.sb.cdm.v2.Checks,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'NameValueQuery',
    typeInfo: com.intuit.sb.cdm.v2.NameValueQuery
  }).e({
    elementName: 'SyncStatusRequest',
    typeInfo: com.intuit.sb.cdm.v2.SyncStatusRequest
  }).e({
    elementName: 'CompanyPreferences',
    typeInfo: com.intuit.sb.cdm.v2.CompanyPreferences,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'CreditCardChargeQuery',
    typeInfo: com.intuit.sb.cdm.v2.CreditCardChargeQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'Mod',
    typeInfo: com.intuit.sb.cdm.v2.ModRequest,
    substitutionHead: 'Request'
  }).e({
    elementName: 'VendorType',
    typeInfo: com.intuit.sb.cdm.v2.VendorType,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'InventoryTransferQuery',
    typeInfo: com.intuit.sb.cdm.v2.InventoryTransferQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'CustomerTypes',
    typeInfo: com.intuit.sb.cdm.v2.CustomerTypes,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'VendorQuery',
    typeInfo: com.intuit.sb.cdm.v2.VendorQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'RecordCountQuery',
    typeInfo: com.intuit.sb.cdm.v2.RecordCountQuery
  }).e({
    elementName: 'PayrollNonWageItems',
    typeInfo: com.intuit.sb.cdm.v2.PayrollNonWageItems,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'CdmObject',
    typeInfo: com.intuit.sb.cdm.v2.CdmObject
  }).e({
    elementName: 'ShipMethods',
    typeInfo: com.intuit.sb.cdm.v2.ShipMethods,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Estimates',
    typeInfo: com.intuit.sb.cdm.v2.Estimates,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'PaymentMethodQuery',
    typeInfo: com.intuit.sb.cdm.v2.PaymentMethodQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'PayrollNonWageItem',
    typeInfo: com.intuit.sb.cdm.v2.PayrollNonWageItem
  }).e({
    elementName: 'Employee',
    typeInfo: com.intuit.sb.cdm.v2.Employee,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'ItemQuery',
    typeInfo: com.intuit.sb.cdm.v2.ItemQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'ItemGroupComponents',
    typeInfo: com.intuit.sb.cdm.v2.ItemGroupComponents,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'VendorCredit',
    typeInfo: com.intuit.sb.cdm.v2.VendorCredit,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'CdmObjectRef',
    typeInfo: com.intuit.sb.cdm.v2.CdmObjectRef
  }).e({
    elementName: 'PaymentQuery',
    typeInfo: com.intuit.sb.cdm.v2.PaymentQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'ItemReceipts',
    typeInfo: com.intuit.sb.cdm.v2.ItemReceipts,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'InventoryAdjustments',
    typeInfo: com.intuit.sb.cdm.v2.InventoryAdjustments,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Items',
    typeInfo: com.intuit.sb.cdm.v2.Items,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Discounts',
    typeInfo: com.intuit.sb.cdm.v2.Discounts,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'CustomTxnDetail',
    typeInfo: com.intuit.sb.cdm.v2.CustomTxnDetail,
    substitutionHead: 'AdvReportParamBase'
  }).e({
    elementName: 'Discount',
    typeInfo: com.intuit.sb.cdm.v2.Discount,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'Add',
    typeInfo: com.intuit.sb.cdm.v2.AddRequest,
    substitutionHead: 'Request'
  }).e({
    elementName: 'SalesTaxPaymentChecks',
    typeInfo: com.intuit.sb.cdm.v2.SalesTaxPaymentChecks,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'ItemReceiptQuery',
    typeInfo: com.intuit.sb.cdm.v2.ItemReceiptQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'SalesByItemSummary',
    typeInfo: com.intuit.sb.cdm.v2.SalesByItemSummary,
    substitutionHead: 'AdvReportParamBase'
  }).e({
    elementName: 'BooleanTypeCustomFieldDefinition',
    typeInfo: com.intuit.sb.cdm.v2.BooleanTypeCustomFieldDefinition,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'ReportExample',
    typeInfo: com.intuit.sb.cdm.v2.Report
  }).e({
    elementName: 'CustomFieldDefinitionSetQuery',
    typeInfo: com.intuit.sb.cdm.v2.CustomFieldDefinitionSetQuery
  }).e({
    elementName: 'BOMComponents',
    typeInfo: com.intuit.sb.cdm.v2.BOMComponents,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'TemplateRefMap',
    typeInfo: com.intuit.sb.cdm.v2.TemplateRefMap
  }).e({
    elementName: 'CurrencyInfoQuery',
    typeInfo: com.intuit.sb.cdm.v2.CurrencyInfoQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'ItemReceipt',
    typeInfo: com.intuit.sb.cdm.v2.ItemReceipt,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'CreditCardRefunds',
    typeInfo: com.intuit.sb.cdm.v2.CreditCardRefunds,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'SalesTaxPaymentCheckQuery',
    typeInfo: com.intuit.sb.cdm.v2.SalesTaxPaymentCheckQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'CreditCardCharges',
    typeInfo: com.intuit.sb.cdm.v2.CreditCardCharges,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'AccountQuery',
    typeInfo: com.intuit.sb.cdm.v2.AccountQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'JobQuery',
    typeInfo: com.intuit.sb.cdm.v2.JobQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'PaymentMethod',
    typeInfo: com.intuit.sb.cdm.v2.PaymentMethod,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'CreditCardRefund',
    typeInfo: com.intuit.sb.cdm.v2.CreditCardRefund,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'SystemResponse',
    typeInfo: com.intuit.sb.cdm.v2.CdmComplexBase
  }).e({
    elementName: 'CreditMemo',
    typeInfo: com.intuit.sb.cdm.v2.CreditMemo,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'UOMQuery',
    typeInfo: com.intuit.sb.cdm.v2.UOMQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'QueryObjects',
    typeInfo: com.intuit.sb.cdm.v2.QueryBase
  }).e({
    elementName: 'CustomerType',
    typeInfo: com.intuit.sb.cdm.v2.CustomerType,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'CustomField',
    typeInfo: com.intuit.sb.cdm.v2.CustomField
  }).e({
    elementName: 'CreditCardRefundQuery',
    typeInfo: com.intuit.sb.cdm.v2.CreditCardRefundQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'SyncActivityRequest',
    typeInfo: com.intuit.sb.cdm.v2.SyncActivityRequest
  }).e({
    elementName: 'AdvReportParamBase',
    typeInfo: com.intuit.sb.cdm.v2.AdvReportParamBase
  }).e({
    elementName: 'FixedAssets',
    typeInfo: com.intuit.sb.cdm.v2.FixedAssets,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'OtherName',
    typeInfo: com.intuit.sb.cdm.v2.OtherName,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'SalesOrders',
    typeInfo: com.intuit.sb.cdm.v2.SalesOrders,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'BalanceSheetStd',
    typeInfo: com.intuit.sb.cdm.v2.BalanceSheetStd,
    substitutionHead: 'AdvReportParamBase'
  }).e({
    elementName: 'SalesTaxQuery',
    typeInfo: com.intuit.sb.cdm.v2.SalesTaxQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'CustomFieldDefinitionRef',
    typeInfo: com.intuit.sb.cdm.v2.CustomFieldDefinitionRef,
    substitutionHead: 'CdmObjectRef'
  }).e({
    elementName: 'CashPurchase',
    typeInfo: com.intuit.sb.cdm.v2.CashPurchase,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'JournalEntryQuery',
    typeInfo: com.intuit.sb.cdm.v2.JournalEntryQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'VendorCreditsToApply',
    typeInfo: com.intuit.sb.cdm.v2.VendorCreditsToApply,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'ClassQuery',
    typeInfo: com.intuit.sb.cdm.v2.ClassQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'Report',
    typeInfo: com.intuit.sb.cdm.v2.Report,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'SalesByCustomerSummary',
    typeInfo: com.intuit.sb.cdm.v2.SalesByCustomerSummary,
    substitutionHead: 'AdvReportParamBase'
  }).e({
    elementName: 'UOM',
    typeInfo: com.intuit.sb.cdm.v2.UOM,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'CreditMemos',
    typeInfo: com.intuit.sb.cdm.v2.CreditMemos,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Invoices',
    typeInfo: com.intuit.sb.cdm.v2.Invoices,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'InventoryTransfers',
    typeInfo: com.intuit.sb.cdm.v2.InventoryTransfers,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'BillQuery',
    typeInfo: com.intuit.sb.cdm.v2.BillQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'DepositQuery',
    typeInfo: com.intuit.sb.cdm.v2.DepositQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'Parties',
    typeInfo: com.intuit.sb.cdm.v2.Parties
  }).e({
    elementName: 'Error',
    typeInfo: com.intuit.sb.cdm.v2.ErrorResponse,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'JournalEntries',
    typeInfo: com.intuit.sb.cdm.v2.JournalEntries,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'CheckQuery',
    typeInfo: com.intuit.sb.cdm.v2.CheckQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'VendorCreditToApply',
    typeInfo: com.intuit.sb.cdm.v2.VendorCreditToApply,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'SyncStatusResponse',
    typeInfo: com.intuit.sb.cdm.v2.SyncStatusResponse
  }).e({
    elementName: 'Estimate',
    typeInfo: com.intuit.sb.cdm.v2.Estimate,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'ItemConsolidatedQuery',
    typeInfo: com.intuit.sb.cdm.v2.ItemConsolidatedQuery,
    substitutionHead: 'QueryObjects'
  }).e({
    elementName: 'AdvancedReportQuery',
    typeInfo: com.intuit.sb.cdm.v2.AdvancedReportQuery
  }).e({
    elementName: 'CDCObjectResponses',
    typeInfo: com.intuit.sb.cdm.v2.CDCObjectResponses,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Deposits',
    typeInfo: com.intuit.sb.cdm.v2.Deposits,
    substitutionHead: 'SystemResponse'
  }).e({
    elementName: 'Customer',
    typeInfo: com.intuit.sb.cdm.v2.Customer,
    substitutionHead: 'CdmObject'
  }).e({
    elementName: 'TypeOf',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
    scope: com.intuit.sb.cdm.v2.Party
  }).e({
    elementName: 'Role',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
    scope: com.intuit.sb.cdm.v2.Party
  }).e({
    elementName: 'WebSite',
    typeInfo: com.intuit.sb.cdm.v2.WebSiteAddress,
    scope: com.intuit.sb.cdm.v2.Party
  }).e({
    elementName: 'Address',
    typeInfo: com.intuit.sb.cdm.v2.PhysicalAddress,
    scope: com.intuit.sb.cdm.v2.Party
  }).e({
    elementName: 'ExternalId',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
    scope: com.intuit.sb.cdm.v2.Party
  }).e({
    elementName: 'Email',
    typeInfo: com.intuit.sb.cdm.v2.EmailAddress,
    scope: com.intuit.sb.cdm.v2.Party
  }).e({
    elementName: 'Phone',
    typeInfo: com.intuit.sb.cdm.v2.TelephoneNumber,
    scope: com.intuit.sb.cdm.v2.Party
  }).e({
    elementName: 'CustomField',
    typeInfo: com.intuit.sb.cdm.v2.CustomField,
    scope: com.intuit.sb.cdm.v2.Party
  }).e({
    elementName: 'Name',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
    scope: com.intuit.sb.cdm.v2.Party
  });

  console.log(com.intuit.sb.cdm.v2.IdType)


  return com;

})()



 