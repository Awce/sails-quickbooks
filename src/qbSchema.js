/**
 * 
 */

module.exports = {


	qbd : {

		v2 : {

			models : {


		"Account" : {},
		"Bill" : {},
		"BillPayment" : {},
		"BillPaymentCreditCard" : {},
		"BOMComponent" : {},
		"BuildAssembly" : {},
		"Charge" : {},
		"Check" :{},
		"Class" : {},
		"CreditCardCharge" : {},
		"CreditCardCredit" : {},
		"CreditCadRefund" : {},
		"CreditMemo" : {},
		"CurrencyInfo" : {},
		"Customer" : {},
		"CustomerMsg" : {},
		"CustomerType" : {},
		"Deposit" : {},
		"Discount" : {},
		"employee" : {


			"attributes" : {

				"Name" : {
					"type" : "String",
					"required" : true
				}

				},
			"config" : {
				"path" : "employee",
				"modelKey" : "Employee",
				"responseCollectionKey" : "Employees",
				"enableCache" : "true",
				"cacheName" : "employees"
				},
			"validations" : {},
			"methods" : {
				"create" : false,
				"read" : false,
				"update" : false,
				"delete" : false
			}

			},
		"Estimate" : {},
		"FixedAsset" : {},
		"InventoryAdjustment" : {},
		"InventorySite" : {},
		"InventoryTransfer" : {},
		"Invoice" : {},
		"item" : {},
		"ItemConsolidated" : {},
		"ItemGroupComponent" : {},
		"ItemReceipt" : {},
		"Job" : {},
		"JobType" : {},
		"JournalEntry" : {},
		"NameValue" : {},
		"OtherName" : {},
		"Payment" : {},
		"PaymentMethod" : {},
		"PayrollItem" : {},
		"PayrollNonWageItem" : {},
		"Preferences" : {},
		"PurchaseOrder" : {},
		"SalesOrder" : {},
		"SalesReceipt" : {},
		"SalesRep" : {},
		"SalesTax" : {},
		"SalesTaxCode" : {},
		"SalesTaxGroup" : {},
		"SalesTerm" : {},
		"ShipMethod" : {},
		"SyncActivity" : {},
		"SyncStatus" :{},
		"Task" : {},
		"TemplateName" : {},
		"timeactivity" : {




			"attributes" : {

				"Synchronized" : {
					"type" : "String",
					"required" : true
				}

				},
			"config" : {
				"path" : "timeactivity",
				"modelKey" : "TimeActivity",
				"responseCollectionKey" : "TimeActivities",
				"enableCache" : "true",
				"cacheName" : "timeactivity"
				},
			"validations" : {},
			"methods" : {
				"create" : false,
				"read" : false,
				"update" : false,
				"delete" : false
			}

			


			},
		"UOM" :{},
		"Vendor" : {},
		"VendorCredit" : {},
		"VendorType" : {}

},



		},
		v3 : {}

	},
	qbo : {

	},
	qbwc : {

	}



}