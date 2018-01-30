$('button').on('click', function () {

    $('p').css('opacity', 0);

});


/*  nice table */

$(document).ready(function () {

    $('.filterable .btn-filter').click(function () {

        var $panel = $(this).parents('.filterable'),

            $filters = $panel.find('.filters input'),

            $tbody = $panel.find('.table tbody');

        if ($filters.prop('disabled') == true) {

            $filters.prop('disabled', false);

            $filters.first().focus();

        } else {

            $filters.val('').prop('disabled', true);

            $tbody.find('.no-result').remove();

            $tbody.find('tr').show();

        }

    });



    $('.filterable .filters input').keyup(function (e) {

        // Ignore tab key

        var code = e.keyCode || e.which;

        if (code == '9') return;

        // Useful DOM data and selectors

        var $input = $(this),

            inputContent = $input.val().toLowerCase(),

            $panel = $input.parents('.filterable'),

            column = $panel.find('.filters th').index($input.parents('th')),

            $table = $panel.find('.table'),

            $rows = $table.find('tbody tr');

        // Dirtiest filter function ever ;)

        var $filteredRows = $rows.filter(function () {

            var value = $(this).find('td').eq(column).text().toLowerCase();

            return value.indexOf(inputContent) === -1;

        });

        // Clean previous no-result if exist

        $table.find('tbody .no-result').remove();

        // Show all rows, hide filtered ones (never do that outside of a demo ! xD)

        $rows.show();

        $filteredRows.hide();

        // Prepend no-result row if all rows are filtered

        if ($filteredRows.length === $rows.length) {

            $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="' + $table.find('.filters th').length + '">No result found</td></tr>'));

        }

    });
    document.getElementById('endDate_id').value = new Date().toDateInputValue();

    init();
    var $table2 = $('#table2');
    $(function () {
        
        invoiceList.getInvoiceListLength((err,res)=>{
            
            if(err!=null) console.error(res);
            else{ 
                //console.log("length Invoice list : " + hex2int(res));
                getAllInvoices().then(dat=>{
                    creditsLimitsdata=dat;
                    console.log(dat);
                    $table2.bootstrapTable({
                        data: dat
                    });
                });
                
            }
        })


        /*$('#creditLimiTable').bootstrapTable({
            data: creditsLimitsdata
        });*/

    }); 

});



/* end  nice table */



$('select').change(function () {

    if ($(this).children('option:first-child').is(':selected')) {

        $(this).addClass('placeholder');

    } else {

        $(this).removeClass('placeholder');

    }

});



/* data for drop down */



data = [

    {

        "make": "Gibson",

        "model": "Les Paul",

        "type": "Electric",

        "price": "$3,000",

        "image": "http://www.sweetwater.com/images/items/120/LPST5HTHDCH-medium.jpg?9782bd",

        "factor": "HSBC"

    },

    {

        "make": "Gibson",

        "model": "SG",

        "type": "Electric",

        "price": "$1,500",

        "image": "http://www.sweetwater.com/images/items/120/SGSEBCH-medium.jpg?e69cfe",

        "factor": "HSBC"

    },

    {

        "make": "Fender",

        "model": "Telecaster",

        "type": "Electric",

        "price": "$2,000",

        "image": "http://www.sweetwater.com/images/items/120/TelePLMPHB-medium.jpg?28e48b",

        "factor": "HSBC"

    },

    {

        "make": "Fender",

        "model": "Stratocaster",

        "type": "Electric",

        "price": "$2,000",

        "image": "http://www.sweetwater.com/images/items/120/StratAMM3SB2-medium.jpg?dfd0a9",

        "factor": "SG"

    },

    {

        "make": "Gretsch",

        "model": "White Falcon",

        "type": "Electric",

        "price": "$5,000",

        "image": "http://www.sweetwater.com/images/items/120/G613655GE-medium.jpg?9bfb0e",

        "factor": "HSBC"

    },

    {

        "make": "Paul Reed Smith",

        "model": "Custom 24",

        "type": "Electric",

        "price": "$5,000",

        "image": "http://www.sweetwater.com/images/items/120/HBII10BGWB-medium.jpg?982763",

        "factor": "SG"

    },

    {

        "make": "Gibson",

        "model": "Hummingbird",

        "type": "Acoustic",

        "price": "$2,500",

        "image": "http://www.sweetwater.com/images/items/120/SSHBHCNP-medium.jpg?11fbea",

        "factor": "HSBC"

    }

];

