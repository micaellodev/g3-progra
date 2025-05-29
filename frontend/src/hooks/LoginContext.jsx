// hooks/LoginContext.jsx
// hooks/LoginContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('currentUser');
      console.log('Datos guardados en localStorage:', savedUser);
      
      if (savedUser && savedUser !== 'null' && savedUser !== 'undefined') {
        const parsedUser = JSON.parse(savedUser);
        console.log('Usuario parseado:', parsedUser);
        
        if (parsedUser && typeof parsedUser === 'object' && Object.keys(parsedUser).length > 0) {
          setCurrentUser(parsedUser);
        }
      }
    } catch (error) {
      console.error('Error parsing saved user:', error);
      localStorage.removeItem('currentUser');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = (user) => {
    console.log('Intentando hacer login con:', user);
    
    if (!user || typeof user !== 'object') {
      console.error('Datos de usuario inválidos');
      return false;
    }

    try {
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      console.log('Login exitoso, usuario guardado:', user);
      return true;
    } catch (error) {
      console.error('Error al guardar usuario:', error);
      return false;
    }
  };

  const logout = () => {
    console.log('Cerrando sesión');
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  const updateUser = (newData) => {
    setCurrentUser((prevUser) => {
      if (!prevUser) {
        console.error('No hay usuario para actualizar');
        return null;
      }

      const updatedUser = { ...prevUser, ...newData };
      console.log('Actualizando usuario:', updatedUser);
      
      try {
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        return updatedUser;
      } catch (error) {
        console.error('Error al actualizar usuario:', error);
        return prevUser;
      }
    });
  };

  const value = {
    currentUser,
    login,
    logout,
    updateUser,
    isLoading
  };

  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin debe ser usado dentro de un LoginProvider');
  }
  return context;
};