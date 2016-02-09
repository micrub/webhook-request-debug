/*jshint esnext: true */
/*jshint esversion: 6 */

//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=5009;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    console.log("Server listening on: http://0.0.0.0:%s", PORT);
});