var sellersNames = "";
var buyerNames = "";
var factors = "";
var insurers = "";

for (var i=0;i<ACCOUNTSNAME.length;i++){
    sellersNames += "<option value='" + ACCOUNTSNAME[i].address + "'>" + ACCOUNTSNAME[i].name + "</option>";
    if (ACCOUNTSNAME[i].isFactor)
        factors += "<option value='" + ACCOUNTSNAME[i].address + "'>" + ACCOUNTSNAME[i].name + "</option>";

     if (ACCOUNTSNAME[i].isInsurer)
        insurers += "<option value='" + ACCOUNTSNAME[i].address + "'>" + ACCOUNTSNAME[i].name + "</option>";
    if(i!=0){
        buyerNames += "<option value='" + ACCOUNTSNAME[i].address + "'>" + ACCOUNTSNAME[i].name + "</option>";
    }
    

}

var currencies=""
for (var i=0;i<CURRENCIES.length; i++){
    tmp = CURRENCIES[i].value + " - " + CURRENCIES[i].symbol;
    currencies+= "<option value='" + CURRENCIES[i].id + "'>" + tmp + "</option>"
}


$(".filter-sellerName").append(sellersNames);

$(".filter-buyerName").append(buyerNames);

$(".filter-currentAccount").append(sellersNames);

$(".filter-factor").append(factors);

$(".filter-insurer").append(insurers);

$("#invoiceCurrency_id").append(currencies);

var products = "";

var makes = "";

var models = "";

var types = "";

var factors = "";



for (var i = 0; i < data.length; i++) {

    var make = data[i].make,

        model = data[i].model,

        type = data[i].type,

        factor = data[i].factor,

        price = data[i].price,

        rawPrice = price.replace("$", ""),

        rawPrice = parseInt(rawPrice.replace(",", "")),

        image = data[i].image;



    //create product cards

    products += "<div class='col-sm-4 product' data-make='" + make + "' data-model='" + model + "' data-type='" + type + "' data-price='" + rawPrice + "'><div class='product-inner text-center'><img src='" + image + "'><br />Make: " + make + "<br />Model: " + model + "<br />Type: " + type + "<br />Price: " + price + "</div></div>";



    //create dropdown of makes

    if (makes.indexOf("<option value='" + make + "'>" + make + "</option>") == -1) {

        makes += "<option value='" + make + "'>" + make + "</option>";

    }



    //create dropdown of models

    if (models.indexOf("<option value='" + model + "'>" + model + "</option>") == -1) {

        models += "<option value='" + model + "'>" + model + "</option>";

    }



    //create dropdown of types

    if (types.indexOf("<option value='" + type + "'>" + type + "</option>") == -1) {

        types += "<option value='" + type + "'>" + type + "</option>";

    }





    //create dropdown of factors

    if (factors.indexOf("<option value='" + factor + "'>" + factor + "</option>") == -1) {

        factors += "<option value='" + factor + "'>" + factor + "</option>";

    }

}



$("#products").html(products);

$(".filter-make").append(makes);

$(".filter-model").append(models);

$(".filter-type").append(types);

$(".filter-factor").append(factors);



var filtersObject = {};



//on filter change

$(".filter").on("change", function () {

    var filterName = $(this).data("filter"),

        filterVal = $(this).val();



    if (filterVal == "") {

        delete filtersObject[filterName];

    } else {

        filtersObject[filterName] = filterVal;

    }



    var filters = "";



    for (var key in filtersObject) {

        if (filtersObject.hasOwnProperty(key)) {

            filters += "[data-" + key + "='" + filtersObject[key] + "']";

        }

    }



    if (filters == "") {

        $(".product").show();

    } else {

        $(".product").hide();

        $(".product").hide().filter(filters).show();

    }

});



//on search form submit

$("#search-form").submit(function (e) {

    e.preventDefault();

    var query = $("#search-form input").val().toLowerCase();



    $(".product").hide();

    $(".product").each(function () {

        var make = $(this).data("make").toLowerCase(),

            model = $(this).data("model").toLowerCase(),

            type = $(this).data("type").toLowerCase();



        if (make.indexOf(query) > -1 || model.indexOf(query) > -1 || type.indexOf(query) > -1) {

            $(this).show();

        }

    });

});



/* end data for drop down */



/* partie à faire en Json!!! */



var $table = $('#table');

// var mydata =

//     [

//         {

//             "sellerName": 0,

//             "buyerName": "test0",

//             "RequestDate": "$0",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 1,

//             "buyerName": "test1",

