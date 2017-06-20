import React from 'react'
import { Route } from 'react-router-dom';
import Index from '../components/Index';
import Login from '../components/Login';

class RouterConfig extends React.Component {
    render(){
        return (
            <div>
                <Route exact path="/" component={Index}/>
                <Route exact path="/login" component={Login}/>
            </div>
        );
    }
}

export default RouterConfig;