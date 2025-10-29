const express = require("express");

const app = express();

app.get("/" , (req , res ) => {
    return res.send("This is the home page");
});

app.get("/about", (req , res) =>{
    return res.send(`Hello from ExpressJs to  ${req.query.name}`);
});

app.listen(8000 , () => {
    console.log("Server Started");
});