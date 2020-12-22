// IMPORTS
import express from "express";
const app = express();
import { readFileSync } from "fs";

// STATIC DIRECTORIES
app.use('/css', express.static('private/css'));
app.use('/img', express.static('private/img'));
app.use('/js', express.static('private/js'));

// APP GETS
app.get('/', (req, res) => {
  res.set("Server", "Grand Huryalqa");
  let doc = readFileSync("./index.html", "utf-8");
  res.send(doc);
})

app.use((req, res) => {
  res.status(404).send('Nothing found, 404');
})

const server = app.listen(8000, () => {
  console.log("Listening . . .");
})