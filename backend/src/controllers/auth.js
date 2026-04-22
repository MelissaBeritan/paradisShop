const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (request, response) => {
    const { name, email, password, confirmPassword } = request.body;
    const errors = validationResult(request);
        
    if (!errors.isEmpty()) {
        return response.status(400).json({
            ok: false,
            msj: errors.mapped()
        });
    }

    response.status(201).json(
        {
            ok: true,
            msj: "registro",
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        });
};

const loginUsuario = (request, response) => { response.json({ ok: true }) };
const revalidarToken = (request, response) => { response.json({ ok: true }) };

module.exports = {
    crearUsuario, loginUsuario, revalidarToken
}; 