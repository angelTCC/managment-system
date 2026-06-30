import Link from "next/link";

export default function Header() {
  return (
    <div className={"bg-blue-500"}>
      <div>
        <div>Logo</div>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
