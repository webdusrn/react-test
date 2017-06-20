import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        return (
            <header>
                <p>{ this.props.session.email }</p>
            </header>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        session: state.session.session
    };
};

Header = connect(mapStateToProps)(Header);

export default Header;