import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Top from './top';
import Bottom from './bottom';
import Leaderboard from './mock-leaders';

class Snackrifice extends Component {
  componentDidMount() {
    document.title = "Tacos Blaseball :: Snackrifice";
    document.getElementById("banner-subtext").innerText = "We shelled our own pitchers";
  }

  render() {
    return (
      <div id="main">
        <Top />
        <div id="snackrifice">
          <h2 class="yellow">#SNACKRIFICE</h2>
          <h3>Thank you for your support!</h3>
          <div class="img-box"><img src="https://cdn.discordapp.com/attachments/734574989457621034/757365017787236382/og9NipC.png"></img></div>
          <p>Hello everyone,</p>
          <p>This is a message from the Tacos to you, yes you, the person reading this.</p>
          <p>First, thank you. The Community has proved with this success that we are capable of coming together and doing great things in the name of Blaseball, and we hope that willingness to band together continues. Splortsmanship is an important trait for the Tacos, and in this event we have ALL shown a willingness to come together under one goal, to unite, to rise up as one powerful voice and accomplish a monumental, nearly impossible task.</p>
          <p>The Tacos aren’t sure what’s going to happen tomorrow. Nothing has been revealed to us in any way, we can only wonder the same as everyone else. Regardless of the outcome, we are grateful to have completed this alongside you. This success is your success. </p>
          <p>Today we have made Blaseball history, not alone, but together, as a diverse and dedicated group of splorts fans. </p>
          <p><span class="yellow">WE</span> did it. </p>
          <p><span class="yellow">WE</span> won. </p>
          <p>All of us, together, made the Snackrifice Complete. </p>
          <p>Despite all else that has happened today, be proud. </p>
          <p>We are all love Blaseball. </p>
          <p>Love,</p>
          <p><span class="yellow">The Unlimited Tacos.</span></p>
          <Link to="/seasonate" class="nav_link">
            <h3 class=" yellow">See #seasonATE</h3>
          </Link>
          <div class="img-box"><img src="https://cdn.discordapp.com/attachments/755560065645281360/756633189958549544/unknown.png" alt="Leaderboard after #SNACKRIFICE showing all pitchers shelled."></img></div>
          <p>Thanks to your efforts, the Tacos were able to sacrifice our pitchers and save your players. We were also able to bring our challenge directly to the blaseball gods.</p>
          <h3><span class="yellow">Stage 2:</span> Drop the Tacos</h3>
          <p>It's been a wild ride, but we still need your help.</p>
          <p>Now that our pitchers are shelled, it is important to preserve them for season 8. If you are idolizing them, stop now. We need them out of positions 14 and 21. We cannot risk blessing messing this up.</p>
          <br />
          <h3>The Legume Descends</h3>
          <div class="vid-box">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KhFnT42anvU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="The Peanut Arrives"></iframe>
          </div>
          <br />
          <h3><span class="yellow">Stage 1:</span> Save your players, Shell our pitchers.</h3>
          <p>Listen, we know you love getting filthy rich off of Axel Trololol or PolkaDot Patterson, but do you want them to be trapped in a peanut shell for the next season?</p>
          <h4>Here's the Plan</h4>
          <p>Get every single Tacos pitcher up to the top 10, above the red line. This will shell all of our pitchers (A natural evolution for a Taco) and save the other players.</p>
        </div>
        <div class="img-box"><img
          src="https://media.discordapp.net/attachments/734574989457621034/755809539974103050/Tacos-belong-in-shells-PixTeller.png"></img>
        </div>
        <Leaderboard />
        <p>If you're not sure who to support, we have an easy guide that will match you with one of our lovely
                pitchers so you can give them the love and support they need.</p>
        <br />
        <span>
          <a id="pitcher_matcher"
            href="https://media.discordapp.net/attachments/755560065645281360/755568581374378026/tacolist2.png" target="new">
            🌮&nbsp;Get&nbsp;Matched&nbsp;Here</a>
          <br />
        </span>
        <br />
        <p>So what are you waiting for? Defy the gods!</p>
        <div><img
          src="https://media.discordapp.net/attachments/734574989457621034/755803529251258390/Going-on-siesta-PixTeller_2.png"></img><br />
        </div>
        <div id=" pics">
          <br />
          <details>
            <summary>Click here to view some infographics.</summary>
            <div><img loading="lazy"
              src="https://media.discordapp.net/attachments/755560065645281360/755568614681083994/Our_Snackrifice.png"></img>
            </div>
            <br />
            <div><img loading="lazy"
              src="https://media.discordapp.net/attachments/755560065645281360/755568625804378312/Idol-A-Taco.png"></img>
            </div>
            <br />
            <div><img loading="lazy"
              src="https://media.discordapp.net/attachments/755560065645281360/755568676630954044/snackrificesunrise.png"></img>
            </div>
            <div class="img-box"><img
              src="https://media.discordapp.net/attachments/734574989457621034/755801659963080865/day_80.png"></img>
            </div>
          </details>
        </div>
        <br />
        <Link to="/" class="nav_link">
          <h3 class=" yellow">Go back home</h3>
        </Link>
        <Bottom />
      </div >

    )
  }
}

export default Snackrifice
