// For Server component
// import Link from "next/link";

// export default async function NewsArticle({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ articleId: String }>;
//   searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
// }) {
//   const { articleId } = await params;
//   const { lang = "en" } = await searchParams;

//   return (
//     <>
//       <div>News article {articleId}</div>
//       <div>Read in {lang}</div>
//       <br></br>
//       <div>
//         <Link href={`/articles/${articleId}?lang=en`}>English</Link>
//         <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
//         <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
//       </div>
//     </>
//   );
// }

"use client";
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: String }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <>
      <div>News article {articleId}</div>
      <div>Read in {lang}</div>
      <br></br>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </>
  );
}
