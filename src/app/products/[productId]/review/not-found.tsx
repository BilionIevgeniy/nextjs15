"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const path = usePathname();
  console.log("Not Found page path:", path);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="mt-4 text-lg text-gray-60">
        This is the not Review page of the application.
      </p>
    </div>
  );
}
