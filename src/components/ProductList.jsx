import { ProductSnippet } from "./ProductSnippet";

export const ProductList = ({ productList }) => {
  return (
    <ul class="product-list">
      {productList.map((product, index) => {
        return (
          <ProductSnippet key={index} product={product} />
        );
      })}
    </ul>
  );
}
