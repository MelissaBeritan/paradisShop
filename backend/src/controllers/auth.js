const { response } = require('express');

const crearUsuario = (request, response) => {
    const { name, email, password, confirmPassword } = request.body;
    

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

const loginUsuario = (request, response) => {
    const { name, password } = request.body;
 
    response.status(200).json({
        login: 'done',
        name: name,
        password: password
    });
};
const revalidarToken = (request, response) => { response.json({ ok: true }) };

module.exports = {
    crearUsuario, loginUsuario, revalidarToken
}; 