import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/index';
import { StoreContext, store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  // </React.StrictMode>
);
