const {Schema, model} = require('mongoose');

const usuarioSchema = Schema({
    nombre: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: false,
        unique: true,
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = model('Usuario',usuarioSchema);