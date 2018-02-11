
//ACCOUNTSNAME
var ACCOUNTSNAME = [
  {
    address : '0x627306090abab3a6e1400e9345bc60c78a8bef57',    
    name : "Total",
    isFactor : false,
    isInsurer : false
  },
  {
    address : '0xf17f52151ebef6c7334fad080c5704d77216b732',    
    name : "Air France",
    isFactor : false,
    isInsurer : false

  },
  {
    address : '0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef',    
    name : "Darty",
    isFactor : false,
    isInsurer : false
  },
  {
    address : '0x821aea9a577a9b44299b9c15c88cf3087f3b5544',    
    name : "HSBC",
    isFactor : true,
    isInsurer : false
  },
  {
    address : '0x0d1d4e623d10f9fba5db95830f7d3839406c6af2',    
    name : "Euler Hermes",
    isFactor : false,
    isInsurer : true
  },
  {
    address : '0x2932b7a2355d6fecc4b5c0b6bd44cc31df247a2e',    
    name : "ING",
    isFactor : false,
    isInsurer : false
  },
  {
    address : '0x2191ef87e392377ec08e7c08eb105ef5448eced5',    
    name : "Orange",
    isFactor : false,
    isInsurer : false
  },
  {
    address : '0x0f4f2ac550a1b4e2280d04c21cea7ebd822934b5',    
    name : "Microsoft",
    isFactor : false,
    isInsurer : false
  },
  {
    address : '0x6330a553fc93768f612722bb8c2ec78ac90b3bbc',    
    name : "Next",
    isFactor : false,
    isInsurer : false
  },
  {
    address : '0x5aeda56215b167893e80b4fe645ba6d5bab767de',    
    name : "Apple",
    isFactor : false,
    isInsurer : false
  }
];

var CURRENCIES = [
  { id:1,
    value:"EUR",
    symbol:"€"
  },
  { id:2,
    value:"DOL",
    symbol:"$"
  },
  { id:3,
    value:"GBP",
    symbol:"£"
  },
];

matchingInvoiceListAddress = addressesFromJson.addressmatchingAccount;
policyListAddress = addressesFromJson.addressPolicyList;
invoiceListAddress = addressesFromJson.addressInvoiceList;
console.log(policyListAddress,invoiceListAddress,matchingInvoiceListAddress)


function findNameFromAddress(address){
  for (i=0;i<ACCOUNTSNAME.length;i++) {
    if (ACCOUNTSNAME[i].address == address)
      return ACCOUNTSNAME[i].name;
  }
  return null;
}

function findCurrencyFromId(id){
  for (i=0;i<CURRENCIES.length;i++) {
    if (CURRENCIES[i].id == id)
      return (CURRENCIES[i].value + " - " + CURRENCIES[i].symbol);
  }
  return null;
}

var currentAccount=ACCOUNTSNAME[0].address;
//unlockAccount(currentAccount,"test");
var matchingInvoiceList = new Contract();
var policyList = new Contract();
var invoiceList = new Contract();

function init(){
  // Init matching invoice list
	matchingInvoiceList.setAbi(Matching_Account_Invoice_List);
	matchingInvoiceList.at(matchingInvoiceListAddress);
  /*matchingInvoiceList.setPolicyList(policyListAddress,(err,res)=>{
     if (err) console.error("setPolicyList err : " + err);
   });*/

  // Init Policy List
	policyList.setAbi(Policy_List);
	policyList.at(policyListAddress);

  // Init invoice Factory
  invoiceList.setAbi(Invoice_List);
  invoiceList.at(invoiceListAddress);

  document.getElementById("currentAccount").value="0x627306090abab3a6e1400e9345bc60c78a8bef57";
}


function selectAccount(selectObject){
  currentAccount=document.getElementById("currentAccount").value;

  sellerSelect = document.getElementById("seller_name_id");
  if(sellerSelect){

    for (var i=0;i<ACCOUNTSNAME.length;i++){
      if (currentAccount == ACCOUNTSNAME[i].address){
          sellersNames = "<option value='" + ACCOUNTSNAME[i].address + "'>" + ACCOUNTSNAME[i].name + "</option>";
      }
    }
    $(".filter-sellerName").empty().append(sellersNames);
  }

  buyerSelect = document.getElementById("buyer_name_id");
  if(buyerSelect){
    buyersNames="";
    for (var i=0;i<ACCOUNTSNAME.length;i++){
      if (currentAccount != ACCOUNTSNAME[i].address){
          buyersNames += "<option value='" + ACCOUNTSNAME[i].address + "'>" + ACCOUNTSNAME[i].name + "</option>";
      }
    }
    $(".filter-buyerName").empty().append(buyersNames);
  }
}


/***********************
******* Invoice*********
***********************/

