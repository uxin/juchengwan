import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "@/store/index";
import "react-flexible";  //rem
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// store将数据仓库注册全局
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
