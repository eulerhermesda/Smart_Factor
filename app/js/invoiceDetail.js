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
    //document.getElementById('endDate_id').value = new Date().toDateInputValue();
    init();
    var $table2 = $('#table2');
    var tmpDat = new Object();
    $table2.bootstrapTable({
        data: tmpDat
    })
    refreshPage();
    
    
    // $(function () {
        
    //     invoiceList.getInvoiceListLength((err,res)=>{
            
    //         if(err!=null) console.error("getInvoiceListLength err: " + res);
    //         else{ 
    //             //console.log("length Invoice list : " + hex2int(res));
    //             getAllInvoices().then(dat=>{
    //                 creditsLimitsdata=dat;
    //                 for (var i=0;i<dat.length;i++){
    //                      var newColHtml = '<div class="btn-group pull-right">'+
    //                         '<button id="bValid" type="button" class="btn btn-sm btn-default" onclick="validateInvoice(this,\''+dat[i].address+'\');">' + 
    //                         '<span class="glyphicon glyphicon-ok" > </span>'+
    //                         '</button>'+
    //                         '<button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="paidInvoice(this,\''+dat[i].address+'\',\''+dat[i].buyer+'\',\''+dat[i].seller+'\');">' +
    //                         '<span class="glyphicon glyphicon-usd" > </span>'+
    //                         '</button>';
    //                     dat[i].newColHtml=newColHtml;
    //                 }

                    
    //                 $table2.bootstrapTable({
    //                     data: dat.reverse()
    //                 });
    //             });
                
    //         }
    //     })


    //     /*$('#creditLimiTable').bootstrapTable({
    //         data: creditsLimitsdata
    //     });*/

    // }); 

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

        "factor": "HSBC"

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

        "factor": "HSBC"

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

// var products = "";

// var makes = "";

// var models = "";

// var types = "";

// var factors = "";



// for (var i = 0; i < data.length; i++) {

//     var make = data[i].make,

//         model = data[i].model,

//         type = data[i].type,

//         factor = data[i].factor,

//         price = data[i].price,

//         rawPrice = price.replace("$", ""),

//         rawPrice = parseInt(rawPrice.replace(",", "")),

//         image = data[i].image;



//     //create product cards

//     products += "<div class='col-sm-4 product' data-make='" + make + "' data-model='" + model + "' data-type='" + type + "' data-price='" + rawPrice + "'><div class='product-inner text-center'><img src='" + image + "'><br />Make: " + make + "<br />Model: " + model + "<br />Type: " + type + "<br />Price: " + price + "</div></div>";



//     //create dropdown of makes

//     if (makes.indexOf("<option value='" + make + "'>" + make + "</option>") == -1) {

//         makes += "<option value='" + make + "'>" + make + "</option>";

//     }



//     //create dropdown of models

//     if (models.indexOf("<option value='" + model + "'>" + model + "</option>") == -1) {

//         models += "<option value='" + model + "'>" + model + "</option>";

//     }



//     //create dropdown of types

//     if (types.indexOf("<option value='" + type + "'>" + type + "</option>") == -1) {

//         types += "<option value='" + type + "'>" + type + "</option>";

//     }





//     //create dropdown of factors

//     if (factors.indexOf("<option value='" + factor + "'>" + factor + "</option>") == -1) {

//         factors += "<option value='" + factor + "'>" + factor + "</option>";

//     }

// }



// $("#products").html(products);

// $(".filter-make").append(makes);

// $(".filter-model").append(models);

// $(".filter-type").append(types);

// $(".filter-factor").append(factors);



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



