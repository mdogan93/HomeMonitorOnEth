var Web3 = global.get('web3');
var abi = "ABIOFCONTRACT" ; // SMART CONTRACT ABI GOES HERE ; 
var main_account = "ACCOUNTADDRESS";// YOUR ACCOUNT;

var  web3;
//web3.js, checking if node is running
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8000"));
if (!web3.isConnected()) {
    msg.payload = "node not connected";
    return msg;
} 
var deviceMonitor = web3.eth.contract(abi).at("_______"); // deployed contract address
var password = "ACCOUNTPASSWORD"; // your password
web3.personal.unlockAccount(main_account,password,30); 


var retcont = deviceMonitor.updateSensorData(msg.payload.LightSensorVal, msg.payload.SoundSensorVal); // Parameters
msg.payload=retcont;

return msg;