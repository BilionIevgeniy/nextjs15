"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleBuyNow = () => {
    console.log("Buy Now");
    router.push("/");
  };

  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
}
