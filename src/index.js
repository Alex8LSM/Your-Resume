import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import './index.css';
import {UserContext,user} from 'data';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Your-Resume/">
    <UserContext.Provider value={user}>
      <App />
    </UserContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
