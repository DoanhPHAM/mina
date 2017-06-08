import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';

import App from './components/App'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let routes = (
    <BrowserRouter>
        <Route path='/' component={App} />
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
