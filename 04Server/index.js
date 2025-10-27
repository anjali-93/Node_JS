const http = require("http");
const fs = require("fs");
const dayjs = require("dayjs");



const myServer = http.createServer((req, res) =>{
    let today = dayjs();
    const log = `Request received on ${req.url} at ${today.format('YYYY-MM-DD HH:mm:ss')}\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch(req.url){
            case '/':
                res.end("This is the home page");
                break;
            case '/about':
                res.end("This is the about page");
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

myServer.listen(8000,() => console.log("Server started"));