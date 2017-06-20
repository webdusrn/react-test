import React from 'react'
import * as service from '../services/session';

class Login extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            id: '',
            pw: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput (e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit (e) {
        service.postSession({
            type: 'email',
            uid: this.state.id,
            secret: this.state.pw
        }, function (status, data) {
            console.log(status, data);
        });
        e.preventDefault();
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="id" onChange={this.handleInput}/>
                    <input type="password" name="pw" onChange={this.handleInput}/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}

export default Login;