import Link from "next/link.js";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "2px solid red", padding: "1rem" }}>
      <Link href="/products">To Products</Link>
      {children}
    </div>
  );
}
