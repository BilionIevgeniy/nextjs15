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
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <>
      <h1>Article: {articleId}</h1>
      <p>Language: {lang}</p>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
      </div>
    </>
  );
}
