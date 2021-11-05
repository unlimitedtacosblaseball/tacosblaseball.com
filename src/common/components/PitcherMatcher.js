export default function PitcherMatcher() {
  return (
    <>
      <div>
        <a id="pitcher_matcher" href="https://media.discordapp.net/attachments/755560065645281360/755568581374378026/tacolist2.png" target="new">
          &nbsp;🌮&nbsp;Get&nbsp;Matched&nbsp;Here&nbsp;
        </a>
      </div>
      <style jsx>{`
          #pitcher_matcher {
            padding: 10px;
            background-color: rgb(100, 55, 110);
            border-radius: 1em;
            font-size: 24px;
            font-weight: 600;
            box-sizing: content-box;
          }  
          
          @media screen and (min-width: 1000px) {
            #pitcher_matcher {
              font-size: calc(24px + 8 * ((100vw - 320px) / 680));
            }
          }
      `}</style>
    </>
  );
}