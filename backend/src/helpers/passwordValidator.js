const passwordValidator = (password) => {
    const dangerousChars = /[<>{}[\]'"`;\\\-]|--|\b(SELECT|DROP|INSERT|UPDATE|DELETE)\b/i;
    if ((dangerousChars.test(password)) || password.length < 8) {
        throw new Error('Contrasena invalida');
    }
    return true;
}

const confirmedPasswordValidator = (confirmPassword, request) => {
    if (!confirmPassword) {
        throw new Error('Campo vacio');
    }
    if (confirmPassword !== request.body.confirmPassword) {
        return false;
    }
    return true;

}
module.exports = { passwordValidator, confirmedPasswordValidator };
