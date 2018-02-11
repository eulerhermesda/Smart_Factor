pragma solidity ^0.4.18;

//----------------------------------------------------
//------------------ Invoice -------------------------
//----------------------------------------------------
contract Invoice_Contract{
  /**********
  Definition of the data
  **********/
  struct Invoice{
    uint256 amount;
    uint256 currentAmount;
    uint256 currency;
    uint256 creationDate;
    uint256 dueAt;
    uint256 issueAt;
    address sellerAddress;
    address buyerAddress;
    address factorAddress;
    bool isActive;
    address paymentInfo;
    bool policyAttached;
  }

  Invoice public _invoice;
  Policy_Contract public _policy;
  address public _creator;
  address public policyList;
  

  /**********
  Restriction
  **********/
  modifier sellerOwnly(){
      require(msg.sender == _invoice.sellerAddress);
      _;
  }



  modifier IsValidate(){
      require(_invoice.isActive);
      _;
  }

  modifier participantsOnly(){
    require(msg.sender == _invoice.sellerAddress || msg.sender == _invoice.buyerAddress);
    _;
  }


  /**********
  Events
  **********/

  event statusChanged (string reason );

  
  /**********
  Constructor
  **********/

  function Invoice_Contract(
    uint256 amount,
    uint256 currency,
    uint256 dueAt,
    address sellerAddress,
    address buyerAddress,
    address paymentInfo) 
  public {
    _invoice.amount = amount;
    _invoice.currency = currency;
    _invoice.dueAt = dueAt;
    _invoice.issueAt = now;
    _invoice.sellerAddress = sellerAddress;
    _invoice.buyerAddress = buyerAddress;  
    _invoice.paymentInfo = paymentInfo;
    _invoice.creationDate = now;
    //_invoice.factorAddress= 0x821aea9a577a9b44299b9c15c88cf3087f3b5544;

    //Looking if a policy exists
    //Policy_List plist = Policy_List(policyList);
    //address tmp = plist.findPolicy(buyerAddress,sellerAddress);
    //_policy = Policy_Contract(plist.findPolicy(buyerAddress,sellerAddress));

  }

  

  /**********
  Accessors
  **********/

  function getCurrentAmount() external constant returns (uint256 currentAmount){
    return _invoice.currentAmount;
  }

  function getAmount() external constant returns(uint amount) {
    return _invoice.amount;
  }

  function isActive () external constant returns (bool isActive){
    return _invoice.isActive;
  }

  function getSeller() external constant returns (address seller){
    return _invoice.sellerAddress;
  }

  function getBuyer() external constant returns (address buyer){
    return _invoice.buyerAddress;
  }

  function getDueDate() external constant returns(uint256 dueAt) {
    return _invoice.dueAt;
  }

  function getCreationDate() external constant returns(uint256 dueAt) {
    return _invoice.creationDate;
  }

  function getCurrency() external constant returns(uint256 dueAt) {
    return _invoice.currency;
  }

  function getCounterpartAddress() participantsOnly() external constant returns (address counterpartAddress){
    if(msg.sender == _invoice.sellerAddress){
      return _invoice.buyerAddress;
    }
    else{
      return _invoice.sellerAddress;
    }
  }

  function getPaidStatus() external constant returns (bool status){
    if (_invoice.currentAmount == _invoice.amount)
      return true;
    else
      return false;
  }

  function getPolicyAttached() external constant returns (bool policyAttached){
    return _invoice.policyAttached;
  }

  function setPolicyList(address _policyList) public {
    policyList = _policyList;
  }

  function getPolicyList() external constant returns(address policyL){
    return policyList;
  }

  function getFactor() external constant returns(address fact){
    return _invoice.factorAddress;
  }
   

  /**********
  Display contract
  **********/
  function displayInvoice() external constant returns (
    uint256 amount,
    uint256 currency,
    uint256 dueAt,
    uint256 issueAt,
    address sellerAddress,
    address buyerAddress)
  {
    return (
    _invoice.amount,
    _invoice.currency,
    _invoice.dueAt,
    _invoice.issueAt,
    _invoice.sellerAddress,
    _invoice.buyerAddress
    );
  }
 
  

  /**********
  Validation
  **********/
  function validate() participantsOnly() external {
  
    require(msg.sender == _invoice.buyerAddress);
    _invoice.isActive = true;
    statusChanged("Invoice validated");  
  }

  
  /**********
  Paid
  **********/
  function gotPaid(uint256 amount) IsValidate() external { 
      require(amount + _invoice.currentAmount <= _invoice.amount && amount > 0);
      if (_invoice.factorAddress !=0){
        require (msg.sender == _invoice.factorAddress);
      }
      else{
        require(msg.sender == _invoice.sellerAddress);
      }
      _invoice.currentAmount = _invoice.currentAmount + amount;
      // Policy_Contract test;
      // if (_policy != test){
      //   _policy.invoicePaid(amount);
      // }
  }

  /*********
  Attach invoice to existing TCI policy
  *********/
  function attachPolicy(address policyAddress) public {
    _policy = Policy_Contract(policyAddress);
    _policy.invoiceSubscribe(address(this));
    _invoice.policyAttached = true;
  }

  function setPaymentInformation(address paymentInfo) sellerOwnly() public{
    _invoice.paymentInfo = paymentInfo;
  }


  function setFactorAddress(address add) public{
    _invoice.factorAddress = add;
  }
}


