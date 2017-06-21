import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../actions';

class Header extends React.Component {
    render() {
        let sessionButton = null;
        if (this.props.session && this.props.session.id) {
            sessionButton = <button type="button" onClick={ this.props.logout }>LOGOUT</button>;
        } else {
            sessionButton = <button type="button"><Link to="/login">LOGIN</Link></button>;
        }

        return (
            <header>
                <p>{ this.props.session.email }</p>
                <button type="button"><Link to="/">HOME</Link></button>
                { sessionButton }
            </header>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        session: state.session.session
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        logout: () => actions.session.logout(dispatch)
    }
};

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;