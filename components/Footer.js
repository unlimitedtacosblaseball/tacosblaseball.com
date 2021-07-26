import Link from "next/link";
import Yellow from "./Yellow";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Link href="/" className="nav_link" passHref>
          <h3><Yellow>Go back home</Yellow></h3>
        </Link>
        <p>Brought to you by the LA Unlimited Tacos.</p>
        <h2>EAT</h2>
      </div>

      <style jsx>{`
      .footer {
        width: 100%;
        text-align: center;
        margin: 10px 0px;
        padding: 10px 5px 5px 5px;
        /* border-top: 5px solid #64376e; */
        perspective: 200px;
      }
      .footer:before {
        content:'';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: #64376e;
          height: 5px;
          border-radius: 10px;
      }

      .footer h2 {
        font-family: 'ChunkFive', sans-serif;
        color: #FACF33;
        text-shadow: 0px 2px 5px #fff, 0px 2px 10px #000;
        -webkit-text-stroke: 1px black;
        -webkit-text-fill-color: #FACF33;
        transform: rotateX(20deg);
      }
      `}
      </style>
    </>
  );
}