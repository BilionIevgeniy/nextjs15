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
          <li>
            <Link href="/articles/breaking-news-123?lang=en">
              Read in English
            </Link>
          </li>
          <li>
            <Link href="/articles/breaking-news-123?lang=fr">
              Read in French
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
