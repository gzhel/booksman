import React from 'react';
import ReactDOM from 'react-dom';
import App from './bootstrap/App';
import reportWebVitals from './reportWebVitals';
import "./assets/styles/main.scss";
import './assets/styles/bootstrap.min.css';

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));

reportWebVitals();
