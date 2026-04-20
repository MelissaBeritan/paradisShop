import { createUser } from "./createUser";

export const validateForm=(form,dispatch,goHome)=>{

    const dangerousChars = /[<>{}[\]'"`;\\\-]|--|\b(SELECT|DROP|INSERT|UPDATE|DELETE)\b/i;
    const passCharacters = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    const checkForm = (e)=>{
        e.preventDefault();
        if(!(form.user && form.password && form.confirmedPassword)){
            alert('Complete todos los campos');
            return;
        }
        //Otro if que va a comprobar en la bd d mongo si el usuario existe
        if(!(form.password ===form.confirmedPassword)){
            alert('Las contraseñas no cohinciden');
            dispatch({type:'CLEAN_PASSWORD'});
            return;
        }
        createUser(form);
        goHome();
    }

    const checkInputs=(userInput,type)=>{
        if(dangerousChars.test(userInput)) {
            alert('Caracter no permitido');
            return;
        }
        dispatch({type: type, payload: userInput});
    }

    const checkPasslength = (password) => {   
        return (passCharacters.test(password));
    }

    return {checkPasslength,checkForm,checkInputs};
}