import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MetaMaskProvider } from "metamask-react";


ReactDOM.render(
  <MetaMaskProvider>
    <App />
    </MetaMaskProvider>,
  document.getElementById('root')
);
