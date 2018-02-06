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
    refreshPage();
    init();

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

$(".filter-sellerName").append(sellersNames);

$(".filter-buyerName").append(buyersNames);

$(".filter-currentAccount").append(accountChoices);

$(".filter-factor").append(factors);

$(".filter-insurer").append(insurers);

$("#invoiceCurrency_id").append(currencies);


var $table = $('#creditLimiTable');

var creditsLimitsdata 


    


    //var colEdicHtml = '<td name="buttons">'+newColHtml+'</td>'; 

var creditsLimitsdata=[];
    
$(function () {
    getAllPolicies().then(dat=>{
        console.log(dat)
        creditsLimitsdata=[];
        for (var i=0;i<dat.length;i++){
            // if (dat[i].sellerAddress == currentAccount 
            //     || dat[i].buyerAddress == currentAccount 
            //     || dat[i].validatorAddress == currentAccount
            //     || dat[i].factorAddress == currentAccount){
            //     if (dat[i].requestActive || dat[i].isActive){
                    
                 //   if (!dat[i].isActive /*&& dat[i].validatorAddress == currentAccount*/){
                        var newColHtml = '<div class="btn-group pull-right">'+
                        '<button id="bValid" type="button" class="btn btn-sm btn-default" onclick="validatePolicy(this,\''+dat[i].address+'\');">' + 
                        '<span class="glyphicon glyphicon-ok" > </span>'+
                        '</button>'+
                        // '<button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="editPolicy(this,\''+dat[i].address+'\');">' +
                        // '<span class="glyphicon glyphicon-pencil" > </span>'+
                        // '</button>'+
                        '<button id="bElim" type="button" class="btn btn-sm btn-default" onclick="deletePolicy(this,\''+dat[i].address+'\');">' +
                        '<span class="glyphicon glyphicon-trash" > </span>'+
                        '</button>'+
                        // '<button id="bAcep" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="validateEditPolicy(this,\''+dat[i].address+'\');">' + 
                        // '<span class="glyphicon glyphicon-ok" > </span>'+
                        // '</button>'+
                        // '<button id="bCanc" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="cancelEditPolicy(this,\''+dat[i].address+'\');">' + 
                        // '<span class="glyphicon glyphicon-remove" > </span>'+
                        // '</button>'+
                            '</div>';
                      dat[i].newColHtml=newColHtml;
                   // }
                    creditsLimitsdata.push(dat[i]);
            //     }
            // }
            
        }
        $('#creditLimiTable').bootstrapTable({
            data: creditsLimitsdata.reverse()
        });
    })
});

/* drop down for creditsLimitsdata */


var products = "";
var sellersNames = "";
var buyersNames = "";
var factors = "";
var insurers = "";


for (var i = 0; i < creditsLimitsdata.length; i++) {

    var sellerName = creditsLimitsdata[i].sellerName,

        buyerName = creditsLimitsdata[i].buyerName,

        factor = creditsLimitsdata[i].factor,

        insurer = creditsLimitsdata[i].insurer


    //create dropdown of sellersName

    if (sellersNames.indexOf("<option value='" + sellerName + "'>" + sellerName + "</option>") == -1) {

        sellersNames += "<option value='" + sellerName + "'>" + sellerName + "</option>";

    }


    //create dropdown of buyerNames

    if (buyersNames.indexOf("<option value='" + buyerName + "'>" + buyerName + "</option>") == -1) {

        buyersNames += "<option value='" + buyerName + "'>" + buyerName + "</option>";

    }


    //create dropdown of factors

    if (factors.indexOf("<option value='" + factor + "'>" + factor + "</option>") == -1) {

        factors += "<option value='" + factor + "'>" + factor + "</option>";

    }

    //create dropdown of insurers

    if (insurers.indexOf("<option value='" + insurer + "'>" + insurer + "</option>") == -1) {

        insurers += "<option value='" + insurer + "'>" + insurer + "</option>";

    }

}

$("#products").html(products);

$(".filter-sellerName").append(sellersNames);

$(".filter-buyerName").append(buyersNames);

$(".filter-factor").append(factors);

$(".filter-insurer").append(insurers);


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



$(".btn[data-target='#myModal']").click(function() {
    var columnHeadings = $("thead th").map(function() {
              return $(this).text();
           }).get();
    columnHeadings.pop();
    var columnValues = $(this).parent().siblings().map(function() {
              return $(this).text();
    }).get();
var modalBody = $('<div id="modalContent"></div>');
var modalForm = $('<form role="form" name="modalForm" action="putYourPHPActionHere.php" method="post"></form>');
$.each(columnHeadings, function(i, columnHeader) {
    var formGroup = $('<div class="form-group"></div>');
    formGroup.append('<label for="'+columnHeader+'">'+columnHeader+'</label>');
    formGroup.append('<input class="form-control" name="'+columnHeader+i+'" id="'+columnHeader+i+'" value="'+columnValues[i]+'" />'); 
    modalForm.append(formGroup);
});
modalBody.append(modalForm);
$('.modal-body').html(modalBody);
});
$('.modal-footer .btn-primary').click(function() {
$('form[name="modalForm"]').submit();
});