var $table = $('#table2');


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
             
            matchingInvoiceList.getInvoiceList(function(err, res){
                if(err == null){
                    console.log("res addInvoiceList OK getInvoiceList:" + res); 
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
                            if (err != null) console.error("createInvoice err : " + err);
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
                                                if(factor != null){
                                                    invoice.setFactorAddress(factor,(err,res)=>{
                                                        if (err) console.log("setFactorAddress err" + err);
                                                        else{
                                                            console.log("Factor added to address");
                                                            invoice.getFactor((err,res)=>{
                                                                if (err) console.error("getFactor err : "+ err);
                                                                else
                                                                    console.log("Factor : " + hex2address(res));
                                                            })
                                                        }
                                                    })
                                                }
                                                addInvoiceToBuyerSide(buyer,res);
                                                addInvoiceToBuyerSide(factor,res);
                                                addInvoiceToBuyerSide(insurer,res);
                                                console.log("trying to findPolicy : ", buyer, seller);
                                                policyList.findPolicy(buyer,seller,(err,res)=>{
                                                    if (err) console.error("findPolicy err : " + err);
                                                    else{
                                                           var actualPolicy = new Contract()
                                                         actualPolicy.setAbi(Policy_Contract);
                                                         actualPolicy.at(hex2address(res));
                                                         actualPolicy.addCurrentAmount(int2hex(amount),(err,res)=>{
                                                             if (err) console.error("addCurrentAmount : " + err);
                                                             else{
                                                                console.log("amount successfully added")
                                                            }
                                                        })
                                                    }
                                                })
                                                
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
                    if(hex2address(res) == "0x0000000000000000000000000000000000000000"){
                        console.log("invoiceList address null");
                        invoiceListContract = invoiceList;
                    }
                    invoiceListContract.createInvoice(
                        amount,
                        currency,
                        date,
                        seller,
                        buyer,
                        116,function(err,res){
                            if (err != null) console.error("createInvoice err : " + err);
                            else{
                                console.log("Invoice successfully created");
                                refreshTable();
                                invoiceListContract.getInvoiceListLength(function(err,res){
                                    if (err != null) console.error ("getInvoiceListLength err: " + err);
                                    else{
                                        console.log("length : " + parseInt(res,16));
                                        invoiceListContract.getInvoiceAtIndex(int2hex(parseInt(res,16)-1),function(err,res){
                                            if (err != null) console.error("getInvoiceAtIndex err : " + err);
                                            else{
                                                console.log("invoice address: " + hex2address(res));
                                                invoice.at(hex2address(res));
                                                if(factor != null){
                                                    invoice.setFactorAddress(factor,(err,res)=>{
                                                        if (err) console.log("setFactorAddress err" + err);
                                                        else{
                                                            console.log("Factor added to address");
                                                            invoice.getFactor((err,res)=>{
                                                                if (err) console.error("getFactor err : "+ err);
                                                                else
                                                                    console.log("Factor : " + hex2address(res));
                                                            })
                                                        }
                                                    })
                                                }
                                                addInvoiceToBuyerSide(buyer,res);
                                                addInvoiceToBuyerSide(factor,res);
                                                addInvoiceToBuyerSide(insurer,res);
                                                //console.log(buyer,res); 
                                                policyList.findPolicy(buyer,seller,(err,res)=>{
                                                    if (err) console.error("findPolicy err : " + err);
                                                    else{
                                                        var actualPolicy = new Contract()
                                                        actualPolicy.setAbi(Policy_Contract);
                                                        actualPolicy.at(hex2address(res));
                                                        actualPolicy.addCurrentAmount(int2hex(amount),(err,res)=>{
                                                            if (err) console.error("addCurrentAmount : " + err);
                                                            else{
                                                                console.log("amount successfully added")
                                                            }
                                                        })
                                                    }
                                                })                                                
                                                

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
        //console.log(dat);         
        creditsLimitsdata=dat;
        for (var i=0;i<dat.length;i++){
            var newColHtml = '<div class="btn-group pull-right">'+
                        '<button id="bValid" type="button" class="btn btn-sm btn-default" onclick="validateInvoice(this,\''+dat[i].address+'\');">' + 
                        '<span >Accept </span>'+
                        '</button>'+
                        '<button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="paidInvoice(this,\''+dat[i].address+'\',\''+dat[i].buyer+'\',\''+dat[i].seller+'\');">' +
                        '<span  > Declare paid </span>'+
                        '</button>';
            dat[i].newColHtml=newColHtml;
        }

        $table2.bootstrapTable('load',{
            data: dat.reverse()
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
        //console.log("Invoice List : " + data)
        addressInvoiceList = data;
    });
    if(hex2address(addressInvoiceList) != "0x0000000000000000000000000000000000000000"){
        invoiceList.at(addressInvoiceList);
    }
    else{
        invoiceList.at(addressesFromJson.addressInvoiceList);
    }

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
//        console.log("Invoice List Length : " + data);
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

            if(hex2address(res1) != "0x0000000000000000000000000000000000000000"){
                invoiceList.at(res1);
            }
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

function validateInvoice(but,address){
    console.log("validateInvoice");
    var invoice = new Contract();
    invoice.setAbi(Invoice_Contract);
    invoice.at(address);
    invoice.validate((err,res)=>{

        if (err != null) console.error(err);
        else{
            console.log("Invoice Validated");
            refreshTable();
        }

    });


}

function paidInvoice(but,address,buyer,seller){
    console.log("paidInvoice");
    var $row = $(but).parents('tr');
    var $cols = $row.find('td');
    // get changed values    
    amount = parseInt($cols[4].innerHTML);

    var invoice = new Contract();
    invoice.setAbi(Invoice_Contract);
    invoice.at(address);
    invoice.gotPaid(int2hex(amount),(err,res)=>{

        if (err != null) console.error(err);
        else{
            console.log("Invoice Paid");
            policyList.findPolicy(buyer,seller,(err,res)=>{
            if (err) console.error("findPolicy err : " + err);
            else{
                console.log("Policy address : " + hex2address(res))
                 var actualPolicy = new Contract()
                 actualPolicy.setAbi(Policy_Contract);
                 actualPolicy.at(hex2address(res));
                 actualPolicy.removeCurrentAmount(int2hex(amount),(err,res)=>{
                     if (err) console.error("removeCurrentAmount : " + err);
                     else{
                        console.log("amount successfully removed")
                    }
                })
            }
        })
            refreshTable();
        }

    });

}

function deleteInvoice(but, address){
    console.log("deleteInvoice");
    var $row = $(but).parents('tr');  //accede a la fila
    $row.remove();
    params.onDelete();
}

function validateEditInvoice(but){
    console.log("validateEditInvoice");
    //Acepta los cambios de la edición
    var $row = $(but).parents('tr');  //accede a la fila
    var $cols = $row.find('td');  //lee campos
    if (!ModoEdicion($row)) return;  //Ya está en edición
    //Está en edición. Hay que finalizar la edición
    IterarCamposEdit($cols, function($td) {  //itera por la columnas
      var cont = $td.find('input').val(); //lee contenido del input
      $td.html(cont);  //fija contenido y elimina controles
    });
    FijModoNormal(but);
    params.onEdit($row);
}

function cancelEditInvoice(but,address){
    console.log("cancelEditInvoice");
    //Rechaza los cambios de la edición
    var $row = $(but).parents('tr');  //accede a la fila
    var $cols = $row.find('td');  //lee campos
    if (!ModoEdicion($row)) return;  //Ya está en edición
    //Está en edición. Hay que finalizar la edición
    IterarCamposEdit($cols, function($td) {  //itera por la columnas
        var cont = $td.find('div').html(); //lee contenido del div
        $td.html(cont);  //fija contenido y elimina controles
    });
    FijModoNormal(but);
}

function refreshPage(){
    refreshTable();
  setTimeout(function() {    
    refreshPage();
}, 5000);
}