import React from 'react'
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                    <p>{ this.props.session.email }</p>
                </header>
            </div>
        );
    }
}

export default Header;