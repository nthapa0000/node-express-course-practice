const http = require('http');
// we can call it anything , http is build in module
const server = http.createServer((req, res) => {
    console.log('user hit the server');
    // we will see this in  our the terminal 
    res.end('Hello World');
    // we can also pass html 
    // we are sending our resposne back to the client
})
// create server is a method , in the call back we have req and res objects, we got to send the res back to the client
server.listen(5000);
// we are listening to the port 5000 , we can use any port number(port is a communication endpoint search in wiki fro more info) we can also see this for any website in the network tab and check the end of the status code
// port no. btw 0 to 1024 are already taken