//----------------------------------------------------
//------------------ policy -----------------------------
//----------------------------------------------------
contract Policy_Contract{ //is Invoice

  /**********
  Definition of the data
  **********/
  struct Policy{      
      uint256 totalAmount; // Total amount covered by the policy
      uint256 currentAmount; // current amount available because of all the invoices covered
      bool isActive;
      uint256 expireDate;
      uint256 creationDate;
      address validator; // EH
      address factor;
      address buyer;
      address seller;
  }

  struct Request{
    uint256 amount;
    uint256 expireDate;
    bool isActive;

  }
  
  bool _deleted;
  address  _creator;
  Policy public policy;
  Request public currentRequest;
  address[] invoiceList;
  mapping(address=>bool) invoiceActive;

  /**********
  Events
  **********/
  event statusChanged (string reason );

  /**********
  Restriction
  **********/
  modifier creatorOnly(){
    require(msg.sender == _creator) ;
    _;
  }
  modifier onlyValidator(){
    require(msg.sender == policy.validator);
    _;
  }

  modifier onlyParticipants(){
    require(msg.sender == policy.validator || msg.sender == policy.seller);
    _;
  }

  /**********
  Accessors
  **********/
  function getTotalAmount() external constant returns (uint256 amount){
    return policy.totalAmount;
  }

  function getCurrentAmount() external constant returns (uint256 amount){
    return policy.currentAmount;
  }

  function isActive() external constant returns (bool isActive){
    return policy.isActive;
  }

  function getExpireDate() external constant returns (uint256 date){
    return policy.expireDate;
  }

  function getCreationDate() external constant returns (uint256 date){
    return policy.creationDate;
  }

  function getValidator() external constant returns (address validator){
    return policy.validator;
  }

  function getFactor() external constant returns (address factor){
    return policy.factor;
  }

  function getBuyer() external constant returns (address buyer){
    return policy.buyer;
  }  

  function getSeller() external constant returns (address seller){
    return policy.seller;
  } 

  function getRequestAmount() external constant returns (uint256 amount){
    return currentRequest.amount;
  }

  function getRequestDate() external constant returns (uint256 date){
    return currentRequest.expireDate;
  }

  function isRequestActive() external constant returns (bool isActive){
    return currentRequest.isActive;
  }

  function getDeleted() external constant returns (bool deleted){
    return _deleted;
  }

  /**********
  Constructor
  **********/
  function Policy_Contract ( 
    uint256 amount, 
    uint256 expireDate, 
    address buyer, 
    address seller,
    address factor, 
    address validator) public {
      //Initialisation
      
      _creator = msg.sender;
      
      currentRequest.amount = amount;
      currentRequest.expireDate = expireDate;
      currentRequest.isActive = true;
      policy.buyer = buyer;
      policy.seller = seller;
      policy.factor = factor;
      policy.validator = validator;
      policy.creationDate = now;

  }

  /**********
  Validate Request
  **********/
  function validate (uint256 amount, uint256 expireDate) onlyValidator() public{
    require(currentRequest.isActive && !policy.isActive);
    policy.totalAmount = amount;
    policy.expireDate = expireDate;
    policy.isActive = true;
    //currentRequest.isActive = false;
    //statusChanged("Request validated");
  }

  /**********
  Reject Request
  ***********/
  function reject() onlyValidator() public{
    require(!policy.isActive);
    //currentRequest.isActive = false;
    _deleted = true;
    statusChanged("Request rejected");

  }

  function addCurrentAmount(uint256 amount)public {
    //require(policy.currentAmount + amount > policy.currentAmount);
    uint256 tmp;
    tmp = policy.currentAmount + amount;
    if (tmp > policy.currentAmount && (tmp <= policy.totalAmount || tmp <= currentRequest.amount))
      policy.currentAmount = tmp;
    else
      revert();
  }

  function removeCurrentAmount(uint256 amount) public {
    require (policy.currentAmount - amount < policy.currentAmount);
    policy.currentAmount = policy.currentAmount - amount;
    
  }
  /**********
  Invoice suscribe
  **********/

  function invoiceSubscribe (address invoiceAddress) public returns (bool success){

    Invoice_Contract invoice = Invoice_Contract(invoiceAddress);    

    require (invoice.getSeller() == policy.seller && invoice.getBuyer() == policy.buyer);
    require (invoice.getCurrentAmount() < policy.currentAmount);
    require (invoice.getDueDate() <= now && invoice.getDueDate() <= policy.expireDate);
    policy.currentAmount = policy.currentAmount + invoice.getCurrentAmount();
    invoiceList.push(msg.sender);
    invoiceActive[msg.sender] = true;
    return true;
  }

  /**********
  Invoice Paid
  **********/
  //When the invoice have been paid

  function invoicePaid (uint256 amount) public {
    require (invoiceActive[msg.sender]);
    Invoice_Contract invoice = Invoice_Contract(msg.sender);
    require(invoice.getCurrentAmount() >= amount);
    policy.currentAmount = policy.currentAmount - amount;
  }


  /**********
  Cancel Policy
  **********/
  function cancel() creatorOnly() public {

      policy.isActive = false;

  }


}


