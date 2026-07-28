import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: String }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const Id = (await params).productId;
  return {
    title: `Product ${Id}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  return <h1>Product Details - {productId}</h1>;
}

// Old - 1
// export default async function ProductDetails({
//   params,
// }: {
//   params: Promise<{ productId: String }>;
// }) {
//   const productId = (await params).productId;
//   return <h1>Product Details - {productId}</h1>;
// }
