import React, { useState } from "react";
import { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../actions/productActions";

const FrontPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 10000]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [hdn, setHdn] = useState("false");

  const dispatch = useDispatch();

  const clickHandler = (cat) => {
    dispatch(getProducts("", currentPage, price, cat, rating));
    setCategory("");
    setHdn(!hdn);
  };
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
    </Fragment>
  );
};

export default FrontPage;
