import { useNavigate } from "react-router-dom";


export function useNavigateHook() {
    const navigate = useNavigate();
    const goLogin = () => navigate('/login');
    const goRegister = () => navigate('/register');

  return {goLogin,goRegister};
}


