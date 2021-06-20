const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events.js');
const main = require('./main.js');

main.executeMain();

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nhormesch',
  password : 'start123',
  database : 'programmieraufgabe'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection))
  ;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);  
});