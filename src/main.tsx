import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './routes/router';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from './contexts/UserContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <Router />
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
