import React, { Component } from 'react';

class NarBar extends Component {
    render() { 
        return (
            <nav className='navbar navbar-light bg-light'>
                <a className='navbar-brand' href='tbt'>
                    Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
                </a>
            </nav>
        );
    }
}
 
export default NarBar;