// AuthProvider.js

import React, { useState } from 'react';
// import AuthContext from './AuthContext';

// import AuthContext from '../components/context';
import { AuthContext } from '../components/context'; 

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (userData) => {
    // Your sign-in logic here
    setUser(userData);
  };

  const signOut = () => {
    // Your sign-out logic here
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
