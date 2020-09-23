import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Top from './top';
import Bottom from './bottom';

class Resources extends Component {
  componentDidMount() {
    document.title = "Tacos Blaseball :: Resources"
    document.getElementById("banner-subtext").innerText = "Sharing is caring";
  }

  render() {
    return (
      <div className="main">
        <Top />
        <h2>Team Resources</h2>
        <ul>
          <li><h3><a class="yellow" href="https://docs.google.com/spreadsheets/d/1BYOS1OvOxx3_9fg5t1UBHRXFastTxJmnP7xWpHr3YNU/edit#gid=935168686" target="new">The Menu</a></h3></li>
          <li><h3><a class="yellow" href="https://drive.google.com/file/d/1zClARg9yLVn6IWD4Gb7a_0HgiIvE1jEh/view" target="new">Welcome Presentation</a></h3></li>
          <li><h3><a class="yellow" href="https://docs.google.com/spreadsheets/d/1uC3fFzRmxWPQt8maFVWsDHo1kACiaM09R9CN9YUl5YU/edit#gid=1688490183" target="new">Strategy and coordination</a></h3></li>
        </ul>
        <br />
        <Link to="/" class="nav_link">
          <h3 class="yellow"> Go back home.</h3>
        </Link>
        <Bottom />
      </div>

    )
  }
}

export default Resources
