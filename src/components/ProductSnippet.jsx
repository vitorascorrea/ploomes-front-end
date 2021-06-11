import { Link } from 'react-router-dom';

export const ProductSnippet = ({ product }) => {
  return (
    <li class="product-snippet">
      <div class="product-thumb">
        <img class="product-thumb-img" alt={product.Name} src={product.ThumbnailURL} />
      </div>
      <div class="product-snippet-info">
        <span class="product-name">
          {product.Name}
        </span>
        <span class="product-prices">
          <span class="product-price">
            ${product.Price}
          </span>
          <span class="product-retail-price">
            ${product['Retail Price']}
          </span>
        </span>
      </div>
      <div class="product-details-button">
        <Link to={"/product/" + product.ProductID} class="details-button">
          View Details
        </Link>
      </div>
    </li>
  );
}