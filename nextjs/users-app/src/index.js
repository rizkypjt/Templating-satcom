import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import Routing from './Route/Routes'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
