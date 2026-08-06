import Link from "next/link";

export default function page() {
  return (
    <>
      <h1>Welcome Home !</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <br />
      <Link href="/articles/breaking-news-1234?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-4321?lang=fr">Read in French</Link>
    </>
  );
}
