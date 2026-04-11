import React, { createContext, useState, useContext } from 'react';

type ProfileData = {
  name: string;
  username: string;
  bio: string;
};

type AppContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  profile: ProfileData;
  updateProfile: (newData: Partial<ProfileData>) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profile, setProfile] = useState<ProfileData>({
    name: 'John Doe',
    username: '@johndoe',
    bio: 'Mobile developer passionate about React Native and TypeScript'
  });

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const updateProfile = (newData: Partial<ProfileData>) => setProfile(prev => ({ ...prev, ...newData }));

  return (
    <AppContext.Provider value={{ isLoggedIn, login, logout, isDarkMode, toggleDarkMode, profile, updateProfile }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within an AppProvider");
  return context;
};
