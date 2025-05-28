// hooks/LoginContext.jsx
import { createContext, useContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (user) => setCurrentUser(user);
  const logout = () => setCurrentUser(null);

  const register = (newUser) => {
    localStorage.setItem('registeredUser', JSON.stringify(newUser));
    setCurrentUser(newUser); // Opcional si quieres logear al registrar
  };

  return (
    <LoginContext.Provider value={{ currentUser, login, logout, register }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
