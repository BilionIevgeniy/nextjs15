"use client";

import Link from "next/link";
import { use } from "react";

type InternalLinkProps = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
};

export default function ArticlePage({
  params,
  searchParams,
}: InternalLinkProps) {
  // use - to unwrap the promise
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <>
      <h1>Article: {articleId}</h1>
      <p>Language: {lang}</p>
      <div className="flex items-center gap-2">
        <Link
          className="cursor-pointer underline"
          href={`/articles/${articleId}?lang=en`}
        >
          English
        </Link>
        <Link
          className="cursor-pointer underline"
          href={`/articles/${articleId}?lang=fr`}
        >
          French
        </Link>
        <Link
          className="cursor-pointer underline"
          href={`/articles/${articleId}?lang=es`}
        >
          Spanish
        </Link>
      </div>
    </>
  );
}
