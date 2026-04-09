import { useReducer } from "react";
import { useNavigateHook } from "../../hooks";
import type { FormAction, UserCredentials } from "../../types/apptypes";

export default function LoginPage() {
    const { goRegister } = useNavigateHook();

    const initialState: UserCredentials = {
        user: '',
        password: ''
    }

    const formReducer = (state : UserCredentials, action : FormAction) => {
        switch (action.type) {
            case 'SET_USER':
                return { ...state, user: action.payload };
            case 'SET_PASSWORD':
                return { ...state, password: action.payload };
            case 'RESET':
                return initialState;
            default:
                return state;
        }
            
    }
    
    const [form, dispatch] = useReducer(formReducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
      <>
          <form onSubmit={handleSubmit}>
              <input type="text" onChange={(e)=>dispatch({type: 'SET_PASSWORD', payload: e.target.value})} placeholder="Nombre de usuario" />
              <input type="password" placeholder="Contraseña" />
              <input type="password" placeholder="Confirmar Contraseña" />
              <button>Enviar</button>
          </form>
          <button onClick={goRegister}>Crear nueva cuenta</button>
      </>
  )
}
