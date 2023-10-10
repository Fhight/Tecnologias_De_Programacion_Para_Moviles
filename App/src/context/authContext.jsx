import { createContext, useState } from 'react';

export const AuthContext = createContext({
  user: '',
});

import React from 'react';

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const handleLogin = (username, password) => {
    if (username === '' || password === '') return;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(username)) return;
    if (username === 'Pablo@gmail.com' && password === '123') {
      setUser(username);
      return true;
    }
    return false;
  };

  const handleLogOut = () => {
    setUser('');
  };

  const values = {
    user,
    handleLogin,
    handleLogOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
