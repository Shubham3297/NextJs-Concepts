"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return <h1>Error in Review Id -{error.message}</h1>;
}
