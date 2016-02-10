/*jshint esnext: true */
/*jshint esversion: 6 */

//Lets require/import the HTTP module
var http = require('http');
var fs = require('fs');
var qs = require('querystring');

const PRFX = "webhook-request-debug";
const SP = "-";

var writeToLog = function (content) {
  var logFile = "/tmp/";
  var hs = Math.round((new Date()).getTime() / (60 * 1000 * 60));
  logFile = logFile + PRFX + hs + ".log";
  fs.appendFile(logFile, content + "\n", function(err) {
    if(err) {
      console.log(err);
      process.exit(1);
    }
  });
};

//Lets define a port we want to listen to
const PORT=5009;

//We need a function which handles requests and send response
function handleRequest(request, response){
  var responseString = '';
  request.on('data', function (chunk) {
    responseString += chunk;
  });
  request.on('end', function () {
    writeToLog(JSON.stringify(qs.parse(responseString)));
  });

  response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    console.log("Server listening on: http://0.0.0.0:%s", PORT);
});
