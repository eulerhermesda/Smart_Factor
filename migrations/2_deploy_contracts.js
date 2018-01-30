var central = artifacts.require("Matching_Account_Invoice_List");
var Policy_List = artifacts.require("Policy_List");
var Invoice_List = artifacts.require("Invoice_List");

module.exports = function(deployer) {
  deployer.deploy(central);
  deployer.deploy(Policy_List);
  deployer.deploy(Invoice_List);
};
