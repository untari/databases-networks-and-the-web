// The index.js file of your application
const express = require("express");
const app = express();
const port = 8083;

app.get("/", (req, res) => res.send("<h1>Hello world<h1>"));
app.listen(port, () => console.log('Eample app listening on port ${port}!'));