//----------------------------------------------------
//------------------ list of invoices -----------------------------
//----------------------------------------------------
contract Invoice_List{
  address[] List;
  address policyList;
  

  function setPolicyList(address _policyList) public{
    policyList = _policyList;
  }

  function getInvoiceAtIndex(uint256 index) external constant returns (address invoice){
    require (index < List.length);
    return List[index];
  }

  function getInvoiceListLength () external constant returns (uint256 length){
    return List.length;
  }

  function addInvoice (address invoice) public {
    List.push(invoice);
  }


   function createInvoice(
    uint256 amount,
    uint256 currency,
    uint256 dueAt,
    address sellerAddress,
    address buyerAddress,
    address paymentInfo)  public {
      Invoice_Contract newInv = new Invoice_Contract(amount,currency,dueAt,sellerAddress,buyerAddress,paymentInfo);
      //MyContract newInv = new MyContract();
      List.push(address(newInv));
      
  } 

}

//----------------------------------------------------
//------------------ list of policies -----------------------------
//----------------------------------------------------
contract Policy_List{
  address[] List;
  mapping(bytes32 => address) hashlist;


  function getPolicyAtIndex(uint256 index) external constant returns (address policy){
    require (index < List.length);
    return List[index];
  }

  function getPoliciyListLength () external constant returns (uint256 length){
    return List.length;
  }

  function addPolicy (address policy) public {
    List.push(policy);
  }

  function createPolicy ( uint256 amount, uint256 expireDate, address buyer,address seller ,address factor, address validator) public {
      //Initialisation
      Policy_Contract newPolicy = new Policy_Contract(amount,  expireDate,  buyer, seller, factor,  validator);
      List.push(newPolicy);
      bytes32 hash = keccak256(uint256(buyer)+uint256(seller));
      hashlist[hash] = newPolicy;
  }

  function findPolicy(address buyer, address seller) external constant returns (address policy){
    bytes32 hash = keccak256(uint256(buyer)+uint256(seller));
    return hashlist[hash];
  }

}


