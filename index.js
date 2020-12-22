// IMPORTS
import express from "express";
const app = express();
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
import { readFileSync } from "fs";

// STATIC DIRECTORIES
app.use('/css', express.static(__dirname + '/css'));
app.use('/stuff', express.static(__dirname + '/assets'));
app.use('/js', express.static(__dirname + '/scripts'));

// APP GETS
app.get('/', (req, res) => {
  res.set("Server", "Grand Huryalqa");
  let doc = readFileSync(__dirname + "/index.html", "utf-8");
  res.send(doc);
})

app.use((req, res) => {
  res.status(404).send('Nothing found, 404');
})

const server = app.listen(8000, () => {
  console.log("Listening . . .");
})