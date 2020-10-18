import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="footer">
        <Link to="/" className="nav_link">
          <h3 className="yellow">Go back home</h3>
        </Link>
        <p>Brought to you by the Unlimited Tacos.</p>
        <h2>EAT</h2>
      </div>
    )
  }
}

export default Nav
