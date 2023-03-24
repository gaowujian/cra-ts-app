import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CommodityModel from './models/CommodityModel';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CommodityModel initialState={{ name: 'wujian' }}>
      <App />
    </CommodityModel>
  </React.StrictMode>
);
