import Link from "next/link.js";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
