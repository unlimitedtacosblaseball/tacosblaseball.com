import Link from "next/link";
import Beta from "./Beta/Beta"

export default function Header() {
  return (
    <>
      <nav>
        <div class="header">
          <Link href="/">
            <h1>The LA Unlimited Tacos</h1>
          </Link>
          <h2 id="banner-subtext">Anti&#8209;Capitalist and proud of it</h2>
          <Beta />
        </div>
      </nav>
      <style jsx>{`
        nav {
          width: 100%;
          text-align: center;
          margin: 18px 0px;
          padding: 0px;
          padding-bottom: 5px;
          position: relative;
          /* border-bottom: 5px solid #64376e; */
          perspective: 250px;
        }
        nav:after {
          content:'';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #64376e;
          height: 5px;
          border-radius: 10px;
        }

        h1 {
          font-family: 'Pacifico';
          text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 2px 2px 5px #fff, 2px 2px 10px #000;
        }
        `}
      </style>
    </>
  );
}