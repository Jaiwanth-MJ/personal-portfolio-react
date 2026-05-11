import React, { createContext, useEffect, useState } from 'react';

export const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState(() => {
    const stored = localStorage.getItem('preferences');

    return stored
      ? JSON.parse(stored)
      : {
          particleIntensity: 80,
          motion: true,
          contrast: 'normal',
        };
  });

  useEffect(() => {
    localStorage.setItem('preferences', JSON.stringify(preferences));
  }, [preferences]);

  return (
    <PreferencesContext.Provider
      value={{ preferences, setPreferences }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};