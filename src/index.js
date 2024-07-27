import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'; 
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Auth0Provider
    domain="dev-a821m38g4emxqlxm.us.auth0.com"
    clientId="SsRHrqorgmVNVZfBe5tgbrJwOfMluP70"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  
    <App />
  
  </Auth0Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
