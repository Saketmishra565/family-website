import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('default'); // default, haldi, mehendi, shadi

  const themes = {
    default: { primary: '#8b5cf6', bg: '#030014' },
    haldi: { primary: '#fbbf24', bg: '#451a03' },
    mehendi: { primary: '#10b981', bg: '#064e3b' },
    shadi: { primary: '#ef4444', bg: '#450a0a' }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themeData: themes[currentTheme] }}>
      <div style={{ '--primary-color': themes[currentTheme].primary }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);