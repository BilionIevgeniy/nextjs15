import { Metadata } from "next";

type ProductProps = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: ProductProps): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title: `Product ${productId}`,
    description: `Details about product ${productId}`,
  };
};

export default async function Product({ params }: ProductProps) {
  const { productId } = await params;
  return <h1>Product {productId}</h1>;
}
