import { useState } from "react";
import '../styles/loginStyles.css';
import { validateForm , validateUser} from "../../helpers";
import { useForm, useNavigateHook } from "../../hooks";
import { handleRegister } from "../../helpers";

export default function LoginPage() {
    const {form, dispatch} = useForm();
    const { goRegister } = useNavigateHook();
    const {checkPasslength,checkForm,checkInputs} = validateForm(form,dispatch,goRegister);
    const [passMessage, setPassMessage] = useState(''); 

    // 👇 NUEVOS ESTADOS
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState('');
    
    const handleCheckPassLength = (value) => {    
    const isValid = checkPasslength(value);
    
    if (!isValid) {
        setPassMessage('La contraseña debe tener al menos 8 caracteres, mayúsculas, minúsculas, números y símbolos (@$!%*?&)');
        return;
    }    
    setPassMessage('');
}
  // 👇 FUNCIÓN QUE MANEJA EL ENVÍO DEL FORMULARIO
    const onSubmit = async (e) => {
        e.preventDefault();  // Evita que recargue la página
        
        // Validar formulario
        const isValid = checkForm();
        if (!isValid) return;
        
        setIsLoading(true);
        setServerError('');
        
        // Llamar a handleLogin
        await handleRegister(
        { user: form.user, password: form.password, confirmedPassword: form.confirmedPassword },
        (data) => {
            // ✅ Éxito: redirigir
            console.log('Register exitoso:', data);
            goRegister();
        },
        (error) => {
            // ❌ Error: mostrar mensaje
            console.log('Register fallido:', error);
            setServerError(error);
        }
        );
        
        setIsLoading(false);
    }
    

 return (
        <div className="login-container">  
            <form className="login-form" onSubmit={onSubmit}>   
             <h2>Registrar cuenta</h2>
            {serverError && (
                <div style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>
            {serverError}
          </div>
        )}
                
                <div className="input-group">
                    <input 
                        type="text" 
                        value={form.user} 
                        onChange={(e) => checkInputs(e.target.value, 'SET_USER')} 
                        placeholder="Nombre de usuario"
                        name="username" 
                        id="username"
                        autoComplete="username"
                        disabled={isLoading} 
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
                        disabled={isLoading} 
                        />
                </div> 
                 
                 <div className="input-group">
                    <input 
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        autoComplete="new-password"
                        value={form.confirmedPassword} 
                        onChange={(e) => {
                            checkInputs(e.target.value, 'CONFIRM_PASSWORD');
                            handleCheckPassLength(e.target.value);
                        }} 
                        placeholder="Confirma la contraseña"
                        disabled={isLoading} 
                    />
                    
                    <div className={`message ${passMessage.includes('correcta') ? 'success' : 'error'}`}>
                        {passMessage}
                    </div>                
                </div>                          
                <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isLoading}  
                    onClick={checkForm}
                >
                     {isLoading ? 'Verificando...' : 'Enviar'}
                </button>
            </form>
        </div>
    );
}
