import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

class Header extends React.Component {
    render() {
        let logOutButton = null;
        if (this.props.session && this.props.session.id) {
            logOutButton = <button type="button" onClick={ this.props.logout }>LOGOUT</button>;
        }

        return (
            <header>
                <p>{ this.props.session.email }</p>
                { logOutButton }
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