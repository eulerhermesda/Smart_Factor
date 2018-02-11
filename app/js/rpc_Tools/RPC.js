/*
Test server via curl in command line

curl -H "Content-Type: application/json" -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}' 127.0.0.1:8545

*/

var rpcUrl = "http://127.0.0.1:8545";
//var rpcUrl = "http://52.215.75.218:8545"
var maxGas = "0x47e7c3";
function estimateGas(_from,_to,_data){

    return new Promise(function(resolve, reject){

        var http = new XMLHttpRequest();
        var url = rpcUrl;
        var params = '{"jsonrpc":"2.0","method": "eth_estimateGas", "params": [{"from": "' + _from +'", "to": "'+ _to +'", "data": "'+ _data +'" }], "id": 1}';
        //console.log(params);

        http.open("POST", url, true);
        http.setRequestHeader("Content-Type", "application/json");
        http.onreadystatechange = function(){
            if(http.readyState == 4 && http.status == 200) {
                result = http.responseText;
                result = JSON.parse(result);
                result = result.result;
                resolve(result);
            }
        };

        http.send(params);
    });

}

// This function generates the right dat
function generate(_from,_to,_data,_type, _gas){
    var extraParam = (_type == "eth_call")?',"latest"':'';
    var gas = (_type != "eth_call")?',"gas":"'+_gas+'"':'';
    return '{"jsonrpc":"2.0","method" : "'+ _type +'", "params": [{"from": "' + _from +'", "to": "'+ _to +'", "data": "'+ _data + '"'+ gas +' }'+ extraParam+'], "id": 1}';
}

function unlockAccount(_account,_pwd){
    // This function will unlock the account passed in parameter.
    // The geth node should expose the personal API through the parameter --rcpapi="personal"

    var http = new XMLHttpRequest();
    var url = rpcUrl;
    var params = '{"jsonrpc":"2.0","method":"personal_unlockAccount","params":["' + _account + '", "' + _pwd +'", 3600],"id":67}';

    http.open("POST", url, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200) {
            if (JSON.parse(http.responseText).hasOwnProperty("error")){
                console.log(http.responseText);
            }
            else
                console.log("Account successfully unlocked")

    }};
    http.send(params);
}

// Send the transaction to the local RPC
async function sendTransaction(_from,_to,data,cb, callback){// cb = original callback
    var http = new XMLHttpRequest();
    var url = rpcUrl;
    var estimatedGas = await estimateGas(_from, _to, data);
    if(parseInt(estimatedGas) > parseInt(maxGas,16) || !estimatedGas){
        estimatedGas = maxGas;
    }

    estimatedGas = estimatedGas.toString(16);
    var params = generate(_from,_to,data,"eth_sendTransaction", estimatedGas);
    console.log(params);
    http.open("POST", url, true);    
    http.setRequestHeader("Content-Type", "application/json");

    
    http.onreadystatechange = function(){callback(http,cb);};

    //Let's unlock the account before sending the transaction
    //unlockAccount(_from,"test")
    http.send(params);
}

async function sendCall(_from,_to,data,cb, callback){// cb = original callback
    var http = new XMLHttpRequest();
    var url = rpcUrl;
    var estimatedGas = await estimateGas(_from, _to, data);
    
    if(parseInt(estimatedGas) > parseInt(maxGas,16) || !estimatedGas){
        estimatedGas = maxGas;
    }
    estimatedGas = estimatedGas.toString(16);
    var params = generate(_from,_to,data,"eth_call", estimatedGas);
    //console.log(params);
    http.open("POST", url, true);
    http.setRequestHeader("Content-Type", "application/json");

    //Send the proper header information along with the request
    //http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function(){callback(http,cb);};

    //Let's unlock the account before sending the transaction
    //unlockAccount(_from,"test")
    http.send(params);
}


class Contract{

    constructor(){
        this.address = null;
        this.abi = null;
        this.ready = false;
    }

