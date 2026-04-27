    
    const userWordValidator = (word) => {
        emptyFileld(word);
        const dangerousChars = /[<>{}[\]'"`;\\\-]|--|\b(SELECT|DROP|INSERT|UPDATE|DELETE)\b/i;
        
        if ((dangerousChars.test(word))) {
            throw new Error('Caracter invalido');
        }
        return true;
    }

    const emptyFileld = (input) => {
        if (!input || input.trim()==='') {
            throw new Error("Campo vacio");        
        }
        return true;
    }

    const passwordValidator = (password) => {
        userWordValidator(password);
        if (password.length < 8) {
            throw new Error("La contrasena debe tener al menos 8 caracteres");
        }
        if (!/[0-9]/.test(password)) {
            throw new Error('La contraseña debe contener al menos un número');
        }
    
        if (!/[A-Z]/.test(password)) {
            throw new Error('La contraseña debe contener al menos una mayúscula');
        }
        return true;
    }

    const confirmedPasswordValidator = (confirmPassword, { req }) => {
        const {password } = req.body;
        userWordValidator(confirmPassword);
       
        if (confirmPassword !== password) {
            throw new Error('Las contrasenas no cohinciden');
        }
  
        return true;
    }


module.exports = { 
    passwordValidator, 
    confirmedPasswordValidator 
};