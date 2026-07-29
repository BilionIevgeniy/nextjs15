// prefix -2 means that this page will be intercepted by the parent layout
// and it necessary and shows nextjs where the target route is located
// (.) means that this page is in the same directory as the parent layout
export default function InterceptedF2Page() {
  return <div>Intercepted F2 Page</div>;
}
