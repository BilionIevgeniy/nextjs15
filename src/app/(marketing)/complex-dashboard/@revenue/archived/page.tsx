import { Card } from "@/components/card";
import Link from "next/link";

export default function Archived() {
  return (
    <Card>
      <h2>Revenue Archived</h2>
      <div>
        <Link className="text-blue-500" href="/complex-dashboard">
          Default
        </Link>
      </div>
    </Card>
  );
}