    isReady(){
        return this.ready;
    }
    generateFunctions(){

        for (var i = 0; i< this.abi.length;i++){
            var funcname = this.abi[i].name; // #TODO find a way to generate the name of the function from the name found in the ABI
            var argsName = [];
            var argsType = [];
            var index = 0;
            // Looping through the name of the inputs to get all the inputs plus types
            for (var j=0; j< this.abi[i].inputs.length;j++){

                if (this.abi[i].inputs[j].name != ""){
                    argsName[index]=this.abi[i].inputs[j].name;
                    argsType[index]=this.abi[i].inputs[j].type;
                    index++;
                }
            }

            var index = 0;
            var outputsType=[];
            var outputsName=[];
            if (this.abi[i].outputs){
                for (var j=0; j<this.abi[i].outputs.length; j++){
                    outputsType[index] = this.abi[i].outputs[j].type;
                    outputsName[index] = this.abi[i].outputs[j].name;
                    index++;
                }
            }


            // adding the body of the function
            var args = argsName;
            var funcHash = this.generateFunctionHash(funcname,argsType);
            var funcType = this.abi[i].constant?'sendCall':'sendTransaction'


            var tmpCode = 'var funcString="";' +
                        'var string = "";';

            for (var j=0; j < args.length;j++){
                if (argsType[j] == "address"){
                    tmpCode = tmpCode + /*'console.log("'+funcname+'");'+*/
                    'var tmp = "0000000000000000000000000000000000000000000000000000000000000000" + arguments['+j+'].toString().substr(-40);'+
                    'tmp = tmp.substring(tmp.length-64,tmp.length);'+
                    'string = string + tmp;'
                }else if(argsType[j] == "uint256"){
                    
                    tmpCode = tmpCode + /*';console.log(arguments['+j+']);'+*/
                    'var tmp = "0000000000000000000000000000000000000000000000000000000000000000" + arguments['+j+'].toString(16);'+
                    'tmp = tmp.substring(tmp.length-64,tmp.length);'+
                    'string = string + tmp;'
                    
                }else{
                    tmpCode = tmpCode +
                    'var tmp = "0000000000000000000000000000000000000000000000000000000000000000" + arguments['+j+'].toString();'+
                    'tmp = tmp.substring(tmp.length-64,tmp.length);'+
                    'string = string + tmp;'
                }
            }

            // Adding the callback function
            //tmpCode = tmpCode + 'var callBackFunc = function(){arguments[arguments.length](err,res)}'

            tmpCode = tmpCode +    'funcString = "0x'+funcHash+'"+ string;'+
                                funcType+'(currentAccount,this.address,funcString,arguments[arguments.length-1],function(http) {'+
                                        'if(http.readyState == 4 && http.status == 200) {';

            // Code for handling the response from the RPC server here
                // If we have a call, the result of the operation is returned in the result field of the response
            tmpCode = tmpCode +    'var response = JSON.parse(http.responseText);'+
                'var res=[];'+

                // Logging of transaction
                 'var trans = new Object();'+
                 'trans.from=currentAccount;'+
                 'trans.to= this.address;'+
                 'trans.action="'+funcname+'";'+
                 'trans.node=Math.floor(Math.random()*10)%3+1;'+

                'var err=undefined;'+
                'if (response.error){'+
                    'console.log(response);'+
                    'err = response.error;'+

                    // Logging of transaction
                    'trans.validate=0;'+
                '}'+
                'else {'+

                    // Logging of transaction
                    'trans.validate=1;'+

                    'for (var i=0; i<'+outputsType.length+';i++){'+
                        'res[i]="0x"+response.result.substring(2+64*i,66+64*i);'+
                    '}'+
                    
                '}'+

                //Logging of transaction
                'trans.res=generateRandomAddress();'+
                'transtmp=localStorage.getItem("transactions");'+
                'if("'+funcType+'" == "sendTransaction"){'+
                'if (!transtmp)'+
                    
                    'localStorage.setItem("transactions",JSON.stringify([trans]));'+
                'else{'+
                    'transtmp = JSON.parse(transtmp);'+
                    'transtmp.push(trans);'+
                    'localStorage.setItem("transactions",JSON.stringify(transtmp));'+
                '}'+
                '}'+

                'arguments[arguments.length-1](err,res);';

            tmpCode = tmpCode +    ' /*console.log(http.responseText);*/'+
                                       ' }});';
            args[args.length]=tmpCode

            this[funcname] = Function.apply(null,args);
            this.ready=true;
        }
    }

    


    at(address){
        this.address = address;
    }

    parseAbi(_abi){
        this.abi = JSON.parse(_abi);        
        this.generateFunctions();

    }

    setAbi(_abi){
        this.abi = _abi;
        this.generateFunctions();
    }



    generateFunctionHash(funcName,type){
        //var shaObj = new jsSHA("Keccak-256", "TEXT");
        var tmp = funcName + '(';

        for (var i=0; i < type.length;i++ ){
            if (type[i] == 'uint')
                tmp=tmp+'uint256';
            else if (type[i] == 'int')
                tmp=tmp+'int256';
            else
                tmp=tmp+type[i]
            if (i != type.length -1){
                tmp=tmp+','
            }

        }
        tmp=tmp+')';
        //console.log(tmp)
        //shaObj.update(tmp)

        return keccak256(tmp).substring(0,8);
    }
}


//Converters
//Convert Hexadecimal to bool
function hex2bool(hex){
    var bool = '';
    if( String(hex).substr(-1) == "1"){
        bool = true;
    }
    else{
        bool = false;
    }
    return bool;
}
//Convert Bool to hex
function bool2hex(bool){
    if(bool){
        var hex = "00000000000000000000000000000001";
    }
    else{
        var hex = "00000000000000000000000000000000";
    }
    return hex;
}

//Convert hexadecimal to ASCII
function hex2a(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        var v = parseInt(hex.substr(i, 2), 16);
        if (v) str += String.fromCharCode(v);
    }
    return str;
}

//Convert string to hex
function a2hex(a){
    var result = "";
    for (i=0; i<a.length; i++) {
        hex = a.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }
    return result.substr(0,63);
}

//Convert int to hexadecimal
function int2hex(int){
    var hex = ("0000000000000000000000000000000000000000000000000000000000000000" + int.toString(16)).substr(-64);
    hex = "0x" + hex;
    return hex;
}
function hex2int(hex){
    return parseInt(hex);
}

//Convert Hex to address
function hex2address(hex){
    var result = "0x" + String(hex).substr(-40);
    return result;
}

function hex2date(hex){
    hex=hex2int(hex);
    myDate = new Date(hex);
    return myDate.toLocaleDateString("en-UK",{ year: 'numeric', month: 'long', day: 'numeric' });

}


function rpcTestFunction(){
    var params = '{"jsonrpc":"2.0","method" "eth_call", "params": [{"from": "0x627306090abab3a6e1400e9345bc60c78a8bef57", "to": "0x345ca3e014aaf5dca488057592ee47305d9b3e10", "data": "0x4cdec3c0" },"latest"], "id": 1}'
    var http = new XMLHttpRequest();
    var url = rpcUrl;
    //console.log(params);

    http.open("POST", url, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200) {

            result = http.responseText;
            result = JSON.parse(result);
            if (result.err){
                console.log(result.error);
            }else{
                console.log(result);
            }

        }
    };

    http.send(params);
}

function generateRandomAddress(){
    const list= [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    var res= "0x";
    for (var i = 0; i<64;i++){
        var rand = Math.floor(Math.random()*16);        
        res += list[rand];
    }    
    return res;
}