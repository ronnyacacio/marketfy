import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import { AuthProvider } from './contexts/auth';
import GlobalStyle from '~/styles/global';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
