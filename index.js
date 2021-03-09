import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url"
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer"
import open from "open"
import {dirname} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const port = 3000;

const routePages = (app, rel_path) => {
    return new Promise((resolve, reject) => {
        try {
            const initializePageRouters = (afterInitialInit) => {
                app.use(bodyParser.urlencoded({ extended: true }));
                fs.readdir(rel_path, {withFileTypes: true}, (err, items) => {                
                    app.use(express.static(path.join(__dirname, "public")));
                    items.forEach(item => {
                        if (item.isFile() && /.+[.]html/.test(item.name)) {
                            // console.log(item);
                            let filename = item.name;                                                
                            app.get(`/${filename.substring(0, filename.indexOf(".html"))}`, (req, res, next) => {
                                res.setHeader("Set-Cookie", "display=pc");
                                res.sendFile(path.join(__dirname, "page", filename));                                
                            })                                                
                        }                            
                    })
                    app.get("/", (req, res, next) => {
                        res.setHeader("Set-Cookie", "display=pc");
                        res.sendFile(path.join(__dirname, "page", "index.html"));
                    });
                    app.post("/", (req, res, next) => {
                        res.sendFile(path.join(__dirname, "page", "error", "error.html"));
                    });                
                    app.get("/indicate/:name", (req, res, next) => {
                        console.log(req.query)
                        res.type("json");
                        res.json({
                            html: `<p><b>Portfolio for all: ${req.params.name} with ${req.query.age}</b></p>`
                        });
                    })
                    app.post("/indicate/", (req, res, next) => {
                        console.log(req.body)
                        console.log(req.body.username);
                        // throw new Error("Erorr processing the command");
                        console.log(req.body.password)
                        res.type("json");
                        res.json({
                            html: `<p><b>Username: </b>${req.body.username == "" ? "None": req.body.username}</p>
                                   <p><b>Age: </b>${req.body.password == "" ? "None" : req.body.password}</p>
                                   <br>
                                   <button id="special">Click me</button>
                            `
                        });
                    })                    
                    
                    afterInitialInit(resolve, reject);
                })                            
            }                        
            initializePageRouters((resolve, reject) => {
                app.post("/extract", (req, res, next) => {                   
                })
                app.post("/news", (req, res, next) => {
                    res.setHeader("Set-Cookie", "isSignToggle=true");
                    // res.sendFile(path.join(__dirname, "page", "post", "news.html"));
                    res.send("Successful");
                    // res.json({name: "Pam"});J
                })
                app.post("/process", (req, res, next) => {
                    
                    res.setHeader("Set-Cookie", "isSignToggle=true");
                    // res.sendFile(path.join(__dirname, "page", "post", "news.html"));
                    res.send("<p>File is successful</p>");
                    // res.json({name: "Pam"});
                })
                resolve(null);            
            });
        }
        catch (err) {
            reject("There is an error processing the routers");
        }
    })
}

const initialize = async () => {
    const app = express();
    try {
        await routePages(app, "page");                      
        app.listen(port);
        console.log(`App running at port ${port}...`);
        // open('http://localhost:3000', {app: 'firefox'});
        // console.log("test")    
    }
    catch (err) {
        console.log(err);
    }
}    

initialize();