//             "RequestDate": "$1",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 2,

//             "buyerName": "test2",

//             "RequestDate": "$2",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 3,

//             "buyerName": "test3",

//             "RequestDate": "$3",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 4,

//             "buyerName": "test4",

//             "RequestDate": "$4",

//             "factor": "Société Générale"

//         },

//         {

//             "sellerName": 5,

//             "buyerName": "test5",

//             "RequestDate": "$5",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 6,

//             "buyerName": "test6",

//             "RequestDate": "$6",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 7,

//             "buyerName": "test7",

//             "RequestDate": "$7",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 8,

//             "buyerName": "test8",

//             "RequestDate": "$8",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 9,

//             "buyerName": "test9",

//             "RequestDate": "$9",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 10,

//             "buyerName": "test10",

//             "RequestDate": "$10",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 11,

//             "buyerName": "test11",

//             "RequestDate": "$11",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 12,

//             "buyerName": "test12",

//             "RequestDate": "$12",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 13,

//             "buyerName": "test13",

//             "RequestDate": "$13",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 14,

//             "buyerName": "test14",

//             "RequestDate": "$14",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 15,

//             "buyerName": "test15",

//             "RequestDate": "$15",

//             "factor": "SG"

//         },

//         {

//             "sellerName": 16,

//             "buyerName": "test16",

//             "RequestDate": "$16",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 17,

//             "buyerName": "test17",

//             "RequestDate": "$17",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 18,

//             "buyerName": "test18",

//             "RequestDate": "$18",

//             "factor": "SG"

//         },

//         {

//             "sellerName": 19,

//             "buyerName": "test19",

//             "RequestDate": "$19",

//             "factor": "HSBC"

//         },

//         {

//             "sellerName": 20,

//             "buyerName": "test20",

//             "RequestDate": "$20",

//             "factor": "HSBC"

//         }

//     ];



// $(function () {

//     $('#table').bootstrapTable({

//         data: mydata

//     });

// });


/*  */

var $table = $('#table2');

// var invoiceDetaildata =

//     [

