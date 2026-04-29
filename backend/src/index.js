const express = require('express');
const { dbConection } = require('./database/config');
const app = express();

require('dotenv').config();

dbConection();

app.use(express.static('public'));

app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => { console.log(`corriendo en ${process.env.PORT}`) });

