import { useReducer } from "react";
import { useNavigateHook } from "../../hooks";
import type { UserCredentials } from "../../types/apptypes";

export default function LoginPage() {
    const { goRegister } = useNavigateHook();
    const user: UserCredentials= {}
    const [form, dispatch] = useReducer(formReducer, UserCredentials);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
      <>
          <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Nombre de usuario" />
              <input type="password" placeholder="Contraseña" />
              <input type="password" placeholder="Confirmar Contraseña" />
              <button>Enviar</button>
          </form>
          <button onClick={goRegister}>Crear nueva cuenta</button>
      </>
  )
}
