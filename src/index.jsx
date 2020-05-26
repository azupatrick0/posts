import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

toast.configure();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);