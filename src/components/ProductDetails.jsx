import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../library/getProductById";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(getProductById(id));
  }, [id]);

  return (
    <>
      {!product && null}
      {product &&
        <div className="product-details-wrapper">
          <div className="product-image">
            <img alt={product.Name} src={product.PictureURL} />
            <strong>Brand:</strong> {product.Brand}
            <br></br>
            <strong>Color:</strong> {product.Color}
          </div>
          <div className="product-info">
            <span className="product-name">{product.Name}</span>
            <span className="product-rating">{product.RatingAvg + "/5"}</span>
            <span className="product-description">
            {product.Description}
            </span>
          </div>
          <div className="product-cart">
            <span className="product-price">
              {product.Price}
              <span className="product-retail-price">{product['Retail Price']}</span>
            </span>
            {product.Stock === 0 &&
              <span className="out-of-stock">
                Out of stock
              </span>
            }
            <button className="product-details-button details-button">
              <span className="details-button" onClick={() => alert('Added to cart')}>
                Add to Cart
              </span>
            </button>
          </div>
        </div>
      }
    </>
  );
}