//         {
//             "sellerName": "Seller 1",
//             "buyerName": "Buyer 1",
//             "documentNumber": 1,
//             "statut": "Submit",
//             "documentDate": "01/01/2018",
//             "documentDueDate": "31/01/2018",
//             "documentType": "Invoice",
//             "documentCurrency": "EUR",
//             "totalValue": 100
//         },
//         {
//             "sellerName": "Seller 1",
//             "buyerName": "Buyer 2",
//             "documentNumber": 2,
//             "statut": "Submit",
//             "documentDate": "01/01/2018",
//             "documentDueDate": "31/01/2018",
//             "documentType": "Invoice",
//             "documentCurrency": "EUR",
//             "totalValue": 200
//         },
//         {
//             "sellerName": "Seller 1",
//             "buyerName": "Buyer 1",
//             "documentNumber": 3,
//             "statut": "Submit",
//             "documentDate": "01/01/2018",
//             "documentDueDate": "31/01/2018",
//             "documentType": "Invoice",
//             "documentCurrency": "EUR",
//             "totalValue": 100
//         },
//         {
//             "sellerName": "Seller 1",
//             "buyerName": "Buyer 2",
//             "documentNumber": 4,
//             "statut": "Submit",
//             "documentDate": "01/01/2018",
//             "documentDueDate": "31/01/2018",
//             "documentType": "Invoice",
//             "documentCurrency": "EUR",
//             "totalValue": 200
//         },
//         {
//             "sellerName": "Seller 1",
//             "buyerName": "Buyer 1",
//             "documentNumber": 5,
//             "statut": "Submit",
//             "documentDate": "01/01/2018",
//             "documentDueDate": "31/01/2018",
//             "documentType": "Invoice",
//             "documentCurrency": "EUR",
//             "totalValue": 100
//         },
//         {
//             "sellerName": "Seller 1",
//             "buyerName": "Buyer 2",
//             "documentNumber": 6,
//             "statut": "Submit",
//             "documentDate": "01/01/2018",
//             "documentDueDate": "31/01/2018",
//             "documentType": "Invoice",
//             "documentCurrency": "EUR",
//             "totalValue": 200
//         },
//         {
//             "sellerName": "Seller 1",
//             "buyerName": "Buyer 1",
//             "documentNumber": 7,
//             "statut": "Submit",
//             "documentDate": "01/01/2018",
//             "documentDueDate": "31/01/2018",
//             "documentType": "Invoice",
//             "documentCurrency": "EUR",
//             "totalValue": 100
//         },
//         {
//             "sellerName": "Seller 1",
//             "buyerName": "Buyer 2",
//             "documentNumber": 8,
//             "documentDate": "01/01/2018",
//             "documentDueDate": "31/01/2018",
//             "documentType": "Invoice",
//             "documentCurrency": "EUR",
//             "totalValue": 200
//         },
//         {
//             "sellerName": "Seller 1",
//             "buyerName": "Buyer 1",
//             "documentNumber": 9,
//             "documentDate": "01/01/2018",
//             "documentDueDate": "31/01/2018",
//             "documentType": "Invoice",
//             "documentCurrency": "EUR",
//             "totalValue": 100
//         },
//         {
//             "sellerName": "Seller 1",
//             "buyerName": "Buyer 2",
//             "documentNumber": 10,
//             "documentDate": "01/01/2018",
//             "documentDueDate": "31/01/2018",
//             "documentType": "Invoice",
//             "documentCurrency": "EUR",
//             "totalValue": 200
//         },
//         {
//             "sellerName": "Seller 1",
//             "buyerName": "Buyer 1",
//             "documentNumber": 11,
//             "documentDate": "01/01/2018",
//             "documentDueDate": "31/01/2018",
//             "documentType": "Invoice",
//             "documentCurrency": "EUR",
//             "totalValue": 100
//         },
//         {
//             "sellerName": "Seller 1",
//             "buyerName": "Buyer 2",
//             "documentNumber": 12,
//             "documentDate": "01/01/2018",
//             "documentDueDate": "31/01/2018",
//             "documentType": "Invoice",
//             "documentCurrency": "EUR",
//             "totalValue": 200
//         },
//         {
//             "sellerName": "Seller 1",
//             "buyerName": "Buyer 1",
//             "documentNumber": 13,
//             "documentDate": "01/01/2018",
//             "documentDueDate": "31/01/2018",
//             "documentType": "Invoice",
//             "documentCurrency": "EUR",
//             "totalValue": 100
//         },
//         {
//             "sellerName": "Seller 1",
//             "buyerName": "Buyer 2",
//             "documentNumber": 14,
//             "documentDate": "01/01/2018",
//             "documentDueDate": "31/01/2018",
//             "documentType": "Invoice",
//             "documentCurrency": "EUR",
//             "totalValue": 200
//         },
//         {
//             "sellerName": "Seller 1",
//             "buyerName": "Buyer 2",
//             "documentNumber": 15,
//             "documentDate": "01/01/2018",
//             "documentDueDate": "31/01/2018",
//             "documentType": "Invoice",
//             "documentCurrency": "EUR",
//             "totalValue": 200
//         },

//         {

//             "sellerName": 16,

//             "buyerName": "test16",

//             "RequestDate": "$16",

//             "invoiceCurrency": "HSBC",

//             "RequestDate2": "",

//             "limitRequired": ""

//         }

//     ];



// $(function () {

//     $('#table2').bootstrapTable({

//         data: invoiceDetaildata

//     });

// });

$(function () {
    $('#click').click(function (e) {
        var model = new Object();

        // Here you need to get the values using $('#id').val() and fill the model
        model.FirstName = "Rami";
        model.LastName = "Vemula";
        model.Email = "Email@E.com";

        $("#personsTmpl").tmpl(model).appendTo("#tableAttendees");
    });
});


// For tests jquery


/* to do!!

 

var fnf = document.getElementById("limitRequired_id");

fnf.addEventListener('keyup', function(evt){

    var n = parseInt(this.value.replace(/\D/g,''),10);

    fnf.value = n.toLocaleString();

}, false);

 

 

*/

//Blockchain Integration
/*var currentAccount="0x627306090abab3a6e1400e9345bc60c78a8bef57";
//unlockAccount(currentAccount,"test");
var matchingInvoiceList = new Contract();
var policyList = new Contract();
var invoiceFactory = new Contract();

function init(){
  // Init matching invoice list
    matchingInvoiceList.setAbi(Matching_Account_Invoice_List);
    matchingInvoiceList.at("0xf12b5dd4ead5f743c6baa640b0216200e89b60da");

  // Init Policy List
    policyList.setAbi(Policy_List);
    policyList.at("0x345ca3e014aaf5dca488057592ee47305d9b3e10");

  // Init invoice Factory
  invoiceFactory.setAbi(Invoice_Factory);
  invoiceFactory.at("0xf25186b5081ff5ce73482ad761db0eb0d25abfbf");
}*/


