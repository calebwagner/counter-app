import React, { Component } from 'react';

// Stateless Functional Component
// can't use lifecycle hooks in stateless components
const NavBar = ({totalCounters}) => {
    console.log("NavBar - Rendered")

    return (
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand' href='tbt'>
                Navbar{""}
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
}

// class NavBar extends Component {
//     render() {
//         return (
//             <nav className='navbar navbar-light bg-light'>
//                 <a className='navbar-brand' href='tbt'>
//                     Navbar
//                     <span className="badge badge-pill badge-secondary">
//                         {this.props.totalCounters}
//                     </span>
//                 </a>
//             </nav>
//         );
//     }
// }
 
export default NavBar;