function createInvoice(){
	matchingInvoiceList.getInvoiceList(function(err, res){
  if(err == null){
    console.log("res:" + res);       
  }

  else{
    console.error("err 1:" + err);
  }
});
}

async function getInvoiceList(){
  invoiceListPromise = new Promise((resolve,reject)=>{

        invoiceList.getInvoiceListLength(function(err,res){

            if (err!=null) reject("getTotalAmount err : " + err);
            else{
                resolve(hex2int(res));
            } 
        });
    });
    var list=[];

    await invoiceListPromise.then(async length=>{

        for (var i=0;i<length;i++){ 
            tmpPromise = new Promise((resolve,reject)=>{
                invoiceList.getInvoiceAtIndex(i,function(err,res){
                    if(err!=null) reject("getInvoiceAtIndex err : " + err);
                    else{
                        resolve(hex2address(res));
                    }
                })
            });

            await tmpPromise.then(invoiceAddress=>{
                getInvoiceInfosAt(invoiceAddress).then(data=>{                  
                    list.push(data);
                })


            })

        }
    })
    return list;
}

function getInvoiceListLength(){

}

async function getInvoiceInfosAt(address){
  var invoice = new Contract();
  invoice.setAbi(Invoice_Contract);
  invoice.at(address);

  var result = new Object();
  var promises = [];

  // Amount
  promises.push(new Promise((resolve,reject)=>{
    invoice.getAmount(function(err,res){
      if (err!=null) reject("getAmount err : " + err);
      else{
        resolve(hex2int(res));
      }
    })
  }));

  // Current Amount
  promises.push(new Promise((resolve,reject)=>{
    invoice.getCurrentAmount(function(err,res){
      if (err!=null) reject("getCurrentAmount err : " + err);
      else{
        resolve(hex2int(res));
       }
    })
  }));

  // Currency
  promises.push(new Promise((resolve,reject)=>{
    invoice.getCurrency(function(err,res){
      if (err!=null) reject("getCurrency err : " + err);
      else{
        resolve(hex2int(res));
       }
    })
  }));

  // Creation Date

  promises.push(new Promise((resolve,reject)=>{
    invoice.getCreationDate(function(err,res){
      if (err!=null) reject("getCreationDate err : " + err);
      else{
        resolve(hex2int(res));
       }
    })
  }));

  // Due at
  promises.push(new Promise((resolve,reject)=>{
    invoice.getDueDate(function(err,res){
      if (err!=null) reject("getDueDate err : " + err);
      else{
        resolve(hex2int(res));
       }
    })
  }));

  // Seller Address
  promises.push(new Promise((resolve,reject)=>{
    invoice.getSeller(function(err,res){
      if (err!=null) reject("getSeller err : " + err);
      else{
        resolve(hex2address(res));
       }
    })
  }));

  // Buyer Address
  promises.push(new Promise((resolve,reject)=>{
    invoice.getBuyer(function(err,res){
      if (err!=null) reject("getBuyer err : " + err);
      else{
        resolve(hex2address(res));
       }
    })
  }));

  // Active
  promises.push(new Promise((resolve,reject)=>{
    invoice.isActive(function(err,res){
      if (err!=null) reject("isActive err : " + err);
      else{
        resolve(hex2bool(res));
       }
    })
  }));

  
  await Promise.all(promises).then(data => {
    var i = 0;
    result.address=address;
    result.totalValue = data[i++];
    result.currentAmount = data[i++];
    result.currencyId = data[i++];
    result.documentDate = hex2date(data[i++])
    result.documentDueDate = hex2date(data[i++]);
    result.seller = data[i++];
    result.buyer = data[i++];
    result.isActive = data[i++];

    result.sellerName = findNameFromAddress(result.seller);
    result.buyerName = findNameFromAddress(result.buyer);
    result.currency = findCurrencyFromId(result.currencyId);    
    result.statut = result.isActive?"Approved":"Not Approved";
    if (result.totalValue == result.currentAmount){
      result.statut = "Paid";
    }
  });
  return result;
  
    
}

function setInvoiceCurrentAmount(amount,address){
    console.log("setInvoiceCurrentAmount");
    var invoice= new Contract();
    invoice.setAbi(Invoice_Contract);
    invoice.at(address);

    invoice.gotPaid(int2hex(amount),function(err,res){
        if (err!=null) conole.error("gotPaid err : " + err); 
    });


}

