require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000 | process.env.PORT;

const db = mysql.createConnection({
    host: '162.241.252.224',
    user: 'mijohhmy',
    password: 'Pass,1234',
    database: 'mijohhmy_phytolabcommunity'
  });
  const cors = require("cors");
  app.use(function (req, res, next) {
      //Enabling CORS
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
  });
  const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sara@nextworldconsumer.com',
    pass: 'Pass,1234'
  }
});
app.use(bodyParser.json());
app.post('/api/saveUser', (req, res) => {
    const userData = req.body;   
    console.log(userData.name); 

    // Insert the event details into the database
    const sql = 'INSERT INTO create_event_free (event_name ) VALUES (?)';
    db.query(sql, [userData.name], (err, result) => {
        if (err) {
            console.error('Error inserting event:', err);
            return res.render('subscribe', {
                message: 'Subscription failed. Please try again later.',
                messageClass: 'error',
            });
        }

        console.log('Event inserted into the database');
    });
});

app.get('/api/myEvents',cors(),  (req, res) => {
  db.query('SELECT * FROM create_event_free', (err, results) => {
    console.log(results);
  if (err) {
  console.error('Error fetching events from the database:', err);
  return res.status(500).json({ error: 'Error fetching events' });
  }
  res.json(results);
  });
 });





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});