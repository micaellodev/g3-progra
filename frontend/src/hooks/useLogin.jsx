import { useState, useEffect } from 'react';

const useLogin = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

 const updateUser = (updatedData) => {
  const updatedUser = { ...currentUser, ...updatedData };
  setCurrentUser(updatedUser);
  localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  localStorage.setItem('registeredUser', JSON.stringify(updatedUser)); // <- Agregado
};

  return { currentUser, login, logout, updateUser };
};

export default useLogin;
