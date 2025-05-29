import { createContext, useContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  // Inicializar currentUser con datos de localStorage si existen
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem('registeredUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (user) => setCurrentUser(user);
  const logout = () => setCurrentUser(null);

  const register = (newUser) => {
    localStorage.setItem('registeredUser', JSON.stringify(newUser));
    setCurrentUser(newUser); // Opcional si quieres logear al registrar
  };

  const updateUser = (updatedData) => {
    const updatedUser = { ...currentUser, ...updatedData };
    setCurrentUser(updatedUser);
    localStorage.setItem('registeredUser', JSON.stringify(updatedUser)); // Actualiza también en localStorage
  };

  return (
    <LoginContext.Provider value={{ currentUser, login, logout, register, updateUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
