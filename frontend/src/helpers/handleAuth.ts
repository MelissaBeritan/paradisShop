// helpers/handleLogin.js
import { authService } from "../services";

export const handleLogin = async (credentials, onSuccess, onError) => {
  const result = await authService.login(credentials);
  
  if (result.success) {
    if (onSuccess) onSuccess(result.data);
  } else {
    if (onError) onError(result.error);
  }
  
  return result;
};

export const handleRegister = async (credentials, onSuccess, onError) => {
  const result = await authService.register(credentials);
  
  if (result.success) {
    if (onSuccess) onSuccess(result.data);
  } else {
    if (onError) onError(result.error);
  }
  
  return result;
}