import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    <GlobalStyle/>
    </>
  );
}
export default App;