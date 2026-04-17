"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const path = usePathname();
  console.log("Not Found page path:", path);
  return <h1>Review not Found</h1>;
}
