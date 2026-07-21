"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const path = usePathname();
  console.log("Not Found page path:", path);
  const productId = path?.split("/")[2];
  const reviewId = path?.split("/")[4];
  return (
    <h1>
      Review {reviewId} for product {productId} was not found
    </h1>
  );
}
