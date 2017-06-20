import './assets/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers);
const appElement = document.getElementById('root');

import Header from './components/Header';
import Login from './components/Login';

class App extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'center'} }>
                <Header/>
                <Login/>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    appElement
);