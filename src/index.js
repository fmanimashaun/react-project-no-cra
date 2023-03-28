import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';
import IMG from './img/react.svg';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <dev>
    <h1>Hello from React application</h1>
    <img src={IMG} className="logo react" alt="react logo" />
  </dev>
);