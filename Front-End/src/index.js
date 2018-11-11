import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();