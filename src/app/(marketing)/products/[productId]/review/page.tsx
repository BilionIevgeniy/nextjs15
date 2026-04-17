export default async function Review({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return <h1>Review page for product {productId} of the</h1>;
}
