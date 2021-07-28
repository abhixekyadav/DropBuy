import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import MetaData from "./layout/MetaData";
import { getProducts } from "../actions/productActions";
import Product from "./product/Product";
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

  // let count = productCount;
  // if (keyword) {
  //   count = filteredProductsCount;
  // }
  const count = filteredProductsCount;
  return (
    <Fragment>
      {window.screen.width > 922 ? (
        <div className="row">
          <img
            className="col-xs-10 col-lg-12"
            src="/images/fp.png"
            alt=""
            onClick={() => clickHandler("Clothing, Shoes and Jewelry")}
            hidden={!hdn}
            style={{ cursor: "pointer" }}
          />
        </div>
      ) : (
        <div className="row">
          <img
            className="col-xs-10 col-lg-12"
            src="/images/fp1.png"
            alt=""
            onClick={() => clickHandler("Clothing, Shoes and Jewelry")}
            hidden={!hdn}
            style={{ cursor: "pointer" }}
          />
          <img
            className="col-xs-10 col-lg-12"
            src="/images/fp2.png"
            alt=""
            onClick={() => clickHandler("Clothing, Shoes and Jewelry")}
            hidden={!hdn}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}

      {window.screen.width > 922 ? (
        <div className="row">
          <img
            className="col-xs-5 col-lg-6 img-fluid p-0"
            src="/images/mbpro13.jpg"
            alt=""
            onClick={() => clickHandler("Computers")}
            hidden={!hdn}
            style={{ cursor: "pointer" }}
          />
          <img
            className="col-xs-5 col-lg-6 img-fluid p-0"
            src="/images/iPhoneWhite.jpg"
            alt=""
            onClick={() => clickHandler("Cell Phones and Accessories")}
            hidden={!hdn}
            style={{ cursor: "pointer" }}
          />
        </div>
      ) : (
        <Carousel pause="hover" hidden={!hdn}>
          <Carousel.Item key="1">
            <img
              className="img-fluid"
              src="/images/mbpro13.jpg"
              alt=""
              onClick={() => clickHandler("Computers")}
              hidden={!hdn}
              style={{ cursor: "pointer" }}
            />
          </Carousel.Item>

          <Carousel.Item key="2">
            <img
              className="img-fluid"
              src="/images/iPhoneWhite.jpg"
              alt=""
              onClick={() => clickHandler("Cell Phones and Accessories")}
              hidden={!hdn}
              style={{ cursor: "pointer" }}
            />
          </Carousel.Item>
        </Carousel>
      )}

      <div className="row">
        <img
          className="col-xs-10 col-lg-12"
          src="/images/game.jpg"
          alt=""
          onClick={() => clickHandler("Video Games")}
          hidden={!hdn}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* PRODUCTS */}

      {loading ? (
        <Loader />
      ) : (
        !hdn && (
          <Fragment>
            <MetaData title={"Online Shopping"} />

            <section id="products" className="container">
              {/* <h1 id="products_heading">Home / {category || keyword}</h1> */}

              <div className="row">
                {/* keyword || category */}
                {true ? (
                  <Fragment>
                    <div className="col-6 col-md-3 mt-5 mb-5">
                      <div className="pr-3">
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

                        <hr className="my-5" />

                        <div className="">
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
                        </div>

                        <hr className="my-3" />

                        <div className="mt-5">
                          <h4 className="mb-3">Ratings</h4>

                          <ul className="pl-0">
                            {[5, 4, 3, 2, 1].map((star) => (
                              <li
                                style={{
                                  cursor: "pointer",
                                  listStyleType: "none",
                                }}
                                key={star}
                                onClick={() => setRating(star)}
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
                    </div>
                    <div className="row container col-9 mt-5 mb-5">
                      {products.map((product) => (
                        <Product key={product._id} product={product} col={4} />
                      ))}
                    </div>
                  </Fragment>
                ) : (
                  products.map((product) => (
                    <Product key={product._id} product={product} col={3} />
                  ))
                )}
              </div>
            </section>

            {resPerPage <= count && (
              <div className="d-flex justify-content-center mt-5">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resPerPage}
                  totalItemsCount={filteredProductsCount}
                  // totalItemsCount={filteredProductsCount || productCount}
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
