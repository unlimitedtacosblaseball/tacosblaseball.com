import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Top extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <h1>The Los&nbsp;Angeli Unlimited&nbsp;Tacos</h1>
          <h2 id="banner-subtext">Anti&#8209;Capitalist and proud of it</h2>
          <div id="beta">
            Beta
          </div>
        </Link>
      </div>
    )
  }
}

export default Top