//----------------------------------------------------
//------------------ Index of invoices linked with account addresses -----------------------------
//----------------------------------------------------

contract Matching_Account_Invoice_List {
  mapping(address => address) public Index_Invoice;
  mapping(address => address) public Index_Remise;
  mapping(address => address) public Index_Policy;
  address policyList;


  function setPolicyList(address _policyList) public{
    policyList = _policyList;
  }

  function getPolicyList() external constant returns (address policy){
    return policyList;
  }
  // Invoice Management

  function addInvoiceList() public {
    require (Index_Invoice[msg.sender] == 0);
    Invoice_List list = new Invoice_List();
    Index_Invoice[msg.sender] = address(list);
    //list.setPolicyList(policyList);

  }

  function addInvoiceListAt(address index) public {
    require (Index_Invoice[index] == 0);
    Invoice_List list = new Invoice_List();
    Index_Invoice[index] = address(list);
  }

   function getInvoiceList() public constant returns (address listInvoice){
    return (Index_Invoice[msg.sender]);
  }

  function getInvoiceListAt(address index) public constant returns (address listInvoice){
    return (Index_Invoice[index]);
  }

  // Remise Management

 function addRemiseList() public {
    require (Index_Remise[msg.sender] == 0);
    Remise_List list = new Remise_List();
    Index_Remise[msg.sender] = address(list);

  }

  function getRemiseList() external constant returns (address listRemise){
    return (Index_Remise[msg.sender]);
  }

  function getRemiseList(address index) external constant returns (address listRemise){
    return (Index_Remise[index]);
  }

}

//----------------------------------------------------
//------------------ Payment Informations -----------------------------
//----------------------------------------------------


contract Payment_Information {
  string  _lastName;
  string  _firstName;
  string  _IBAN;
  address  _creator;

  modifier onlyCreator(){
    require(msg.sender == _creator);
    _;
  }

  function Payment_Information(string lastName, string firstName, string IBAN) public{
    _lastName = lastName;
    _firstName = firstName;
    _IBAN = IBAN;
    _creator = msg.sender;
  }

  function getInformation () external constant returns (string lastName, string firstName, string IBAN){
    return (_lastName, _firstName, _IBAN);
  }

  function setInformation (string lastName, string firstName, string IBAN) onlyCreator() external {
    _lastName = lastName;
    _firstName = firstName;
    _IBAN = IBAN;
  }

}



//----------------------------------------------------
//------------------ Remise (invoice bundle) -----------------------------
//----------------------------------------------------
contract Remise{
  address[] List;

  function getInvoiceAtIndex(uint256 index) external constant returns (address invoice){
    require (index < List.length);
    return List[index];
  }

  function getNumberInvoice () external constant returns (uint256 length){
    return List.length;
  }

  function addInvoice (address invoice) public {
    List.push(invoice);
  }

}

//----------------------------------------------------
//------------------ list of policies -----------------------------
//----------------------------------------------------
contract Remise_List{
  address[] List;

  function getRemiseAtIndex(uint256 index) external constant returns (address remise){
    require (index < List.length);
    return List[index];
  }

  function getRemiseListLength () external constant returns (uint256 length){
    return List.length;
  }

  function addRemise (address remise) public {
    List.push(remise);
  }

}

contract logging_Contract{
  struct Transaction{
    uint256 command;
    uint256 data1;
    uint256 data2;
    uint256 data3;
    uint256 data4;
    uint256 data5;
    uint256 data6;
    uint256 data7;
  }

  Transaction[] public listTrans;

}


