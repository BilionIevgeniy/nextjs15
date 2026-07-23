export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h1>Blog page</h1>;
}
