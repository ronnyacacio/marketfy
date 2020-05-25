import React, { useState, useEffect, useContext, createContext } from 'react';

import api from '~/services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    async function loadStorageData() {
      const storageProvider = localStorage.getItem('@MarketFy:provider');
      const storageToken = localStorage.getItem('@MarketFy:token');

      if (storageProvider && storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;
        setProvider(JSON.parse(storageProvider));
      }
    }
    loadStorageData();
  }, []);

  async function signIn(email, password) {
    try {
      const response = await api.post('providers/sessions', {
        email,
        password,
      });

      const { token } = response.data;

      setProvider(response.data.provider);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      localStorage.setItem(
        '@MarketFy:provider',
        JSON.stringify(response.data.provider)
      );
      localStorage.setItem('@MarketFy:token', token);
    } catch (err) {
      console.log(err);
    }
  }

  function signOut() {
    localStorage.clear();
    setProvider(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!provider, provider, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
