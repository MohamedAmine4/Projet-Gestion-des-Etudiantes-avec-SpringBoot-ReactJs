import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cin, setCIN] = useState('');

  const setAuthData = (cinValue) => {
    setCIN(cinValue);
  };

  return (
    <AuthContext.Provider value={{ cin, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