function addInvoice(contractInvoiceList,amount, currentAmount, currency, dueAt, sellerAddress, buyerAddress,matchingIndex,paymentInfo){
    contractInvoiceList.getInvoiceListLength(function(err,length){
        if (err != null) console.error(err);
        else{
            ret = contractInvoiceList.createInvoice(function(err,res){
                if (err != null) console.error(err);
                else{
                    ret=contractInvoiceList.getInvoiceAtIndex(length,function(err,res){
                        if (err != null) console.error(err);
                        else{
                            return res;
                        }
                    });
                    return ret;
                }
            });
            return ret;
        }            

    });
    
}
var invoiceListContract = new Contract();
var invoice = new Contract();
invoice.setAbi(Invoice_Contract);

function addInvoiceToBuyerSide(buyer, address){
    var invListContract = new Contract();
     matchingInvoiceList.addInvoiceListAt(buyer,function(err, res){
        if(err == null){
            matchingInvoiceList.getInvoiceListAt(buyer,function(err, res){
                if(err == null){
                    invListContract.setAbi(Invoice_List);
                    invListContract.at(hex2address(res));
                    invListContract.addInvoice(address,(err,res)=>{
                        if(err) console.error(err);
                        else{
                            //console.log("Invoice successfully added");
                        }
                    });
                }
            });
        }else{
            matchingInvoiceList.getInvoiceListAt(buyer,function(err, res){
                if(err == null){
                    invListContract.setAbi(Invoice_List);
                    invListContract.at(hex2address(res));
                    invListContract.addInvoice(address,(err,res)=>{
                        if(err) console.error(err);
                        else{
                            //console.log("Invoice successfully added");
                        }
                    })
                }
            });
        }
    });
}

