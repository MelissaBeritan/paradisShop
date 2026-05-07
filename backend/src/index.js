const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { dbConection } = require('./database/config');
const app = express();

dbConection();

app.use(cors({
    origin: 'http://localhost:5173',  // frontend
    credentials: true
}));

app.use(express.static('public'));

app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => { console.log(`corriendo en ${process.env.PORT}`) });

