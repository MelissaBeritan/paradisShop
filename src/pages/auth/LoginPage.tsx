import { useState } from "react";
import { validateForm } from "../../helpers/validateForm";
import { useForm, useNavigateHook } from "../../hooks";
import '../styles/loginStyles.css';


export default function LoginPage() {
    
    const {form, dispatch} = useForm();
    const { goRegister } = useNavigateHook();
    const {checkPass,checkNewUser,checkInputs} = validateForm(form,dispatch,goRegister);
    
 return (
        <div className="login-container">  {/* 👈 Contenedor principal */}
            <form className="login-form">   {/* 👈 Clase del formulario */}
                <h2>Iniciar Sesion</h2>        {/* 👈 Título opcional */}
                
                <div className="input-group">
                    <input 
                        type="text" 
                        value={form.user} 
                        onChange={(e) => checkInputs(e.target.value, 'SET_USER')} 
                        placeholder="Nombre de usuario" 
                    />
                </div>
                
                <div className="input-group">
                    <input 
                        type="password" 
                        value={form.password} 
                        onChange={(e) => checkInputs(e.target.value, 'SET_PASSWORD')} 
                        placeholder="Contraseña" 
                    />
                </div>
                
                <div className="input-group">
                    <input 
                        type="password" 
                        value={form.confirmedPassword} 
                        onChange={(e) => checkInputs(e.target.value, 'CONFIRM_PASSWORD')} 
                        placeholder="Confirmar Contaaraseña" 
                    />
                </div>
                
                <button 
                    type="submit" 
                    className="submit-btn"
                    onClick={checkNewUser}
                >
                    Iniciar Sesion
                </button>
                <p>No tiene cuenta?</p>
            </form>
        </div>
    );
}
