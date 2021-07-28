import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, col }) => {
  return (
    <div className={`m-1`}>
      {/* col-xs-6 col-sm-6 col-md-3 col-lg-${col} my-2 */}
      <div className="p-2">
        <div className="productCardDiv position-relative">
          <img
            className="card-img-top img-responsive px-2"
            src={product.images[0].url}
            width="100%"
          />
        </div>

        <div className="card-body d-flex flex-column">
          <span className="seller">{product.seller.toUpperCase()}</span>
          <div className="card-title my-1 text-wrap">
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </div>

          <span className="card-text mb-1">
            ${product.price}
            <div className="ratings d-inline ml-2">
              <div className="rating-outer">
                <div
                  className="rating-inner"
                  style={{ width: `${(product.ratings / 5) * 100}%` }}
                ></div>
              </div>
              <span id="no_of_reviews">({product.numberOfReviews})</span>
            </div>
          </span>

          <Link
            to={`/product/${product._id}`}
            id="view_btn"
            className="btn btn-block"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
