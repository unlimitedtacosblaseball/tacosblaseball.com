import Link from "next/link";
import Beta from "./Beta/Beta"

export default function Header() {
  return (
    <nav>
      <div class="header">
        <Link href="/">
          <h1>The LA Unlimited Tacos</h1>
        </Link>
        <h2 id="banner-subtext">Anti&#8209;Capitalist and proud of it</h2>
        <Beta />
      </div>
    </nav>
  );
}