import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {HashRouter} from 'react-router-dom';
import './index.css';
import App from './components/app/App';
import './components/pages/styles/home.css';
import './components/pages/styles/about.css';
import './components/pages/styles/projects.css';
import './components/layout/styles/topnavbar.css';

ReactDOM.render((
        <HashRouter basename={process.env.PUBLIC_URL}>
            <App />
        </HashRouter>
    ), document.getElementById('root'));

