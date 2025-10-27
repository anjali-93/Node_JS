const http = require("http"); //importing http module

const fs = require("fs");//importing fs module

const dayjs = require("dayjs");//importing dayjs module

const url = require("url");//importing url module


//creating server
const myServer = http.createServer((req, res) =>{
    let today = dayjs();
    const log = `Request received on ${req.url} at ${today.format('YYYY-MM-DD HH:mm:ss')}\n`;
    const myUrl = url.parse(req.url, true);//parsing the url
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.pathname){ 
            case '/':
                res.end("This is the home page");
                break;
            case '/about':
                const username = myUrl.query.myname
                res.end('Hyy ' + username);
                break;
            case '/contact':
                res.end("This is the contact page");
                break;
            default:
                res.end("404 Page not found");
        }
    });
}

);
// server listening on port 8000
myServer.listen(8000,() => console.log("Server started"));