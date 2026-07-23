import { Card } from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <h2>Notifications</h2>
      <div>
        <Link className="text-blue-500" href="/complex-dashboard/archived">
          Archived
        </Link>
      </div>
    </Card>
  );
}
