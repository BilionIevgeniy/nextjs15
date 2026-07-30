import { type NextRequest } from "next/server";
import { headers } from "next/headers";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  // Create a new Headers object from the request headers method
  const requestHeaders = new Headers(request.headers);
  console.log("new Headers", requestHeaders.get("Authorization"));

  // Get the headers from the request
  const headersList = await headers();
  console.log("headers()", headersList.get("Authorization"));

  // Get the theme cookie from the request
  const theme = request.cookies.get("theme");
  console.log(theme); // { name: 'theme', value: 'dark', options: {} }

  // Get the cookie store from the request
  const cookieStore = await cookies();
  cookieStore.set("resultsPerPage", "20");
  console.log(cookieStore.get("resultsPerPage")); // { name: 'resultsPerPage', value: '20', options: {} }

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": `theme=dark`,
    },
  });
}
