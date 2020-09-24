import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="footer">
        <Link to="/" class="nav_link">
          <h3 class="yellow">Go back home</h3>
        </Link>
        <p>Brought to you by the Unlimited Tacos.</p>
        <h1 class="yellow">EAT</h1>
      </div>
    )
  }
}

export default Nav
