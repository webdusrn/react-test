import './assets/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import reducers from './reducers';
import RouteConfig from './services/RouteConfig';

const store = createStore(reducers);
const appElement = document.getElementById('root');

import Header from './components/Header';
import Login from './components/Login';

class App extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'center'} }>
                <Header/>
                <RouteConfig />
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    appElement
);