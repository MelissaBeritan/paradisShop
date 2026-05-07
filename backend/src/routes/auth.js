/*
    Rutas de usuario / Auth
    host + api/auth
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const { crearUsuario,loginUsuario, revalidarToken} = require('../controllers/auth');
const { passwordValidator,confirmedPasswordValidator } = require('../validators/customAuthValidator');
const { fieldsValidator } = require('../middlewares/fieldsValidator');

router.get('/', (req, res) => { res.json({ ok: true }) });
router.post('/newUser', [
    check('user', 'El nombre es obligatorio').notEmpty(),
    //check('email', 'El email es obligatorio').isEmail(),
    check('password', 'Contrasena invalida').custom((password) => passwordValidator(password)),
    check('confirmedPassword', 'Las contrasenas no cohinciden').custom((confirmPassword, request) => confirmedPasswordValidator(confirmPassword, request)),
    fieldsValidator
], crearUsuario);
    

router.post('/loginUser', [
    check('user', 'El nombre es obligatorio').notEmpty(),
    check('password', 'Contrasena invalida').custom((password) => passwordValidator(password)),
    fieldsValidator
] ,loginUsuario);


router.get('/revalidateToken', revalidarToken);

module.exports = router;