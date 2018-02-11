var reports = document.getElementById('reports');
var transactions = document.getElementById('transactions');
init();
refreshPage();

function updateTransaction(){
	var transactionsList = localStorage.getItem("transactions");
	var valValidated = '<span style="color:green"><b>Validated</b></span>'
	var valRejected = '<span style="color:red"><b>Rejected</b></span>'
	
	transactionsList = JSON.parse(transactionsList);

	var transtHTML="";
	for (var i=transactionsList.length-1; i>=0;i--){
		tmp = transactionsList[i];
		val = tmp.validate?valValidated:valRejected;		
		transtHTML+='<div class="transaction">'+
				      '<div class="transaction-container">'+
				        '<div class="container-fluid">'+
				        	'<div>'+
				        		'<span>T.id : '+tmp.res.substr(0,46)+'</span>'+
				        	'</div>'+
				          '<div class="transaction-left" style="text-align: left">'+
				            'From: '+findNameFromAddress(tmp.from)+'<br>'+
				            // 'To : '+tmp.to+'<br>'+
				            'Action: '+tmp.action+' <br>'+
				          '</div>'+
				          '<div class="transaction-right" style="text-align: right">'+
				            'Status : '+val+' <br>'+
				            'Serveur Blockchain: '+tmp.node+' <br>'+
				             '<br>'+
				          '</div>'+
				        '</div>'+
				      '</div>'+
				    '</div>'
	}
	
	transactions.innerHTML=transtHTML;
}

function updateExposure(){
	var HSBC_tot = document.getElementById('HSBC_tot');
	var HSBC_current = document.getElementById('HSBC_current');
	var EH_tot = document.getElementById('EH_tot');
	var EH_current = document.getElementById('EH_current');

	policyList.getPoliciyListLength((err,res)=>{
        if(err!=null) console.error(err);
        else{   
        	
        	var val_HSBC_tot = 0;
        	var val_HSBC_current = 0;
        	var val_EH_tot = 0;
        	var val_EH_current = 0;
            getAllPolicies().then(dat=>{
                for (var i=0;i<dat.length;i++){  
                	val_HSBC_tot += dat[i].limitRequired;
                	val_HSBC_current += dat[i].currentAmount;
                	val_EH_tot += dat[i].limitRequired;
                	val_EH_current += dat[i].currentAmount;
                } 
                HSBC_tot.innerHTML= val_HSBC_tot + " € ";
								HSBC_current.innerHTML=val_HSBC_current + " € "; 
								EH_tot.innerHTML= val_EH_tot + " € ";
								EH_current.innerHTML=  val_EH_current + " € ";             
            });
            
        }
    })
}

function refreshPage(){
	updateTransaction();
	updateExposure();
  setTimeout(function() {

    refreshPage();
}, 5000);
}