async function getAllPolicies(){
  list=[];
  var policyListLength;
  var policyAddressList=[];

  promise = new Promise((resolve,reject)=>{
    policyList.getPoliciyListLength((err,res)=>{
      if (err!=null) reject(err);
      else{
        resolve(hex2int(res));
      }
    });
  });

  await promise.then(data=>{
    policyListLength = data;
  })

  promiseList=[];
  for(var i = 0; i < policyListLength;i++){
    promiseList.push(new Promise((resolve,reject)=>{
      policyList.getPolicyAtIndex(i,function(err,res){
        if(err!=null) reject(err);
        else{
          resolve(hex2address(res));
        }
      });
    }));
  }

  await Promise.all(promiseList).then(data=>{
    policyAddressList = data;
  });

  promiseList=[];
    
  for(var i=0;i<policyAddressList.length;i++){
      promiseList.push(new Promise((resolve,reject)=>{            
          getCreditLimitInfosAt(hex2address(policyAddressList[i])).then(data=>{
          //console.log(data.sellerAddress,currentAccount);            
            // if (hex2address(data.sellerAddress) == currentAccount || 
            //   hex2address(data.buyerAddress ) == currentAccount ||
            //   hex2address(data.validatorAddress) == currentAccount ||
            //   hex2address(data.factorAddress) == currentAccount){
            //    resolve(data);
            // }
            // else{
              resolve(data);
            //}
          })
      }))
  }

  await Promise.all(promiseList).then(data=>{
    for (var i = 0; i<data.length;i++){
      if (data[i]!=null){
        list.push(data[i]);
      }
      
    }
    
  }).catch(e=>{})

  return list;


}

async function getPolicyList(){
    policyListPromise = new Promise((resolve,reject)=>{

        policyList.getPoliciyListLength(function(err,res){

            if (err!=null) reject("getPoliciyListLength err : " + err);
            else{
                resolve(hex2int(res));
            } 
        });
    });
    var list=[];

    await policyListPromise.then(async length=>{
        console.log("Length for loop : " + length)

        for (var i=0;i<length;i++){ 
            tmpPromise = new Promise((resolve,reject)=>{
                policyList.getPolicyAtIndex(i,function(err,res){
                    if(err!=null) reject("getPolicyAtIndex err : " + err);
                    else{
                        resolve(hex2address(res));
                    }
                })
            });

            await tmpPromise.then(policyAddress=>{
                getCreditLimitInfosAt(policyAddress).then(data=>{                  
                    list.push(data);
                })


            })

        }
    })
    return list;
}


async function getCreditLimitInfosAt(address){
  var policy = new Contract();
  policy.setAbi(Policy_Contract);
  policy.at(address);

  var result = new Object();
  var promises = [];

  // Amount
  promises.push(new Promise((resolve,reject)=>{
    policy.getTotalAmount(function(err,res){
      if (err!=null) reject("getTotalAmount err : " + err);
      else{
        resolve(hex2int(res));
      }
    })
  }));

  // Current Amount
  promises.push(new Promise((resolve,reject)=>{
    policy.getCurrentAmount(function(err,res){
      if (err!=null) reject("getCurrentAmount err : " + err);
      else{
        resolve(hex2int(res));
       }
    })
  }));

  // Active
  promises.push(new Promise((resolve,reject)=>{
    policy.isActive(function(err,res){
      if (err!=null) reject("isActive err : " + err);
      else{
        resolve(hex2bool(res));
       }
    })
  }));

  // Expire Date
  promises.push(new Promise((resolve,reject)=>{
    policy.getExpireDate(function(err,res){
      if (err!=null) reject("getExpireDate err : " + err);
      else{
        resolve(hex2date(res));
       }
    })
  }));

  // Creation Date
  promises.push(new Promise((resolve,reject)=>{
    policy.getCreationDate(function(err,res){
      if (err!=null) reject("getCreationDate err : " + err);
      else{
        resolve(hex2date(res));
       }
    })
  }));

  // Validator
  promises.push(new Promise((resolve,reject)=>{
    policy.getValidator(function(err,res){
      if (err!=null) reject("getValidator err : " + err);
      else{
        resolve(hex2address(res));
       }
    })
  }));


  //Factor
  promises.push(new Promise((resolve,reject)=>{
    policy.getFactor(function(err,res){
      if (err!=null) reject("getFactor err : " + err);
      else{
        resolve(hex2address(res));
       }
    })
  }));


  // Buyer Address
  promises.push(new Promise((resolve,reject)=>{
    policy.getBuyer(function(err,res){
      if (err!=null) reject("getBuyer err : " + err);
      else{
        resolve(hex2address(res));
       }
    })
  }));

  // Seller Address
  promises.push(new Promise((resolve,reject)=>{
    policy.getSeller(function(err,res){
      if (err!=null) reject("getSeller err : " + err);
      else{
        resolve(hex2address(res));
       }
    })
  }));

  // Request Amount
  promises.push(new Promise((resolve,reject)=>{
    policy.getRequestAmount(function(err,res){
      if (err!=null) reject("getRequestAmount err : " + err);
      else{
        resolve(hex2int(res));
       }
    })
  }));

  // Request Date
  promises.push(new Promise((resolve,reject)=>{
    policy.getRequestDate(function(err,res){
      if (err!=null) reject("getRequestDate err : " + err);
      else{
        resolve(hex2date(res));
       }
    })
  }));

  // Request Active
  promises.push(new Promise((resolve,reject)=>{
    policy.isRequestActive(function(err,res){
      if (err!=null) reject("isRequestActive err : " + err);
      else{
        resolve(hex2bool(res));
       }
    })
  }));
  // Deleted
  promises.push(new Promise((resolve,reject)=>{
    policy.getDeleted(function(err,res){
      if (err!=null) reject("getDeleted err : " + err);
      else{
        resolve(hex2bool(res));
       }
    })
  }));

  
  await Promise.all(promises).then(data => {  
    var i = 0;
    result.address=address;
    result.limitRequired = data[i++];
    result.currentAmount =data[i++];
    result.isActive = data[i++];
    result.endDate = data[i++];
    result.creationDate = data[i++];
    result.validatorAddress = data[i++];
    result.factorAddress = data[i++];     
    result.buyerAddress = data[i++];    
    result.sellerAddress = data[i++];    
    result.requestAmount = data[i++];
    result.requestDate = data[i++];
    result.requestActive = data[i++];
    result.deleted = data[i++];
    result.currencyId=1;

    result.buyerName = findNameFromAddress(result.buyerAddress);
    result.sellerName = findNameFromAddress(result.sellerAddress);
    result.validator = findNameFromAddress(result.validatorAddress);
    result.currency = findCurrencyFromId(result.currencyId);
    result.factor = findNameFromAddress(result.factorAddress);
    if (result.requestActive){
      result.limitRequired = result.requestAmount;
      result.endDate = result.requestDate;
    }
    result.statut = result.isActive?"Approved":"Not Approved";
    if (result.deleted){
      result.statut = Deleted;
    }
    
       
  });
  return(result);
    
}




