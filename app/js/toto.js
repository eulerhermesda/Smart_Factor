/* partie à faire en Json!!! */

/*  */

var $table = $('#creditLimiTable');

    var creditsLimitsdata =

[

    {

        "CompanyTradingNameSeller":"Seller 1",

        "CompanyTradingName": "test0",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "28/12/2017",

        "limitRequired" : 1000,

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test1",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "28/12/2017",

        "limitRequired" : 35000,

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test2",

        "invoiceCurrency" : "EUR",

         "RequestDate" : "28/12/2017",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test3",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "28/12/2017",

        "limitRequired" : 40000,

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 2",

        "CompanyTradingName": "test4",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "28/12/2017",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 2",

        "CompanyTradingName": "test5",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "28/12/2017",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test6",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "28/12/2017",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test7",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "28/12/2017",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test8",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "28/12/2017",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test9",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "28/12/2017",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test10",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "28/12/2017",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test11",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "28/12/2017",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test12",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "28/12/2017",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test13",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "28/12/2017",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test14",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "28/12/2017",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test15",

        "invoiceCurrency" : "SG",

        "RequestDate" : "28/12/2017",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test16",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "28/12/2017",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test17",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test18",

        "invoiceCurrency" : "SG",

        "RequestDate" : "",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test19",

        "RequestDate": "$19",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "",

        "limitRequired" : "",

        "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": "Seller 1",

        "CompanyTradingName": "test20",

        "invoiceCurrency" : "EUR",

        "RequestDate" : "",

        "limitRequired" : "",

        "factor" : "HSBC"

    }

];


$(function () {

    $('#creditLimiTable').bootstrapTable({

        data: creditsLimitsdata

    });

});



/* drop down for creditsLimitsdata */


var products = "";

var CompanyTradingNameSellers = "";

var CompanyTradingNames = "";

var factors = "";


for (var i = 0; i < creditsLimitsdata.length; i++) {

                var CompanyTradingNameSeller = creditsLimitsdata[i].CompanyTradingNameSeller,

                               CompanyTradingName = creditsLimitsdata[i].CompanyTradingName,

                               type = creditsLimitsdata[i].type,

                               factor = creditsLimitsdata[i].factor,

                               price = creditsLimitsdata[i].price,

                               rawPrice = price.replace("$",""),

                               rawPrice = parseInt(rawPrice.replace(",","")),

                               image = creditsLimitsdata[i].image;

               

                //create product cards

                products += "<div class='col-sm-4 product' data-CompanyTradingNameSeller='"+CompanyTradingNameSeller+"' data-CompanyTradingName='"+CompanyTradingName+"' data-type='"+type+"' data-price='"+rawPrice+"'><div class='product-inner text-center'><img src='"+image+"'><br />CompanyTradingNameSeller: "+CompanyTradingNameSeller +"<br />CompanyTradingName: "+CompanyTradingName+"<br />Type: "+type+"<br />Price: "+price+"</div></div>";

               

                //create dropdown of CompanyTradingNameSellers

                if (CompanyTradingNameSellers.indexOf("<option value='"+CompanyTradingNameSeller+"'>"+CompanyTradingNameSeller+"</option>") == -1) {

                               CompanyTradingNameSellers += "<option value='"+CompanyTradingNameSeller+"'>"+CompanyTradingNameSeller+"</option>";

                }

               

                //create dropdown of CompanyTradingNames

                if (CompanyTradingNames.indexOf("<option value='"+CompanyTradingName+"'>"+CompanyTradingName+"</option>") == -1) {

                               CompanyTradingNames += "<option value='"+CompanyTradingName+"'>"+CompanyTradingName+"</option>";

                }



                //create dropdown of factors

                if (factors.indexOf("<option value='"+factor+"'>"+factor+"</option>") == -1) {

                               factors += "<option value='"+factor+"'>"+factor+"</option>";

                }             

}

 

$("#products").html(products);

$(".filter-CompanyTradingNameSeller").append(CompanyTradingNameSellers);

$(".filter-CompanyTradingName").append(CompanyTradingNames);

$(".filter-factor").append(factors);

 

var filtersObject = {};

//on filter change

$(".filter").on("change",function() {

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

                                               filters += "[data-"+key+"='"+filtersObject[key]+"']";

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



 
/* to do!!

 

var fnf = document.getElementById("limitRequired_id");

fnf.addEventListener('keyup', function(evt){

    var n = parseInt(this.value.replace(/\D/g,''),10);

    fnf.value = n.toLocaleString();

}, false);

*/