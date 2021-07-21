import Link from "next/link";

export default function Footer() {
  return (
    <div class="footer">
      <Link href="/" class="nav_link">
        <h3 class="yellow">Go back home</h3>
      </Link>
      <p>Brought to you by the LA Unlimited Tacos.</p>
      <h2>EAT</h2>
    </div>
  );
}