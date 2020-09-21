import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Top from './top';
import Bottom from './bottom';

class Leaderboard extends Component {
  componentDidMount() {
    document.title = "Tacos Blaseball :: Home"
  }

  render() {
    return (
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
      </div>
    )
  }
}

export default Leaderboard
