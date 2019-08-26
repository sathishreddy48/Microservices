var mysql= require('mysql');
var https = require('https');

var fs = require('fs');

var connection = mysql.createConnection({
    host: "mysqlserver48.mysql.database.azure.com", 
user: "satheesh@mysqlserver48", 
password: 'MacBookPro@123', 
database: 'mydatabase',
insecureAuth: true,
 port: 3306, 
 ssl:true
//  ssl:{
     
//      ca: fs.readFileSync ('./cert/BaltimoreCyberTrustRoot.crt.pem')
// }
});
//connection.connect();
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });