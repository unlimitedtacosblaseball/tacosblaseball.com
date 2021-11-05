// Code heavily based off of the Breath Mints' bet spread tool, located at https://mints.iliana.fyi/dutch/

export default function BetterMatcher() {

  let username = "evie tacos";
  let group = "14";
  let team = [
    {id:  0, name: "Atlantis Georgias", nickname:"Georgias", emoji: '🔱', color: "rgb(0, 219, 194)"},
    {id:  1, name: "Baltimore Crabs", nickname: "Crabs", emoji: "🦀", color: "rgb(89, 48, 55)"},
    {id:  2, name: "Breckenridge Jazz Hands", nickname: "Jazz Hands", emoji: "👐", color: "rgb(99, 136, 173)"},
    {id:  3, name: "Boston Flowers", nickname: "Flowers", emoji: "🌹", color: "rgb(247, 209, 255)"},
    {id:  4, name: "Canada Moist Talkers", nickname: "Moist Talkers", emoji: "🗣", color: "rgb(245, 254, 255)"},
    {id:  5, name: "Chicago Firefighters", nickname: "Firefighters", emoji: "🔥", color: "rgb(140, 42, 62)"},
    {id:  6, name: "Charleston Shoe Thieves", nickname: "Shoe Thieves", emoji: "👟", color: "rgb(255, 206, 10)"},
    {id:  7, name: "Core Mechanics", nickname: "Mechanics", emoji: "🛠", color: "rgb(209, 49, 0)"},
    {id:  8, name: "Dallas Steaks", nickname: "Steaks", emoji: "🥩", color: "rgb(140, 141, 143)"},
    {id:  9, name: "Hades Tigers", nickname: "Tigers", emoji: "🐅", color: "rgb(92, 28, 28)"},
    {id: 10, name: "Hawai'i Fridays", nickname: "Fridays", emoji: "🏝", color: "rgb(62, 230, 82)"},
    {id: 11, name: "Houston Spies", nickname: "Spies", emoji: "🕵", color: "rgb(103, 85, 107)"},
    {id: 12, name: "Kansas City Breath Mints", nickname: "Breath Mints", emoji: "🍬", color: "rgb(23, 143, 85)"},
    {id: 13, name: "LA Unlimited Tacos", nickname: "Tacos", emoji: "🌮", color: "rgb(100, 55, 110)"},
    {id: 14, name: "Mexico City Wild Wings", nickname: "Wild Wings", emoji: "🍗", color: "rgb(209, 87, 0)"},
    {id: 15, name: "Miami Dale", nickname: "Dale", emoji: "🚤", color: "rgb(145, 65, 186)"},
    {id: 16, name: "New York Millennials", nickname: "Millennials", emoji: "📱", color: "rgb(255, 212, 216)"},
    {id: 17, name: "Ohio Worms", nickname: "Worms", emoji: "🐌", color: "rgb(92, 72, 34)"},
    {id: 18, name: "Philly Pies", nickname: "Pies", emoji: "🥧", color: "rgb(57, 157, 143)"},
    {id: 19, name: "Seattle Garages", nickname: "Garages", emoji: "🎸", color: "rgb(43, 64, 117)"},
    {id: 20, name: "San Francisco Lovers", nickname: "Lovers", emoji: "💋", color: "rgb(120, 0, 24)"},
    {id: 21, name: "Hellmouth Sunbeams", nickname: "Sunbeams", emoji: "🌞", color: "rgb(255, 251, 171)"},
    {id: 22, name: "Tokyo Lift", nickname: "Lift", emoji: "🏋️‍♀️", color: "rgb(232, 48, 171)"},
    {id: 23, name: "Yellowstone Magic", nickname: "Magic", emoji: "✨", color: "rgb(191, 0, 67)"}
  ];

  function picksgen() {
    let picks = [];
    for (let i = 0; i < 4; i++) {
      picks.push({id:0, team: team[Math.floor(Math.random() * 24)]});
    }

    return picks;
  }

  let games = [
    {id: 0, day: 69, picks: picksgen()},
    {id: 1, day: 69, picks: picksgen()},
    {id: 2, day: 69, picks: picksgen()},
    {id: 3, day: 69, picks: picksgen()},
    {id: 4, day: 69, picks: picksgen()}
  ];



  return (
    // Original code ~~stolen~~ borrowed from iliana
    // <p><strong>Logged in as {{username}} — Group: {{group}}</strong></p>
    // {% for (day, games) in schedule %}
    // <h2>Day {{day}}</h2>
    // <ul>
    //   {% for i in 0..picks.len() %}
    //   {% let game = games[i] %}
    //   {% let team = game.team(picks[i]) %}
    //   <li>
    //     <span class="emoji" style="background-color: {{team.color}};">{{team.emoji}}</span>
    //     <br>
    //     {{team.nickname}}
    //   </li>
    //   {% endfor %}
    // </ul>
    // {% endfor %}
  
    <>
      <p><strong>Logged in as {username} — Group: {group}</strong></p>

      {games.map((games) => (
        <>
        <div key={games.id}>
          <h2>Day {games.day}</h2>
          <ul>
              {games.picks.map((picks) => (
                <li key={picks.id}>
                  <span className="emoji" style={{backgroundColor: picks.team.color}}>{picks.team.emoji}</span>
                  <br/>
                  {picks.team.nickname}
                </li>
              ))}
          </ul>
        </div>
        </>
      ))}

      
      <style jsx>{`
        /* body {
        font-family: "Lora", "Courier New", monospace, serif;
        line-height: 1.5;
        background-color: #eee;
        text-align: center;
        } */

        @media (prefers-color-scheme: dark) {
          body {
            background-color: black;
            color: #eee;
          }
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          display: inline-block;
          margin: 0 1em 1em 1em;
          width: 7em;
        }

        .emoji {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 1.667em;
          height: 1.667em;
          font-size: 1.75rem;
          margin-bottom: .25em;
          border-radius: 50%;
        }
      `}</style>
    </>
    
  );
}

