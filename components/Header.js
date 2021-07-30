import Link from "next/link";
import Beta from "./Beta"

export default function Header() {
  return (
    <>
      <nav>
        <div className="header">
          <Link href="/" passHref>
            <h1 className="fade-out-element">The LA Unlimited Tacos</h1>
          </Link>
          <h2 id="banner-subtext">oh no</h2>
          <Beta />
        </div>
      </nav>
      <style jsx>{`
        .header {
          width: 100%;
          text-align: center;
          margin: 18px 0px;
          padding: 0 0 5px 0;
          position: relative;
          /* border-bottom: 5px solid #64376e; */
          perspective: 250px;
        }

        .header:after {
          content:'';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #64376e;
          height: 5px;
          border-radius: 10px;
        }

        .header h1 {
          font-family: 'Pacifico';
          text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 2px 2px 5px #fff, 2px 2px 10px #000;
          color: #9c80a6;
        }

        .header h2 {
          font-family: 'ChunkFive', sans-serif;
          color: #FACF33;
          text-shadow: 0px 2px 5px #fff, 0px 2px 10px #000;
          -webkit-text-stroke: 1px black;
          -webkit-text-fill-color: #FACF33;
          transform: rotateX(20deg);
        }

        .fade-out-element {
          display: inline-block;
          animation-name: fadeOut;
          animation-duration 5s;
          animation-fill-mode: forwards;
        }

        @keyframes fadeOut {
          0% {opacity:1;}
          100% {opacity:0;}
        }
        
        `}
      </style>
    </>
  );
}