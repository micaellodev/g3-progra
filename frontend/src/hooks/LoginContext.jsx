import { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined); // undefined inicialmente para loading
  const [users, setUsers] = useState([]);

  // Cargar datos al inicializar
  useEffect(() => {
    try {
      // Cargar usuarios guardados
      const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      setUsers(savedUsers);
      
      // Cargar usuario actual
      const savedCurrentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
      setCurrentUser(savedCurrentUser);
    } catch (error) {
      console.error('Error cargando datos:', error);
      setCurrentUser(null);
      setUsers([]);
    }
  }, []);

  // Guardar usuarios cuando cambien
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, [users]);

  // Guardar usuario actual cuando cambie
  useEffect(() => {
    if (currentUser !== undefined) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
  }, [currentUser]);

  const register = (newUser) => {
    console.log('Registrando usuario:', newUser);
    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
  };

  const login = (credentials) => {
    console.log('Intentando login:', credentials);
    const found = users.find(
      user => user.email === credentials.email && user.password === credentials.password
    );
    if (found) {
      console.log('Usuario encontrado:', found);
      setCurrentUser(found);
      return true;
    }
    console.log('Usuario no encontrado');
    return false;
  };

  const logout = () => {
    console.log('Cerrando sesión');
    setCurrentUser(null);
  };

  const updateUser = (updatedUser) => {
    console.log('Actualizando usuario:', updatedUser);
    
    // Actualizar en la lista de usuarios
    setUsers(prev =>
      prev.map(user =>
        user.email === updatedUser.email ? updatedUser : user
      )
    );
    
    // Actualizar usuario actual
    setCurrentUser(updatedUser);
  };

  const value = {
    currentUser,
    users,
    login,
    logout,
    register,
    updateUser
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
    throw new Error('useLogin debe ser usado dentro de LoginProvider');
  }
  return context;
};

// Exportar el contexto también si lo necesitas en otros lugares
export { LoginContext };