/* eslint-disable no-unused-vars */
import React from 'react';
import LoginPage from '../pages/login-page';
import "antd/dist/antd.css";
import './App.scss';
import OrdersPage from '../pages/orders-list-page';

function App() {
  return (
    <div className="app">
      <OrdersPage />
    </div>
  );
}

export default App;
