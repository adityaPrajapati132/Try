import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/TRy.html");
 })

app.post("/check", (req, res) => {
    res.sendFile(__dirname + "/Sectry.html");
})

app.post("/Contect", (req, res) => {
    res.sendFile(__dirname + "/Mytry.html");
})

app.listen(port, () =>{
    console.log("Hlo sir Aditya");
})
 