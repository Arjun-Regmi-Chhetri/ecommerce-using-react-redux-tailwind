import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './state/store.js';
import { persistor } from './state/store.js';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
