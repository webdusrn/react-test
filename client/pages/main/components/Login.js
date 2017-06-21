import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import actions from '../actions';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            pw: ''
        };

        this.onChangeInput = this.onChangeInput.bind(this);
        this.login = this.login.bind(this);
    }

    render() {
        let redirect = null;
        if (this.props.session.id) {
            redirect = <Redirect to="/"/>;
        }
        return (
            <div>
                { redirect }
                <form onSubmit={ this.login }>
                    <input type="email" name="id" value={ this.state.id } onChange={ this.onChangeInput }/>
                    <input type="password" name="pw" value={ this.state.pw } onChange={ this.onChangeInput }/>
                    <input type="submit" value="LOGIN"/>
                </form>
            </div>
        );
    }

    onChangeInput(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    login(e) {
        e.preventDefault();
        this.props.login({
            type: "email",
            uid: this.state.id,
            secret: this.state.pw
        });
    }
}

let mapStateToProps = (state) => {
    return {
        session: state.session.session
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        login: (value) => actions.session.login(dispatch, value)
    };
};

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;