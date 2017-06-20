import './assets/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function increase(diff) {
    return {
        type: INCREMENT,
        addBy: diff
    };
}

function decrease(diff) {
    return {
        type: DECREMENT,
        addBy: -diff
    };
}

const initialState = {
    value: 0
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + action.addBy
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value + action.addBy
            });
        default:
            return state;
    }
};

const store = createStore(counterReducer);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.onClickIncrement = this.onClickIncrement.bind(this);
        this.onClickDecrement = this.onClickDecrement.bind(this);
    }

    render() {

        let centerStyle = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            MsUserSelect:'none',
            userSelect: 'none',
            cursor: 'pointer'
        };

        return (
            <div style={ centerStyle }>
                <h1> {this.props.store.getState().value} </h1>
                <button type="button" onClick={ this.onClickIncrement }>INCREMENT</button>
                <button type="button" onClick={ this.onClickDecrement }>DECREMENT</button>
            </div>
        )
    }

    onClickIncrement() {
        this.props.store.dispatch(increase(1));
    }
    onClickDecrement() {
        this.props.store.dispatch(decrease(1));
    }
}

const render = () => {

    const appElement = document.getElementById('root');
    ReactDOM.render(
        <App store={store}/>,
        appElement
    );
};

store.subscribe(render);
render();
