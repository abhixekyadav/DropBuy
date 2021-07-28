import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import MetaData from "./layout/MetaData";
import { getProducts } from "../actions/productActions";
import ProductPh from "./product/ProductPh";
import Loader from "./layout/Loader";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const FPHome = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 10000]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [hdn, setHdn] = useState("false");

  const categories = [
    "Appliances",
    "Beauty and Personal Care",
    "Books",
    "Cell Phones and Accessories",
    "Clothing, Shoes and Jewelry",
    "Computers",
    "Electronics",
    "Grocery and Gourmet Food",
    "Health, Household and Baby Care",
    "Home and Kitchen",
    "Luggage and Travel Gear",
    "Musical Instruments",
    "Sports and Outdoors",
    "Toys and Games",
    "Video Games",
  ];

  const dispatch = useDispatch();
  const alert = useAlert();

  const clickHandler = (cat) => {
    dispatch(getProducts("", currentPage, price, cat, rating));
    setCategory("");
    setHdn(!hdn);
  };

  const {
    loading,
    products,
    error,
    productCount,
    resPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getProducts(keyword, currentPage, price, category, rating));
  }, [dispatch, alert, error, keyword, currentPage, price, category, rating]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  let count = productCount;
  if (keyword) {
    count = filteredProductsCount;
  }
  return (
    <Fragment>
      {/* PRODUCTS */}

      {loading ? (
        <Loader />
      ) : (
        hdn && (
          <Fragment>
            <MetaData title={"Online Shopping"} />

            <section id="products" className="">
              {/* <h1 id="products_heading">Home / {category || keyword}</h1> */}

              <div className="row">
                <div className="col-12 text-center border-left border-bottom">
                  <button
                    className="mb-2 border-0  filter"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-filter mr-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    Filters
                  </button>
                </div>
              </div>

              <div className="collapse" id="collapseExample">
                <div className="row card mx-3 pr-3">
                  {/* keyword || category */}

                  <Fragment>
                    <div className="mt-5 mb-2">
                      <div className="p-4">
                        <Range
                          marks={{
                            1: `$1`,
                            10000: `$10,000`,
                          }}
                          min={1}
                          max={10000}
                          defaultValue={[1, 10000]}
                          tipFormatter={(value) => `$${value}`}
                          tipProps={{
                            placement: "top",
                            visible: true,
                          }}
                          value={price}
                          onChange={(price) => setPrice(price)}
                        />

                        <hr className="mt-5 mb-4" />

                        <h4 className="mb-3">Categories</h4>

                        <ul className="pl-0">
                          {categories.map((category) => (
                            <li
                              style={{
                                cursor: "pointer",
                                listStyleType: "none",
                              }}
                              key={category}
                              onClick={() => setCategory(category)}
                            >
                              {category}
                            </li>
                          ))}
                        </ul>

                        <hr className="my-4" />

                        <h4 className="mb-3">Ratings</h4>

                        <ul className="pl-0">
                          {[5, 4, 3, 2, 1].map((star) => (
                            <li
                              style={{
                                cursor: "pointer",
                                listStyleType: "none",
                              }}
                              key={star}
                              onClick={() => setRating(rating)}
                            >
                              <div className="rating-outer">
                                <div
                                  className="rating-inner"
                                  style={{
                                    width: `${star * 20}%`,
                                  }}
                                ></div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Fragment>
                </div>
              </div>

              <div className="row mt-5 mb-5 pr-4 pl-2">
                {products.map((product) => (
                  <ProductPh key={product._id} product={product} col={6} />
                ))}
              </div>
            </section>

            {resPerPage <= count && (
              <div className="d-flex justify-content-center mt-5">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resPerPage}
                  totalItemsCount={filteredProductsCount || productCount}
                  onChange={setCurrentPageNo}
                  nextPageText={">"}
                  prevPageText={"<"}
                  firstPageText={"First"}
                  lastPageText={"Last"}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </div>
            )}
          </Fragment>
        )
      )}
    </Fragment>
  );
};

export default FPHome;