/* $('#requestDate').editable({
        type:  'date',
        pk:    1,
        name:  'RequestDate',
        url:   '',  
        title: 'Select Date'
     }); */

/* doesnt work */
     $('#RequestDate').editable({
        type:  'text',
        pk:    1,
        name:  'RequestDate',
        title: 'Enter RequestDate'
     });


function refreshTable(){
    //console.log("refreshTable");
    var $table = $('#creditLimiTable');
    policyList.getPoliciyListLength((err,res)=>{
        if(err!=null) console.error(err);
        else{   

            getAllPolicies().then(dat=>{
                //console.log(dat)
                creditsLimitsdata=[];
                for (var i=0;i<dat.length;i++){                    
                    // if (dat[i].sellerAddress == currentAccount 
                    //     || dat[i].buyerAddress == currentAccount 
                    //     || dat[i].validatorAddress == currentAccount
                    //     || dat[i].factorAddress == currentAccount){
                    //     if (dat[i].requestActive || dat[i].isActive){
                            
                            
                            //if (!dat[i].isActive /*&& dat[i].validatorAddress == currentAccount*/){
                                var newColHtml = '<div class="btn-group pull-right">'+
                                '<button id="bValid" type="button" class="btn btn-sm btn-default" onclick="validatePolicy(this,\''+dat[i].address+'\');">' + 
                                '<span class="glyphicon glyphicon-ok" > </span>'+
                                '</button>'+
                                // '<button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="editPolicy(this,\''+dat[i].address+'\');">' +
                                // '<span class="glyphicon glyphicon-pencil" > </span>'+
                                // '</button>'+
                                '<button id="bElim" type="button" class="btn btn-sm btn-default" onclick="deletePolicy(this,\''+dat[i].address+'\');">' +
                                '<span class="glyphicon glyphicon-trash" > </span>'+
                                '</button>'+
                                // '<button id="bAcep" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="validateEditPolicy(this,\''+dat[i].address+'\');">' + 
                                // '<span class="glyphicon glyphicon-ok" > </span>'+
                                // '</button>'+
                                // '<button id="bCanc" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="cancelEditPolicy(this,\''+dat[i].address+'\');">' + 
                                // '<span class="glyphicon glyphicon-remove" > </span>'+
                                // '</button>'+
                                    '</div>';
                              dat[i].newColHtml=newColHtml;
                           // }
                            creditsLimitsdata.push(dat[i]);
                    //     }
                    // }
                    
                }
                $table.bootstrapTable('load',{
                    data: dat.reverse()
                });
            });
            
        }
    })
}

function validatePolicy(but,address){
    console.log("validatePolicy");
    var $row = $(but).parents('tr');
    var $cols = $row.find('td');
    // get changed values
    limit = parseInt($cols[5].innerHTML);
    date = Date.parse($cols[6].innerHTML);
    //console.log(limit,date);


    var policy = new Contract();
    policy.setAbi(Policy_Contract);
    policy.at(address);
    console.log("test",address);
    policy.validate(int2hex(limit),int2hex(date),((err,res)=>{

        if (err != null) console.error(err);
        else{
            console.log("Policy Validated");
            refreshTable();
        }

    }));


}

function editPolicy(but,address){
    console.log("editPolicy");  
    var $row = $(but).parents('tr');  //accede a la fila
    var $cols = $row.find('td');  //lee campos
    if (ModoEdicion($row)) return;  //Ya está en edición
    //Pone en modo de edición
    IterarCamposEdit($cols, function($td) {  //itera por la columnas
        var cont = $td.html(); //lee contenido
        var div = '<div style="display: none;">' + cont + '</div>';  //guarda contenido
        var input = '<input class="form-control input-sm"  value="' + cont + '">';
        $td.html(div + input);  //fija contenido
    });
    FijModoEdit(but);  

}

function deletePolicy(but, address){
    console.log("deletePolicy");
    var $row = $(but).parents('tr');  //accede a la fila
    $row.remove();
    params.onDelete();
}

function validateEditPolicy(but){
    console.log("validateEditPolicy");
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

function cancelEditPolicy(but,address){
    console.log("cancelEditPolicy");
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
  setTimeout(function() {
    refreshTable();
    refreshPage();
}, 5000);
}