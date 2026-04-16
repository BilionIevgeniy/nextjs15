import { notFound } from "next/navigation";

export default async function Product({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  const awaitedParams = await params;
  const { reviewId, productId } = awaitedParams;
  console.log("Review page params:", awaitedParams);
  if (parseInt(reviewId) > 5) {
    notFound();
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="mt-4 text-lg text-gray-600">
        This is the review {reviewId} page for product {productId} of the
        application.
      </p>
    </main>
  );
}
