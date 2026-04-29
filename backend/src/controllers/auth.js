const { response } = require('express');

const crearUsuario = async (request, response) => {
    
    const usuario = new Usuario(request.body);

    await usuario.save();

    response.status(201).json(
        {
            ok: true,
            msj: "registro",
            user: Usuario
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