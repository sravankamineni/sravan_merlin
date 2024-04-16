import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <GoogleOAuthProvider clientId="944152093318-8og6qb664nkuqgp9q62g05ogp7qoen48.apps.googleusercontent.com">
      <BrowserRouter>
        <App />
      </BrowserRouter>
        
      </GoogleOAuthProvider>
 
   

  </React.StrictMode>
);