async function addInvoiceFromData(){
    var seller = document.getElementById("seller_name_id").value;
    var currency = int2hex(Number(document.getElementById("invoiceCurrency_id").value));
    var buyer = document.getElementById("buyer_name_id").value;
    var factor = document.getElementById("factor_id").value;
    var insurer = document.getElementById("insurer_id").value;
    var amount = int2hex(Number(document.getElementById("limitRequired_id").value));
    var date = new Date(document.getElementById("endDate_id").value).getTime();
    //console.log(amount,currency,date,buyer,seller,insurer);

    var result;
     matchingInvoiceList.addInvoiceList(function(err, res){
        if(err == null){
            //console.log("res addInvoiceList:" + res);  
            matchingInvoiceList.getInvoiceList(function(err, res){
                if(err == null){
                    //console.log("InvoiceList address:" + hex2address(res));    
                    
                    invoiceListContract.setAbi(Invoice_List);
                    invoiceListContract.at(hex2address(res));
                    invoiceListContract.createInvoice(
                        amount,
                        currency,
                        date,
                        seller,
                        buyer,
                        111,
                        function(err,res){
                            if (err != null) console.error("newInvoice err : " + err);
                            else{
                                console.log("Invoice successfully created");
                                refreshTable();
                                invoiceListContract.getInvoiceListLength(function(err,res){
                                    if (err != null) console.error ("getInvoiceListLength err: " + err);
                                    else{
                                        console.log("length : " + parseInt(res,16));
                                        invoiceListContract.getInvoiceAtIndex(int2hex(parseInt(res,16)-1),function(err,res){
                                            if (err != null) console.log("getInvoiceAtIndex err : " + err);
                                            else{
                                                console.log("invoice address: " + hex2address(res));
                                                invoice.at(hex2address(res));
                                                addInvoiceToBuyerSide(buyer,res);
                                            }
                                        });
                                    }
                                });
                            }
                        })
                    
                }     
                    
                else{
                    console.error("getInvoiceList err :" + err);
                    
                }
            });     
        }
        else{
            console.log("InvoiceList already exists");
            matchingInvoiceList.getInvoiceList(function(err, res){
                if(err == null){
                    console.log("InvoiceList address:" + hex2address(res));    
                    
                    invoiceListContract.setAbi(Invoice_List);
                    invoiceListContract.at(hex2address(res));
                    invoiceListContract.createInvoice(
                        amount,
                        currency,
                        date,
                        seller,
                        buyer,
                        116,function(err,res){
                            if (err != null) console.error("newInvoice err : " + err);
                            else{
                                console.log("Invoice successfully created");
                                refreshTable();
                                invoiceListContract.getInvoiceListLength(function(err,res){
                                    if (err != null) console.error ("getInvoiceListLength err: " + err);
                                    else{
                                        console.log("length : " + parseInt(res,16));
                                        invoiceListContract.getInvoiceAtIndex(int2hex(parseInt(res,16)-1),function(err,res){
                                            if (err != null) console.log("getInvoiceAtIndex err : " + err);
                                            else{
                                                console.log("invoice address: " + hex2address(res));
                                                invoice.at(hex2address(res));
                                                addInvoiceToBuyerSide(buyer,res);
                                                console.log(buyer,res); 
                                                invoice.getAmount(function(err,res){
                                                    if (err != null) console.log("getAmount err : " + err);
                                                    else{
                                                         
                                                        getInvoiceInfosAt(invoice.address).then(data=>{result=data})

                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        })
                    
                }     
                    
                else{
                    console.error("getInvoiceList err :" + err);
                    
                }
            });    
        }
    }); 

}

function testInvoice(){
    //policyList.createPolicy(111,112,113,114,115,(err,res)=>{if (err!=null)console.log(err)})
    invoiceList.getInvoiceListLength((err,res)=>{
        if(err!=null) console.error(res);
        else{
            console.log("length Policy list : " + hex2int(res));
            getInvoiceList().then(data=>{creditsLimitsdata=data;});
            
        }
    })
}

function refreshTable(){
    var $table2 = $('#table2');      

    getAllInvoices().then(dat=>{            
        creditsLimitsdata=dat;
        $table2.bootstrapTable('load',{
            data: dat
        });
    });
            
   
}


async function getAllInvoices(){
    list=[];
    var addressInvoiceList;
    var invoiceListLength;
    var invoiceAddressList=[];

    promise= new Promise((resolve,reject)=>{
        matchingInvoiceList.getInvoiceList(function(err,res1){
            if(err != null)reject(err);
            else{
                resolve(hex2address(res1))
            }
        })
    });

    await promise.then(data=>{
        addressInvoiceList = data;
    });
    invoiceList.at(addressInvoiceList);

    promise= new Promise((resolve,reject)=>{
        invoiceList.getInvoiceListLength(function(err,res){
            if(err != null)reject(err);
            else{
                resolve(hex2int(res));
            }
        })          
    });

    await promise.then(data=>{
        invoiceListLength = data;
        console.log("Invoice List Length : " + data);
    });

    promiseList=[];
    for (var i=0; i < invoiceListLength;i++){
        promiseList.push(new Promise((resolve,reject)=>{
            invoiceList.getInvoiceAtIndex(int2hex(i),function(err,res){
                if(err != null)reject(err);
                else{
                   resolve(hex2address(res)) 
                }
            })
        }));
    }

    await Promise.all(promiseList).then(data=>{
        invoiceAddressList=data;
    })

    promiseList=[];
    
    for(var i=0;i<invoiceAddressList.length;i++){
        promiseList.push(new Promise((resolve,reject)=>{            
            getInvoiceInfosAt(hex2address(invoiceAddressList[i])).then(data=>{
                resolve(data);
            })
        }))
    }

    await Promise.all(promiseList).then(data=>{
        list=data;
    })

    return list;

}

function getInvoiceAtIndex(invoiceIndex){
    matchingInvoiceList.getInvoiceList(function(err,res1){
        if(err != null)console.error(err);
        else{
            console.log("getInvoiceList : " + hex2address(res1));
            invoiceList.at(hex2address(res1));
            invoiceList.getInvoiceListLength(function(err,res2){
                if(err != null)console.error(err);
                else{
                    if (invoiceIndex < hex2int(res2))
                    invoiceList.getInvoiceAtIndex(int2hex(invoiceIndex),function(err,res3){
                        if(err != null)console.error(err);
                        else{
                            console.log("getInvoiceAtIndex : " + hex2address(res3) );
                            invoice.at(hex2address(res3));
                            var invoiceData = new Object();

                            invoice.getAmount(function(err,res4){
                                if(err != null)console.error(err);
                                else{
                                    console.log("getAmount");
                                    invoiceData.amount = parseInt(res4,16);
                                    //document.getElementById('divAmount').innerHTML(invoiceData.amount);
                                    console.log("Amount : " + hex2int(res4) );
                                }
                            });
                            getInvoiceInfosAt(hex2address(res3)).then(data=>{
                                console.log(data);
                            })
                        }
                    });
                    else
                        console.log("too big");
                }
            });
        }
    });
}

function handleSellerChange(){

}