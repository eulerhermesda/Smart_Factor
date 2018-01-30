$('button').on('click', function() {

                $('p').css('opacity', 0);

});

 

/*  nice table */

$(document).ready(function(){

    $('.filterable .btn-filter').click(function(){

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

 

    $('.filterable .filters input').keyup(function(e){

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

        var $filteredRows = $rows.filter(function(){

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

            $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="'+ $table.find('.filters th').length +'">No result found</td></tr>'));

        }

    });

});

 

/* end  nice table */

 

 

 

 

    $('select').change(function() {

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

                               "factor" : "HSBC"

                },

                {

                               "make": "Gibson",

                               "model": "SG",

                               "type": "Electric",

                               "price": "$1,500",

                               "image": "http://www.sweetwater.com/images/items/120/SGSEBCH-medium.jpg?e69cfe",

                               "factor" : "HSBC"

                },

                {

                               "make": "Fender",

                               "model": "Telecaster",

                               "type": "Electric",

                               "price": "$2,000",

                               "image": "http://www.sweetwater.com/images/items/120/TelePLMPHB-medium.jpg?28e48b",

                               "factor" : "HSBC"

                },

                {

                               "make": "Fender",

                               "model": "Stratocaster",

                               "type": "Electric",

                               "price": "$2,000",

                               "image": "http://www.sweetwater.com/images/items/120/StratAMM3SB2-medium.jpg?dfd0a9",

                               "factor" : "SG"

                },

                {

                               "make": "Gretsch",

                               "model": "White Falcon",

                               "type": "Electric",

                               "price": "$5,000",

                               "image": "http://www.sweetwater.com/images/items/120/G613655GE-medium.jpg?9bfb0e",

                               "factor" : "HSBC"

                },

                {

                               "make": "Paul Reed Smith",

                               "model": "Custom 24",

                               "type": "Electric",

                               "price": "$5,000",

                               "image": "http://www.sweetwater.com/images/items/120/HBII10BGWB-medium.jpg?982763",

                               "factor" : "SG"

                },

                {

                               "make": "Gibson",

                               "model": "Hummingbird",

                               "type": "Acoustic",

                               "price": "$2,500",

                               "image": "http://www.sweetwater.com/images/items/120/SSHBHCNP-medium.jpg?11fbea",

                               "factor" : "HSBC"

                }

];

 

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

                               rawPrice = price.replace("$",""),

                               rawPrice = parseInt(rawPrice.replace(",","")),

                               image = data[i].image;

               

                //create product cards

                products += "<div class='col-sm-4 product' data-make='"+make+"' data-model='"+model+"' data-type='"+type+"' data-price='"+rawPrice+"'><div class='product-inner text-center'><img src='"+image+"'><br />Make: "+make +"<br />Model: "+model+"<br />Type: "+type+"<br />Price: "+price+"</div></div>";

               

                //create dropdown of makes

                if (makes.indexOf("<option value='"+make+"'>"+make+"</option>") == -1) {

                               makes += "<option value='"+make+"'>"+make+"</option>";

                }

               

                //create dropdown of models

                if (models.indexOf("<option value='"+model+"'>"+model+"</option>") == -1) {

                               models += "<option value='"+model+"'>"+model+"</option>";

                }

               

                //create dropdown of types

                if (types.indexOf("<option value='"+type+"'>"+type+"</option>") == -1) {

                               types += "<option value='"+type+"'>"+type+"</option>";

                }

               

               

                //create dropdown of factors

                if (factors.indexOf("<option value='"+factor+"'>"+factor+"</option>") == -1) {

                               factors += "<option value='"+factor+"'>"+factor+"</option>";

                }             

}

 

$("#products").html(products);

$(".filter-make").append(makes);

$(".filter-model").append(models);

$(".filter-type").append(types);

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

 

//on search form submit

$("#search-form").submit(function(e) {

                e.preventDefault();

                var query = $("#search-form input").val().toLowerCase();

 

                $(".product").hide();

                $(".product").each(function() {

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

    var mydata =

[

    {

        "CompanyTradingNameSeller": 0,

        "CompanyTradingName": "test0",

        "RequestDate": "$0",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 1,

        "CompanyTradingName": "test1",

        "RequestDate": "$1",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 2,

        "CompanyTradingName": "test2",

        "RequestDate": "$2",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 3,

        "CompanyTradingName": "test3",

        "RequestDate": "$3",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 4,

        "CompanyTradingName": "test4",

        "RequestDate": "$4",

                               "factor" : "Société Générale"

    },

    {

        "CompanyTradingNameSeller": 5,

        "CompanyTradingName": "test5",

        "RequestDate": "$5",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 6,

        "CompanyTradingName": "test6",

        "RequestDate": "$6",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 7,

        "CompanyTradingName": "test7",

        "RequestDate": "$7",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 8,

        "CompanyTradingName": "test8",

        "RequestDate": "$8",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 9,

        "CompanyTradingName": "test9",

        "RequestDate": "$9",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 10,

        "CompanyTradingName": "test10",

        "RequestDate": "$10",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 11,

        "CompanyTradingName": "test11",

        "RequestDate": "$11",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 12,

        "CompanyTradingName": "test12",

        "RequestDate": "$12",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 13,

        "CompanyTradingName": "test13",

        "RequestDate": "$13",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 14,

        "CompanyTradingName": "test14",

        "RequestDate": "$14",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 15,

        "CompanyTradingName": "test15",

        "RequestDate": "$15",

                               "factor" : "SG"

    },

    {

        "CompanyTradingNameSeller": 16,

        "CompanyTradingName": "test16",

        "RequestDate": "$16",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 17,

        "CompanyTradingName": "test17",

        "RequestDate": "$17",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 18,

        "CompanyTradingName": "test18",

        "RequestDate": "$18",

                               "factor" : "SG"

    },

    {

        "CompanyTradingNameSeller": 19,

        "CompanyTradingName": "test19",

        "RequestDate": "$19",

                               "factor" : "HSBC"

    },

    {

        "CompanyTradingNameSeller": 20,

        "CompanyTradingName": "test20",

        "RequestDate": "$20",

                               "factor" : "HSBC"

    }

];

 

$(function () {

    $('#table').bootstrapTable({

        data: mydata

    });

});

 

 

 

/*  */

var $table = $('#table2');

    var creditsLimitsdata =

[

    {

        "CompanyTradingNameSeller":256,

        "CompanyTradingName": "test0",

        "RequestDate": "28/12/2017",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 1,

        "CompanyTradingName": "test1",

        "RequestDate": "$1",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 2,

        "CompanyTradingName": "test2",

        "RequestDate": "$2",

                               "invoiceCurrency" : "HSBC",

                                "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 3,

        "CompanyTradingName": "test3",

        "RequestDate": "$3",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 4,

        "CompanyTradingName": "test4",

        "RequestDate": "$4",

                               "invoiceCurrency" : "Société Générale",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 5,

        "CompanyTradingName": "test5",

        "RequestDate": "$5",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 6,

        "CompanyTradingName": "test6",

        "RequestDate": "$6",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 7,

        "CompanyTradingName": "test7",

        "RequestDate": "$7",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 8,

        "CompanyTradingName": "test8",

        "RequestDate": "$8",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 9,

        "CompanyTradingName": "test9",

        "RequestDate": "$9",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 10,

        "CompanyTradingName": "test10",

        "RequestDate": "$10",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 11,

        "CompanyTradingName": "test11",

        "RequestDate": "$11",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 12,

        "CompanyTradingName": "test12",

        "RequestDate": "$12",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 13,

        "CompanyTradingName": "test13",

        "RequestDate": "$13",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 14,

        "CompanyTradingName": "test14",

        "RequestDate": "$14",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 15,

        "CompanyTradingName": "test15",

        "RequestDate": "$15",

                               "invoiceCurrency" : "SG",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 16,

        "CompanyTradingName": "test16",

        "RequestDate": "$16",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 17,

        "CompanyTradingName": "test17",

        "RequestDate": "$17",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 18,

        "CompanyTradingName": "test18",

        "RequestDate": "$18",

                               "invoiceCurrency" : "SG",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 19,

        "CompanyTradingName": "test19",

        "RequestDate": "$19",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    },

    {

        "CompanyTradingNameSeller": 20,

        "CompanyTradingName": "test20",

        "RequestDate": "$20",

                               "invoiceCurrency" : "HSBC",

                               "RequestDate2" : "",

                               "limitRequired" : ""

    }

];

 

$(function () {

    $('#table2').bootstrapTable({

        data: creditsLimitsdata

    });

});

 
/* to do!!

 

var fnf = document.getElementById("limitRequired_id");

fnf.addEventListener('keyup', function(evt){

    var n = parseInt(this.value.replace(/\D/g,''),10);

    fnf.value = n.toLocaleString();

}, false);

 

 

*/