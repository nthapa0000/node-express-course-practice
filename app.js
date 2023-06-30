// MDN DOCS IS BEST for http request

const http = require('http');
const { readFileSync } = require('fs');
// get all files 
const homePage = readFileSync('./navbar-app/index.html');
// we will see that our css are not appplied  and icon is missing 
// now we will use this inside the write , when client request for the homepage  

// we are using this once so we can use readFileSync

// we can call it anything , http is build in module
const server = http.createServer((req, res) => {
    // console.log('user hit the server');
    // console.log(req);
    // we will see a giant object in the terminal
// console.log(req.method);
// we will know about the method which user make it is by default GET , client trying to get access resource
// console.log(req.url);
// http://localhost:5000/contact/life client trying to get access resource and if it is present we will show the resource and if not present we will display 404 error page

    // we will see this in  our the terminal 
    
    // providing the meta data, content-type is the name of the header

    // different status code ,status code let browser know what happend with the request, we can see that in the network tab in the browser

    const url = req.url;
    console.log(url);
    //  we will see that the browser is requesting us the following url which it know by reading the homepage html we passed
    // /
    // /styles.css
    // /logo.svg
    // /browser-app.js
    //  now the problem arrise that we in our app.js we are not handling this request (hence it will show page not found eq is localhost:5000/logo.svg), we are only handling the homepage request and on the rest requesr we are sending 404 error page, hence we need to handle this request separately if we want to use it 

    if(url === '/'){
        // means we are in homepage
        res.writeHead(200, { 'content-type': 'text/html' });
        // MIME TYPE is the type of the data we are sending to the browser(what are we sending to browser it notify)
        // text/html it let browser know we are sending html
        // if we do text/plain it will show the html as a plain text

        // just temporary  
        res.write(homePage);

        // at this point we are giving more useful data to the browser then simply sending the string from the console.log
        res.end();
        // we always need to call res.end() to end the response 
        // at this point it will be show the same thing for all the request 
    }
    else if(url === '/about'){
// about page
        res.writeHead(200, { 'content-type': 'text/html' });
        // we can also pass status message
        res.write('<h1>about page</h1>');
        // we can also pass the file , content of the file, using the file system module
        res.end();

    }else{
// 404 Resource not found when we type url which doesnt exist
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>page not found</h1>');
        res.end();
    }

    // we can also pass html 
    // we are sending our resposne back to the client
})
// create server is a method , in the call back we have req and res objects, we got to send the res back to the client
server.listen(5000);
// we are listening to the port 5000 , we can use any port number(port is a communication endpoint search in wiki fro more info) we can also see this for any website in the network tab and check the end of the status code
// port no. btw 0 to 1024 are already taken