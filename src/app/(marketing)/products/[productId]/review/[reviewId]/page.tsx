import { notFound, redirect } from "next/navigation";

export default async function Product({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  const awaitedParams = await params;
  const { reviewId, productId } = awaitedParams;
  if (parseInt(reviewId) > 5 && parseInt(reviewId) <= 10) {
    notFound(); // notFound() is a server action that throws a 404 error and search for closest not-found page
  }
  if (parseInt(reviewId) > 10) {
    redirect("/"); // redirect() is a server action that redirects to the specified path
  }
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
