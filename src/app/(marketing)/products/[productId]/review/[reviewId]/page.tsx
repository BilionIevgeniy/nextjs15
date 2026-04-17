import { notFound } from "next/navigation";

export default async function Product({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  const awaitedParams = await params;
  const { reviewId, productId } = awaitedParams;
  if (parseInt(reviewId) > 5) {
    notFound();
  }
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
