import React, { createContext, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isAdmin, setAdmin] = useState(false);


  useEffect(() => {
    setAdmin(localStorage.getItem("isAdmin"))
  }, [children])

  return (
    <GlobalContext.Provider value={{isAdmin, setAdmin }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);