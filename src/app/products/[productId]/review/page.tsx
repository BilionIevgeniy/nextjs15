export default async function Review({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const awaitedParams = await params;
  console.log("Product page params:", awaitedParams);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="mt-4 text-lg text-gray-600">
        This is the Review of product {awaitedParams.productId} page of the
        application.
      </p>
    </main>
  );
}
