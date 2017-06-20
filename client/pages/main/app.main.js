import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import RouterConfig from './configs/Router';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            session: {}
        };
    }

    render(){
        return (
            <Router>
                <section>
                    <Header session={this.state.session}/>
                    <RouterConfig/>
                </section>
            </Router>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
