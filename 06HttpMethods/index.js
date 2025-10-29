const http = require("http"); //importing http module

const fs = require("fs");//importing fs module

const dayjs = require("dayjs");//importing dayjs module

const url = require("url");//importing url module


//creating server
const myServer = http.createServer((req, res) =>{
    let today = dayjs();
    if(req.url === '/favicon.ico') return res.end();//to avoid favicon requests
    
    const log = `Request received on ${req.url} and Request Method is ${req.method} at ${today.format('YYYY-MM-DD HH:mm:ss')}\n`;
    const myUrl = url.parse(req.url, true);//parsing the url

    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.pathname){ 
            case '/':
                if(req.method === 'GET')
                res.end("This is the home page");
                break;
            case '/about':
                const username = myUrl.query.myname;
                res.end('Hyy ' + username);
                break;
            case '/contact':
                res.end("This is the contact page");
                break;
                case '/signup':
                    if(req.method === 'GET')
                        res.end("This is the signup page");
                    else if(req.method === 'POST'){
                        // db Query to store user data
                        res.end("User signed up successfully");
                    }
            default:
                res.end("404 Page not found");
        }
    });
}

);
// server listening on port 8000
myServer.listen(8000,() => console.log("Server started"));