"use client";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import "./styles.css";

const navLinks = [
  { href: "/register", label: "Register" },
  { href: "/login", label: "Login" },
  { href: "/forgot-password", label: "Forgot Password" },
];

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <>
      <header
        style={{
          backgroundColor: "lightblue",
          padding: "1rem",
        }}
        className="header"
      >
        <h1>AuthRootLayout</h1>
        {navLinks.map((link) => {
          const isActive =
            pathName === link.href || pathName?.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
              href={link.href}
            >
              {link.label}
            </Link>
          );
        })}
      </header>
      <main
        style={{
          height: "calc(100vh - 265px)", // Adjust height to fill the remaining space
        }}
        className="main"
      >
        {children}
      </main>
      <footer
        style={{
          backgroundColor: "ghostwhite",
          padding: "1rem",
          height: "80px",
        }}
        className="footer"
      >
        <p>Footer</p>
      </footer>
    </>
  );
}
