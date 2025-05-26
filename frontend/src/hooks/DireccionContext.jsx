import { createContext, useState } from "react";

export const DireccionContext = createContext();

export const DireccionProvider = ({ children }) => {
  const [direccionEnvio, setDireccionEnvio] = useState(null);

  return (
    <DireccionContext.Provider value={{ direccionEnvio, setDireccionEnvio }}>
      {children}
    </DireccionContext.Provider>
  );
};