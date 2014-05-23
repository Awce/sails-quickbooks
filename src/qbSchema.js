/**
 * 
 */

var QBD = require('./IDS_QBD.json')





module.exports = {


	qbd : {

		v2 : {

			models : {


		"account" : {


            "attributes" : {

                "Name" : {
                    "type" : "String",
                    "required" : true
                }

            },
            "config" : {
                "path" : "account",
                "modelKey" : "account",
                "responseCollectionKey" : "Accounts",
                "enableCache" : "true",
                "cacheName" : "accounts"
            },
            "validations" : {},
            "methods" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false
            }

        },
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
		"Customer" : {


            "attributes" : {

                "Name" : {
                    "type" : "String",
                    "required" : true
                }

            },
            "config" : {
                "path" : "customer",
                "modelKey" : "Customer",
                "responseCollectionKey" : "Customers",
                "enableCache" : "true",
                "cacheName" : "customers"
            },
            "validations" : {},
            "methods" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false
            }

        },
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
		"item" : {


            "attributes" : {

                "Name" : {
                    "type" : "String",
                    "required" : true
                }

            },
            "config" : {
                "path" : "item",
                "modelKey" : "Item",
                "responseCollectionKey" : "Items",
                "enableCache" : "true",
                "cacheName" : "items"
            },
            "validations" : {},
            "methods" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false
            }

        },
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
		"payrollitem" : {


            "attributes" : {

                "Name" : {
                    "type" : "String",
                    "required" : true
                }

            },
            "config" : {
                "path" : "payrollitem",
                "modelKey" : "PayrollItem",
                "responseCollectionKey" : "PayrollItems",
                "enableCache" : "true",
                "cacheName" : "payrollitem"
            },
            "validations" : {},
            "methods" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false
            }

        },
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