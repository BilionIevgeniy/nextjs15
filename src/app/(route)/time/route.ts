export const dynamic = "force-static";

// revalidate = 10 means that the route will be revalidated every 10 seconds
export const revalidate = 10;

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
