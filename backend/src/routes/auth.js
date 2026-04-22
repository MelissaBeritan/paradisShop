/*
    Rutas de usuario / Auth
    host + api/auth
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const { crearUsuario,loginUsuario, revalidarToken} = require('../controllers/auth');
const { passwordValidator,confirmedPasswordValidator } = require('../helpers');

router.get('/', (req, res) => { res.json({ ok: true }) });
router.post('/newUser', [
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'Contrasena invalida').custom((password) => passwordValidator(password)),
    check('confirmPassword', 'Las contrasenas no cohinciden').custom((confirmPassword,request)=>confirmedPasswordValidator(confirmPassword,request)),
], crearUsuario);
    

router.post('/loginUser', [
    check('name'),
] ,loginUsuario);


router.get('/revalidateToken', revalidarToken);

module.exports = router;