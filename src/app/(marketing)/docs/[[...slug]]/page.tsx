export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug && slug.length === 1) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p className="mt-4 text-lg text-gray-600">
          This is the feature{slug[0]}
        </p>
      </main>
    );
  } else if (slug && slug.length === 2) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p className="mt-4 text-lg text-gray-600">
          This is the feature &quot;{slug[0]}&quot; and concept &quot;{slug[1]}
          &quot; .
        </p>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="mt-4 text-lg text-gray-600">
        This is the documentation page of the application.
      </p>
    </main>
  );
}
