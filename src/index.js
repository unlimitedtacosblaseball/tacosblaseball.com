import React from 'react';
import ReactDOM from 'react-dom';
import './source.css';
import './styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// Don't register the service worker; It will break since we load the markdown
// files on request.
serviceWorker.unregister();
