export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: String }>;
}) {
  const productId = (await params).productId;
  return <h1>Product Details - {productId}</h1>;
}
