const mongoose = require('mongoose');

const dbConection = async() => {
    try {
        console.log('conectando');
        await mongoose.connect(process.env.DB_CONECTION);
        console.log('conectado');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = {dbConection}