// Random stuff
// For Date default
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

// Access get parameters
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

async function getEulerExposition(){
  limits = 0;
  used = 0;
  var policyListLength;
  var policyAddressList=[];

  promise = new Promise((resolve,reject)=>{
    policyList.getPoliciyListLength((err,res)=>{
      if (err!=null) reject(err);
      else{
        resolve(hex2int(res));
      }
    });
  });

  await promise.then(data=>{
    policyListLength = data;
  })

  promiseList=[];
  for(var i = 0; i < policyListLength;i++){
    promiseList.push(new Promise((resolve,reject)=>{
      policyList.getPolicyAtIndex(i,function(err,res){
        if(err!=null) reject(err);
        else{
          resolve(hex2address(res));
        }
      });
    }));
  }

  await Promise.all(promiseList).then(data=>{
    policyAddressList = data;
  });

  promiseList=[];
    
  for(var i=0;i<policyAddressList.length;i++){
      promiseList.push(new Promise((resolve,reject)=>{            
          getCreditLimitInfosAt(hex2address(policyAddressList[i])).then(data=>{
            resolve(data);            
          })
      }))
  }

  await Promise.all(promiseList).then(data=>{
    for (var i = 0; i<data.length;i++){
      if (data[i].isActive){
        limits += data[i].limitRequired;
        used += data[i].currentAmount;  
      }    
    }
    
  }).catch(e=>{})

  return ([limits,used]);
}

async function getHSBCExposition(){
  limits = 0;
  used = 0;
  var policyListLength;
  var policyAddressList=[];

  promise = new Promise((resolve,reject)=>{
    policyList.getPoliciyListLength((err,res)=>{
      if (err!=null) reject(err);
      else{
        resolve(hex2int(res));
      }
    });
  });

  await promise.then(data=>{
    policyListLength = data;
  })

  promiseList=[];
  for(var i = 0; i < policyListLength;i++){
    promiseList.push(new Promise((resolve,reject)=>{
      policyList.getPolicyAtIndex(i,function(err,res){
        if(err!=null) reject(err);
        else{
          resolve(hex2address(res));
        }
      });
    }));
  }

  await Promise.all(promiseList).then(data=>{
    policyAddressList = data;
  });

  promiseList=[];
    
  for(var i=0;i<policyAddressList.length;i++){
      promiseList.push(new Promise((resolve,reject)=>{            
          getCreditLimitInfosAt(hex2address(policyAddressList[i])).then(data=>{
            resolve(data);            
          })
      }))
  }

  await Promise.all(promiseList).then(data=>{
    for (var i = 0; i<data.length;i++){
      if (data[i].isActive){
        limits += data[i].limitRequired;
        used += data[i].currentAmount;  
      }    
    }
    
  }).catch(e=>{})

  return ([limits,used]);
}