import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import {store,persistor} from './store'
import {PersistGate} from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import {PersistGate} from 'redux-persist/integration/react'
import {BrowserRouter as Router} from 'react-router-dom'
ReactDOM.render(
 <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
     <Router>
    
     <App />
     
     </Router>
     </PersistGate>
</Provider>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
