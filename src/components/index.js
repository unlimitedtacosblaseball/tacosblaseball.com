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
        <Link to="/seasonate" class="nav_link">
          <h3 class="yellow">View the #seasonATE page.</h3>
        </Link>
        <Link to="/snackrifice" class="nav_link">
          <h3 class="yellow">View the #SNACKRIFICE page.</h3>
        </Link>
        <div class="img-box">
          <img loading="lazy" src="https://media.discordapp.net/attachments/755560065645281360/755577280989888562/tacoconstruction.png" alt="This taco is under construction, check back soon."></img>
        </div>
        <p> This site is in progress. Stay tuned! </p>
        <Link to="/resources" class="nav_link">
          <h3 class="yellow">View team resources</h3></Link>
        <Bottom />
      </div>

    )
  }
}

export default Index
