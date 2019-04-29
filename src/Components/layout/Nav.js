import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class Nav extends Component {
  
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-info text-light" >
  <a className="navbar-brand" href="#" style={{color:"#ffffff"}}>Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/" className="nav-link" style={{color:"#ffffff"}}>Person <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link to="/add" className="nav-link" style={{color:"#ffffff"}}>Add</Link>
      </li>
      
    </ul>
  </div>
</nav>
         );
    }
}
 
export default Nav;