import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url"
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer"
import open from "open"
import {dirname} from "path";
import session from "express-session"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const port = 3000;
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "page", "error", "error.html"));
});           

app.get("/extract", (req, res, next) => {    
    // res.setHeader("Set-Cookie", "display=pc");
    res.sendFile(path.join(__dirname, "page", "extract.html"));                                
})        

app.get("/atom", (req, res, next) => {        
    res.sendFile(path.join(__dirname, "page", "atom.html"));                                
})        
        
app.get("/create", (req, res, next) => {        
    res.sendFile(path.join(__dirname, "page", "create.html"));                                
})        
app.get("/extract", (req, res, next) => {                   
    res.sendFile(path.join(__dirname, "page", "extract.html"));                                
})      

app.get("/home", (req, res, next) => {        
    res.sendFile(path.join(__dirname, "page", "home.html"));                                
})        
app.get("/main", (req, res, next) => {        
    res.sendFile(path.join(__dirname, "page", "main.html"));                                
})        
app.get("/media", (req, res, next) => {        
    res.sendFile(path.join(__dirname, "page", "media.html"));                                
})        
app.get("/news", (req, res, next) => {        
    res.sendFile(path.join(__dirname, "page", "news.html"));                                
})        
app.get("/perform", (req, res, next) => {        
    res.sendFile(path.join(__dirname, "page", "perform.html"));                                
})        
app.get("/predict", (req, res, next) => {    
    res.sendFile(path.join(__dirname, "page", "predict.html"));
});
app.get("/prepare", (req, res, next) => {
    res.sendFile(path.join(__dirname, "page", "prepare.html"));
})
app.get("/test", (req, res, next) => {
    res.sendFile(path.join(__dirname, "page", "test.html"));
})
app.get("/ubisoft", (req, res, next) => {
    res.sendFile(path.join(__dirname, "page", "ubisoft.html"));
})
app.get("/state", (req, res, next) => {
    res.sendFile(path.join(__dirname, "page", "state.html"));
})
app.get("/unit", (req, res, next) => {
    res.sendFile(path.join(__dirname, "page", "unit.html"));
})
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "page", "index.html"));
})
app.use("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "page", "error", "error.html"));
})
app.post("/success", (req, res, next) => {    
    res.setHeader("Set-Cookie", "isSignToggle=true");
    // res.sendFile(path.join(__dirname, "page", "post", "news.html"));
    res.send("<p>File is successful</p>");
    // res.json({name: "Pam"});
})

app.post("/indicate/", (req, res, next) => {                                            
    req.session.isForm = true;                        
    res.type("json");
    res.json({
        html: `<p><b>Username: </b>${req.body.username == "" ? "None": req.body.username}</p>
               <p><b>Age: </b>${req.body.password == "" ? "None" : req.body.password}</p>
               <br>
               <button id="special">Click me</button>
        `
    });
})              

const initialize = async () => {    
    try {
        app.listen(port);
        console.log(`App running at port ${port}...`);        
    }
    catch (e) {
        console.log("Error processing!");
        console.log(e);
    }
  
}    
initialize();