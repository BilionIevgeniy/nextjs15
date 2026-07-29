import Link from "next/link";

export default function F1Page() {
  return (
    <div className="flex flex-col gap-4">
      F1 Page
      <Link className="underline" href="/f1/f2">
        To F2
      </Link>
      <Link className="underline" href="/f3">
        To F3
      </Link>
    </div>
  );
}
