import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  

  useEffect(() => {
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  // Use a function to update userData and localStorage
  const updateUserData = (data) => {
    setUserData(data);
    localStorage.setItem('employees', JSON.stringify(data)); // Save to localStorage
  };

  return (
    <AuthContext.Provider value={[userData, updateUserData]}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
