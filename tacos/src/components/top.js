import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Top extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/"><h1>The Unlimited Tacos Homepage</h1></Link>
        <div id="beta">
          <p>Beta</p>
        </div>
      </div>
    )
  }
}

export default Top
