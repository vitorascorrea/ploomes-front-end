import { getProducts } from "./getProducts";

export const getProductById = (id) => {
  const numericId = parseInt(id);
  const allProducts = getProducts();

  return allProducts.find(p => p.ProductID === numericId);
}