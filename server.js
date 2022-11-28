const dotenv=require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
dotenv.config({ path: path.join(__dirname, 'config/.env') });
require('./route/user.js')(app);


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connecte a la base de donne'));



app.get("/", (req, res) => {
  res.json({ message: "Server is running :D" });
});




app.listen(3000, () => console.log('serveur demare'));