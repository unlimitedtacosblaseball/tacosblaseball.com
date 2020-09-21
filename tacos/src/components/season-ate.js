import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Top from './top';
import Bottom from './bottom';

class seasonATE extends Component {
  componentDidMount() {
    document.title = "Tacos Blaseball :: seasonATE"
  }

  render() {
    return (
      <div id="main">
        <Top />
        <div id="snackrifice">
          <h3 class="yellow">#seasonATE</h3>
          <div class="img-box">
            <img src="https://cdn.discordapp.com/attachments/734574989457621034/757708864111247461/image0.png" alt="Contents in plain text below"></img>
          </div>
          <p>Hi there, Tacos here!</p>
          <p>First off, thank you EVERYONE for making this goal of ours last season come true. It started as a way to demonstrate to The Peanut that they aren't our boss and that still remains true. Also, to quote one of the keepers, a commitment to beta-testing</p>
          <p>We would like to just put forward a few things which we have established about our brand new (slightly used) pitching machine and how it relates to last season's <span class="yellow">#SNACKRIFICE</span></p>
          <p>1) The Tacos aren't striking against the ILB nor the commissioner. Pitching Machine is a wonderful compromise between the Tacos and the league to continue to play ball while respecting the <span class="yellow">#SNACKRIFICE</span></p>
          <p>2) We LOVE the pitching machine. Defiance to the Gods is not the same as defiance to the ILB. We would appreciate it if our lovely pitching machine (with its "This machine kills capitalism" sticker) is not referred to as a scab. It didn't ask for this and, well until further notice, it doesn't really ask. We are unsure of its sentience</p>
          <p>3) The commissioner is doing a great job</p>
          <p>From the Unlimited Los Angeli Tacos</p>
        </div>
        <br />
        <Link to="/snackrifice" class="nav_link">
          <h2 class="yellow">Go to the #SNACKRIFICE page</h2>
        </Link>
        <Link to="/" class="nav_link">
          <h2 class="yellow">Go back home</h2>
        </Link>
        <Bottom />
      </div >

    )
  }
}

export default seasonATE
