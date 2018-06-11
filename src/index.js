import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import './styles/styles.css';
import App from './components/App';


import { loadCourses } from "./actions/courseActions";
import { loadAuthors } from "./actions/authorActions";

const store = configureStore();
// OnInit methods to call thunks 
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
