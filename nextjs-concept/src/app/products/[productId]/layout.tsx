function genRandtomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = genRandtomInt(2);

  if (random == 1) {
    throw new Error("Error loading Product");
  }

  return (
    <>
      {children}
      <h2>Featured Products</h2>
    </>
  );
}
