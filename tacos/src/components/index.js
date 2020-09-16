import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Top from './top';
import Bottom from './bottom';

class Index extends Component {
  componentDidMount() {
    document.title = "Tacos Blaseball :: Home"
  }

  render() {
    return (
      <div className="main">
        <Top />
        <Link to="/snackrifice" class="nav_link">
          <h2 class="yellow"> View the snackrifice page.</h2>
        </Link>
        <div class="img-box">
          <img loading="lazy" src="https://media.discordapp.net/attachments/755560065645281360/755577280989888562/tacoconstruction.png" alt="This taco is under construction, check back soon."></img>
        </div>
        <h4> This site is in progress. Stay tuned! </h4>
        <Bottom />
      </div>

    )
  }
}

export default Index
