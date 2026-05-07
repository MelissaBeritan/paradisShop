// services/authService.js
const API_URL = '/api/auth';

export const authService = {
  login : async(credentials) =>{
    try {
      const response = await fetch(`${API_URL}/loginUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al iniciar sesión');
      }

      // Guardar token y usuario
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
    },
    register: async (credentials) => {
        console.log('credentials ',credentials);
        try {
            const response = await fetch(`${API_URL}/newUser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                body: JSON.stringify(credentials)
        }});
            const data = await response.json();
            console.log(data);
            console.log('response', response);

            if (!response.ok) {
                throw new Error(data.message || 'Error al registar');
            }
            // Guardar token y usuario
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            return { success: true, data };
        }
    catch(error){
      console.log(error);
      return  { success: false, error: error.message };
  }
    }
  };