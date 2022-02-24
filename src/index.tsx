import * as React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './context/Context';
import "./styles.css";
import "./styles.scss";
import App from './App';
import routes from './routes/index' 

var mountNode = document.getElementById("app");
ReactDOM.render(
    <Provider value={routes}>
            <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </Provider>,
    mountNode
);
