import {useNavigateHook} from "../../hooks";

export function ProfilePage() {
  const {goLogin} = useNavigateHook();
  return (
    <button onClick={goLogin}>Salir</button>
  )
}
