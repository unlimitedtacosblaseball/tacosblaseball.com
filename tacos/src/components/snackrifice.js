import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Top from './top';
import Bottom from './bottom';

class Snackrifice extends Component {
  componentDidMount() {
    document.title = "Tacos Blaseball :: Snackrifice"
  }

  render() {
    return (
      <div id="main">
        <Top />
        <div id="snackrifice">
          <h3 class="yellow">#SNACKRIFICE</h3>
          <h2><span class="yellow">Stage 2:</span> Drop the Tacos</h2>
          <p>It's been a wild ride, but we still need your help.</p>
          <p>Now that our pitchers are shelled, it is important to preserve them for season 8. If you are idolizing them, stop now. We need them out of positions 14 and 21. We cannot risk blessing messing this up.</p>
          <br />
          <h2>Thank you for your support!</h2>
          <div class="img-box"><img src="https://cdn.discordapp.com/attachments/755560065645281360/756633189958549544/unknown.png"></img></div>
          <p>It will take us some time to put together the correct words to thank everyone who was involved in helping us achieve this monumental task.</p>
          <p>Thanks to your efforts, the Tacos were able to sacrifice our pitchers and save your players. We were also able to bring our challenge directly to the blaseball gods.</p>
          <p>Please come back for more information as we are able to collect it.</p>
          <h4>The Legume Descends</h4>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KhFnT42anvU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br />
          <h2><span class="yellow">Stage 1:</span> Save your players, Shell our pitchers.</h2>
          <p>Listen, we know you love getting filthy rich off of Axel Trololol or PolkaDot Patterson, but do you
          want
                them to be trapped in a peanut shell for the next season?</p>
          <h4>Here's the Plan</h4>
          <p>Get every single Tacos pitcher up to the top 10, above the red line. This will shell all of our
          pitchers
                (A natural evolution for a Taco) and save the other players.</p>
        </div>
        <div class="img-box"><img
          src="https://media.discordapp.net/attachments/734574989457621034/755809539974103050/Tacos-belong-in-shells-PixTeller.png"></img>
        </div>
        <div class="Leaderboard-List">
          <ul class="Leaderboard-Player-Container"><a class="Leaderboard-Player"
            href="https://dev.blaseball-reference.com/players/daniel-duffy" target="new">
            <div class="Leaderboard-Player-Name-Container">
              <div class="Leaderboard-Player-Position">1</div>
              <div class="Leaderboard-Player-Name"> Peanutiel Duffy</div>
            </div>
            <div class="Leaderboard-Team-Container">
              <div class="Leaderboard-Team-Color" style={ { background: 'rgb(92, 28, 28)' } }>
                <div class="Leaderboard-Team-Emoji">🐅</div>
              </div>
              <div class="Leaderboard-Team-Name">Hades Tigers</div>
            </div>
          </a><a class="Leaderboard-Player" href="https://dev.blaseball-reference.com/players/dan-holloway"
            target="new">
              <div class="Leaderboard-Player-Name-Container">
                <div class="Leaderboard-Player-Position">2</div>
                <div class="Leaderboard-Player-Name"> Peanut Holloway</div>
              </div>
              <div class="Leaderboard-Team-Container">
                <div class="Leaderboard-Team-Color" style={ { background: 'rgb(57, 157, 143)' } }>
                  <div class="Leaderboard-Team-Emoji">🥧</div>
                </div>
                <div class="Leaderboard-Team-Name">Philly Pies</div>
              </div>
            </a><a class="Leaderboard-Player" href="https://dev.blaseball-reference.com/players/dan-bong"
              target="new">
              <div class="Leaderboard-Player-Name-Container">
                <div class="Leaderboard-Player-Position">3</div>
                <div class="Leaderboard-Player-Name"> Peanut Bong</div>
              </div>
              <div class="Leaderboard-Team-Container">
                <div class="Leaderboard-Team-Color" style={ { background: 'rgb(145, 65, 186)' } }>
                  <div class="Leaderboard-Team-Emoji">🚤</div>
                </div>
                <div class="Leaderboard-Team-Name">Miami Dale</div>
              </div>
            </a><a className="Leaderboard-Player LeaderBoard-Shelled1"
              href="https://dev.blaseball-reference.com/players/jessica-telephone" target="new">
              <div class="Leaderboard-Player-Name-Container">
                <div class="Leaderboard-Player-Position">4</div>
                <div class="Leaderboard-Player-Name"> Jessica Telephone</div>
              </div>
              <div class="Leaderboard-Team-Container">
                <div class="Leaderboard-Team-Color" style={ { background: 'rgb(57, 157, 143)' } }>
                  <div class="Leaderboard-Team-Emoji">🥧</div>
                </div>
                <div class="Leaderboard-Team-Name">Philly Pies</div>
              </div>
              <div className="shelled2">SHELLED</div>
            </a><a className="Leaderboard-Player LeaderBoard-Shelled4"
              href="https://dev.blaseball-reference.com/players/nagomi-mcdaniel" target="new">
              <div class="Leaderboard-Player-Name-Container">
                <div class="Leaderboard-Player-Position">5</div>
                <div class="Leaderboard-Player-Name"> Nagomi Mcdaniel</div>
              </div>
              <div class="Leaderboard-Team-Container">
                <div class="Leaderboard-Team-Color" style={ { background: 'rgb(89, 48, 55)' } }>
                  <div class="Leaderboard-Team-Emoji">🦀</div>
                </div>
                <div class="Leaderboard-Team-Name">Baltimore Crabs</div>
              </div>
              <div className="shelled1">SHELLED</div>
            </a>
            <a class="Leaderboard-Player"
              href="https://dev.blaseball-reference.com/players/francisca-sasquatch" target="new">
              <div class="Leaderboard-Player-Name-Container">
                <div class="Leaderboard-Player-Position">6</div>
                <div class="Leaderboard-Player-Name"> Francisca Sasquatch</div>
              </div>
              <div class="Leaderboard-Team-Container">
                <div class="Leaderboard-Team-Color" style={ { background: 'rgb(100, 55, 110)' } }>
                  <div class="Leaderboard-Team-Emoji">🌮</div>
                </div>
                <div class="Leaderboard-Team-Name">Unlimited Tacos</div>
              </div>
            </a><a class="Leaderboard-Player" href="https://dev.blaseball-reference.com/players/sexton-wheeler"
              target="new">
              <div class="Leaderboard-Player-Name-Container">
                <div class="Leaderboard-Player-Position">7</div>
                <div class="Leaderboard-Player-Name"> Sexton Wheerer</div>
              </div>
              <div class="Leaderboard-Team-Container">
                <div class="Leaderboard-Team-Color" style={ { background: 'rgb(100, 55, 110)' } }>
                  <div class="Leaderboard-Team-Emoji">🌮</div>
                </div>
                <div class="Leaderboard-Team-Name">Unlimited Tacos</div>
              </div>
            </a><a class="Leaderboard-Player" href="https://dev.blaseball-reference.com/players/patel-beyonce"
              target="new">
              <div class="Leaderboard-Player-Name-Container">
                <div class="Leaderboard-Player-Position">8</div>
                <div class="Leaderboard-Player-Name"> Patel Beyonce</div>
              </div>
              <div class="Leaderboard-Team-Container">
                <div class="Leaderboard-Team-Color" style={ { background: 'rgb(100, 55, 110)' } }>
                  <div class=" Leaderboard-Team-Emoji">🌮</div>
                </div>
                <div class="Leaderboard-Team-Name">Unlimited Tacos</div>
              </div>
            </a><a class="Leaderboard-Player" href="https://dev.blaseball-reference.com/players/alejandro-leaf"
              target="new">
              <div class="Leaderboard-Player-Name-Container">
                <div class="Leaderboard-Player-Position">9</div>
                <div class="Leaderboard-Player-Name"> Alejandro Leaf</div>
              </div>
              <div class="Leaderboard-Team-Container">
                <div class="Leaderboard-Team-Color" style={ { background: 'rgb(100, 55, 110)' } }>
                  <div class="Leaderboard-Team-Emoji">🌮</div>
                </div>
                <div class="Leaderboard-Team-Name">Unlimited Tacos</div>
              </div>
            </a>
            <a class="Leaderboard-Player" href="https://dev.blaseball-reference.com/players/wyatt-pothos"
              target="new">
              <div class="Leaderboard-Player-Name-Container">
                <div class="Leaderboard-Player-Position">10</div>
                <div class="Leaderboard-Player-Name"> Wyatt Pothos</div>
              </div>
              <div class="Leaderboard-Team-Container">
                <div class="Leaderboard-Team-Color" style={ { background: 'rgb(100, 55, 110)' } }>
                  <div class="Leaderboard-Team-Emoji">🌮</div>
                </div>
                <div class="Leaderboard-Team-Name">Unlimited Tacos</div>
              </div>
            </a>
          </ul>
          <hr class="OminousRedLine-Line LessOminousRedLine"></hr>
        </div >
        <p>If you're not sure who to support, we have an easy guide that will match you with one of our lovely
                pitchers so you can give them the love and support they need.</p>
        <br />
        <span>
          <a id="pitcher_matcher"
            href="https://media.discordapp.net/attachments/755560065645281360/755568581374378026/tacolist2.png" target="new">
            🌮 Get Matched Here</a>
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
          <h2 class=" yellow">Go back home</h2>
        </Link>
        <Bottom />
      </div >

    )
  }
}

export default Snackrifice
