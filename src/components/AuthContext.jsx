import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // No need to load from DB

  useEffect(() => {
    // Check if there's a user in local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const register = async (username, password, email) => {
    // Simulate registration
    const newUser = { username, email };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return true; // Registration successful
  };

  const login = async (username, password) => {
    // Simulate login
    const storedUser = localStorage.getItem('users');
    if (storedUser) {
      const users = JSON.parse(storedUser);
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        setUser({ username: user.username, email: user.email });
        localStorage.setItem('user', JSON.stringify({ username: user.username, email: user.email }));
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
