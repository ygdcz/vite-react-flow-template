import React from 'react';
import ReactDOM from 'react-dom/client';
import '@xyflow/react/dist/style.css'


import App from './learn/overview';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ height: '100vh', width: '100vw' }}>
      <App />
    </div>
  </React.StrictMode>
);
