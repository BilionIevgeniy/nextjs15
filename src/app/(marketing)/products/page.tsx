import Link from "next/link.js";

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <p>Here you can find all our products.</p>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/products/3">Product 3</Link>
      </h2>
    </>
  );
}
