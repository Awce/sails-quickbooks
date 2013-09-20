# sails-quickbooks

An open-source adapter to use the Intuit Partner Platform as a datasource in Sails / Waterline

Intuit provides 2 ways to access customer Quickbooks data: 
- The Quickbooks Web Connector - for one-off integrations. Uses SOAP, nope.
- Intuit Partner Platform - a marketplace / "REST" API for SaaS apps to integrate with Quickbooks for Windows / Quickbooks Online. 

Disclaimer : Intuit's developer policies state that the IPP should only be used for multitenant applications, should use the Intuit Blue Dot UI to set up authentication, and be approved by Intuit's App review team. So I certainly cannot recommend building one-off integrations and running them in development mode forever. 

See : [Introduction to Quickbooks API](https://developer.intuit.com/docs/0025_quickbooksapi/0005_introduction_to_quickbooksapi) for more information.

