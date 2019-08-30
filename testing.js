var http = require("http");
const krypto = require("c:/Users/rthummep/Desktop/Infusion_Feed/briovarx-infusion-dev-1/utilities/Krypto");
const sf_utility = require('c:/Users/rthummep/Desktop/Infusion_Feed/briovarx-infusion-dev/utilities/SFDCUtility');
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);
let referralRNList = ['raj','kiran'];
console.log(sf_utility.bindSOQLStringList(referralRNList));
var matchedResults = [{"attributes":{"type":"Referral__c","url":"/services/data/v42.0/sobjects/Referral__c/a3T0m0000008bagEAA"},"Id":"a3T0m0000008bagEAA","Referral_RN__c":null,"MRN__c":"744468","IS_Referral_Ranking__c":"Greater then 1.0","LATEST_PATH_STATUS_IS__c":"Order Entry"}];
var workflowTask = {};
console.log(' Before New IF CONDITION ' +JSON.stringify(matchedResults));
if(matchedResults != null && matchedResults.length > 0) {
   for (i = 0; i < matchedResults.length; i++) {
   if(matchedResults[i].IS_Referral_Ranking__c == 'With Rank 1.0' || (matchedResults[i].LATEST_PATH_STATUS_IS__c !='' && matchedResults[i].LATEST_PATH_STATUS_IS__c != null)){
      //workflowTask.Id = workflowTaskMatchingMRNMap[workflowTask.MRN__c].Id;
      //workflowTaskToUpdateList.push(workflowTask);
      workflowTask.Id = matchedResults[i].Id;
      //workflowTaskToUpdateList.push(workflowTask);
      console.log( '>>>>>>> Newly Added ' + JSON.stringify(matchedResults[i]));
      break;
   }
   //text += "The number is " + i + "<br>";
   //console.log('count is '+i);
   }
}
console.log(JSON.stringify(workflowTask));

var pass = 'Be072219!';
var token = 'AcWvcKvTKi0BsKNGIa28c7zoE';
var encryptPass = krypto.encrypt(pass);
var encryptToken = krypto.encrypt(token);
console.log('---------------------\n');
console.log('password before encrypt --> '+pass);
console.log('token before encrypt --> '+token);
console.log('\n');
console.log('---------------------\n');
console.log('encryptPassword --> '+encryptPass);
console.log('encryptToken --> '+encryptToken);

console.log('----------------------\n');

console.log('After Decrypt Password --> '+krypto.decrypt(encryptPass));
console.log('Decrypt Token --> '+krypto.decrypt(encryptToken));
/*
console.log(krypto.decrypt('b5d059b5999770005a'));//proxy password
console.log(krypto.encrypt('Proxyip10'));// reverse checking
console.log(krypto.encrypt('Be04262019!'));
console.log(krypto.decrypt('89d15e8189a839061ffa8fbbd7f5b14fe14b0273be895fe5e2'));//aaccesstoken
console.log(krypto.decrypt('d19a06f5d2cb3204588ff2e6938ab74cab395d'));//client secret*/
// Console will print the message 
console.log(krypto.decrypt('96c469bd9291784835d4a9a1d5d2ea19f7531835a5'));
console.log('Server running at http://127.0.0.1:8081/');