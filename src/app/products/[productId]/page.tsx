export default async function Product({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  console.log("Product page params:", productId);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="mt-4 text-lg text-gray-600">
        This is the product {productId} page of the application.
      </p>
    </main>
  );
}
