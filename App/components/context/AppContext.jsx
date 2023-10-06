import { createContext, useState } from 'react';

const themeInfo = {
  dark: true,
  theme: 'black',
};

export const AppContext = createContext();

import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';

const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeInfo);

  const handleIsTheme = () => {
    setTheme({
      dark: !theme.dark,
      theme: !theme.dark ? 'black' : 'white',
    });
  };

  const values = {
    theme,
    handleIsTheme,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

const styles = StyleSheet.create({});
