const fs = require('fs');

var central = artifacts.require("Matching_Account_Invoice_List");
var Policy_List = artifacts.require("Policy_List");
var Invoice_List = artifacts.require("Invoice_List");

module.exports = function(deployer) {
	var policyList, matchingAccount, invoiceList;
	deployer.then(()=>{
		return Policy_List.new();
	}).then((instance)=>{
		policyList=instance;
		console.log("Policy_List : " + policyList.address)
		return Invoice_List.new();
	}).then((instance)=>{
		invoiceList = instance;
		console.log("Invoice_List : " + invoiceList.address)
		return central.new();
	}).then((instance)=>{
		matchingAccount=instance;
		console.log("Matching_Account_Invoice_List : " + matchingAccount.address);
		var addresses = new Object();
		addresses.addressPolicyList = policyList.address;
		addresses.addressmatchingAccount = matchingAccount.address;
		addresses.addressInvoiceList = invoiceList.address;
		fs.writeFile("./app/js/contract_addresses.js","addressesFromJson = "+JSON.stringify(addresses),'utf-8',function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
})		
	})
};
