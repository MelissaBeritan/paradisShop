import { useState } from "react";
import { validateForm } from "../../helpers/validateForm";
import { useForm, useNavigateHook } from "../../hooks";
import '../styles/loginStyles.css';

export default function RegisterPage() {
  const {form, dispatch} = useForm();
  const { goRegister } = useNavigateHook();
  const {checkPasslength,checkForm,checkInputs} = validateForm(form,dispatch,goRegister);
  const [passMessage, setPassMessage] = useState('');  
    
const handleCheckPassLength = (value) => {    
    const isValid = checkPasslength(value);
    
    if (!isValid) {
        setPassMessage('La contraseña debe tener al menos 8 caracteres, mayúsculas, minúsculas, números y símbolos (@$!%*?&)');
        return;
    }    
    setPassMessage('');
}

 return (
        <div className="login-container">  
            <form className="login-form">   
                <h2>Crear cuenta</h2>        
                
                <div className="input-group">
                    <input 
                        type="text" 
                        value={form.user} 
                        onChange={(e) => checkInputs(e.target.value, 'SET_USER')} 
                     placeholder="Nombre de usuario"
                     name="username" 
                     id="username"
                     autoComplete="username"
                    />
                </div>
                
                <div className="input-group">
                    <input 
                     type="password"
                     name="password"
                     id="password"
                     autoComplete="new-password"
                        value={form.password} 
                     onChange={(e) => {
                         checkInputs(e.target.value, 'SET_PASSWORD');
                         handleCheckPassLength(e.target.value);
                     }} 
                        placeholder="Contraseña" 
                    />
                    
                    <div className={`message ${passMessage.includes('correcta') ? 'success' : 'error'}`}>
                        {passMessage}
                    </div>                
                </div>                
                <div className="input-group">
                    <input 
                     type="password" 
                     name="confirm-password"
                     id="confirm-password"
                     autoComplete="new-password"
                        value={form.confirmedPassword} 
                        onChange={(e) => checkInputs(e.target.value, 'CONFIRM_PASSWORD')} 
                        placeholder="Confirmar Contraseña" 
                    />
                </div>                
                <button 
                    type="submit" 
                    className="submit-btn"
                    onClick={checkForm}
                >
                    Crear nueva cuenta
                </button>
            </form>
        </div>
    );
}
