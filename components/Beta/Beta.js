export default function Beta() {
  return (
    <>
      <div id="beta">
      Beta
      </div>
      <style jsx>{`
          /* eltrov added this for the BETA tag */
          #beta {
            margin: 10px;
            padding: 5px;
            font-family: "Open Sans", "Helvetica Neue", sans-serif;
            font-weight: 400;
            font-size: 14px;
            font-weight: 700;
            border-radius:3px;
            text-transform: uppercase;
            background:hsla(0, 0%, 39.6%, .65098);
          }          
        `}
      </style>
    </>
  );
}