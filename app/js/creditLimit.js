$('button').on('click', function () {

    $('p').css('opacity', 0);

});

/*  request limits table */

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
    if (document.getElementById('endDate_id')!=null)
        document.getElementById('endDate_id').value = new Date().toDateInputValue();

    init();
    refreshPage();
    var $table = $('#creditLimiTable');
    $(function () {
        
        policyList.getPoliciyListLength((err,res)=>{
            
            if(err!=null) console.error(res);
            else{ 
                console.log("length Policy list : " + hex2int(res));
                getAllPolicies().then(dat=>{
                    creditsLimitsdata=dat;
                    console.log(dat);
                    $table.bootstrapTable({
                        data: dat.reverse()
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


/* partie à faire  avec BlockChain!!! */

/*  */



var creditsLimitsdata =

    [

        {

            "sellerName": "Seller 1",

            "buyerName": "test0",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": 1000,

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test1",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": 35000,

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test2",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test3",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": 40000,

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 2",

            "buyerName": "test4",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 2",

            "buyerName": "test5",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test6",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test7",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test8",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test9",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test10",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test11",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test12",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test13",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test14",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test15",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test16",

            "invoiceCurrency": "EUR",

            "RequestDate": "28/12/2017",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test17",

            "invoiceCurrency": "EUR",

            "RequestDate": "",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test18",

            "invoiceCurrency": "EUR",

            "RequestDate": "",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test19",

            "RequestDate": "$19",

            "invoiceCurrency": "EUR",

            "RequestDate": "",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        },

        {

            "sellerName": "Seller 1",

            "buyerName": "test20",

            "invoiceCurrency": "EUR",

            "RequestDate": "",

            "limitRequired": "",

            "factor": "HSBC",

            "insurer": "EULER Hermes"

        }

    ];




/* drop down for creditsLimitsdata */


var products = "";
var sellersNames = "";
var buyersNames = "";
var factors = "";
var insurers = "";

var accountChoices="";

for (var i=0;i<ACCOUNTSNAME.length;i++){

    accountChoices +="<option value='" + ACCOUNTSNAME[i].address + "'>" + ACCOUNTSNAME[i].name + "</option>";
    if (currentAccount == ACCOUNTSNAME[i].address){
        sellersNames += "<option value='" + ACCOUNTSNAME[i].address + "'>" + ACCOUNTSNAME[i].name + "</option>";
    }
    else{
        buyersNames += "<option value='" + ACCOUNTSNAME[i].address + "'>" + ACCOUNTSNAME[i].name + "</option>";
    }
    
    if (ACCOUNTSNAME[i].isFactor)
        factors += "<option value='" + ACCOUNTSNAME[i].address + "'>" + ACCOUNTSNAME[i].name + "</option>";

    if (ACCOUNTSNAME[i].isInsurer)
        insurers += "<option value='" + ACCOUNTSNAME[i].address + "'>" + ACCOUNTSNAME[i].name + "</option>";
    

}

var currencies=""
for (var i=0;i<CURRENCIES.length; i++){
    tmp = CURRENCIES[i].value + " - " + CURRENCIES[i].symbol;
    currencies+= "<option value='" + CURRENCIES[i].id + "'>" + tmp + "</option>"
}

$("#products").html(products);

$(".filter-sellerName").append(sellersNames);

$(".filter-buyerName").append(buyersNames);

$(".filter-currentAccount").append(accountChoices);

$(".filter-factor").append(factors);

$(".filter-insurer").append(insurers);

$("#invoiceCurrency_id").append(currencies);


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


/* end */

/* getLimits BlockChain */
/*var fnf = document.getElementById("addPolicy");

fnf.addEventListener('onclick', function (evt) {
    $('#creditLimiTable').bootstrapTable({

        data: creditsLimitsdata

    });

    addPolicy(); 

    testPolicy();


}, false);*/


function stateFormatter(value, row, index) {

    /*
    if (index === 2) {
        return {
            disabled: true
        };
    }
    if (index === 0) {
        return {
            disabled: true,
            checked: true
        }
    }
    */
    return value;
}

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

function addPolicy(){
    console.log("addPolicy");
    var factor = document.getElementById("factor_id").value;
    var buyer = document.getElementById("buyer_name_id").value;
    var insurer = document.getElementById("insurer_id").value;
    var amount = document.getElementById("limitRequired_id").value;
    var date = new Date(document.getElementById("endDate_id").value).getTime();
    if (!factor){
        factor=hex2address(int2hex(0));
    }
    console.log(amount,date,buyer,factor,insurer);

    return new Promise((resolve,reject)=>{
        policyList.createPolicy(int2hex(Number(amount)),date,buyer,currentAccount,factor,insurer,(err,res)=>{
            if (err!=null)reject("createPolicy err : " + err);
            else{
                resolve();
            }
        });
    }); 
}

function testPolicy(){
    console.log("testPolicy");
    //policyList.createPolicy(111,112,113,114,115,(err,res)=>{if (err!=null)console.log(err)})
    policyList.getPoliciyListLength((err,res)=>{
        if(err!=null) console.error(err);
        else{
            console.log("length Policy list : " + hex2int(res));
            getAllPolicies().then(data=>{creditsLimitsdata=data;});
            
        }
    })
}

function refreshTable(){
    //console.log("refreshTable");
    var $table = $('#creditLimiTable');
    policyList.getPoliciyListLength((err,res)=>{
        if(err!=null) console.error(err);
        else{   

            getAllPolicies().then(dat=>{
                //console.log(dat)
                creditsLimitsdata=dat;
                $table.bootstrapTable('load',{
                    data: dat.reverse()
                });
            });
            
        }
    })
}

function refreshPage(){
  setTimeout(function() {
    refreshTable();
    refreshPage();
}, 5000);
}

// function handleSellersChange(){
//     var buyersNames="";
//     for (var i=0;i<ACCOUNTSNAME.length;i++){
//         sellersNames += "<option value='" + ACCOUNTSNAME[i].address + "'>" + ACCOUNTSNAME[i].name + "</option>";
//         if (ACCOUNTSNAME[i].isFactor)
//             factors += "<option value='" + ACCOUNTSNAME[i].address + "'>" + ACCOUNTSNAME[i].name + "</option>";

//          if (ACCOUNTSNAME[i].isInsurer)
//             insurers += "<option value='" + ACCOUNTSNAME[i].address + "'>" + ACCOUNTSNAME[i].name + "</option>";
//         if(ACCOUNTSNAME[i].address!=document.getElementById("seller_name_id").value){
//             buyersNames += "<option value='" + ACCOUNTSNAME[i].address + "'>" + ACCOUNTSNAME[i].name + "</option>";
//         }

//     }
//     $(".filter-buyerName").empty().append(buyersNames);

// }