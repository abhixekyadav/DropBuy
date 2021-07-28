import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ shipping, confirmOrder, payment }) => {
  return (
    // <div className="checkout-progress d-flex justify-content-center mt-5">
    //   {shipping ? (
    //     <Link to="/shippping" className="float-right">
    //       <div className="triangle2-active"></div>
    //       <div className="step active-step">Shipping</div>
    //       <div className="triangle-active"></div>
    //     </Link>
    //   ) : (
    //     <Link to="#!" disabled>
    //       <div className="triangle2-incomplete"></div>
    //       <div className="step incomplete">Shipping</div>
    //       <div className="triangle-incomplete"></div>
    //     </Link>
    //   )}

    //   {confirmOrder ? (
    //     <Link to="/order/confirm" className="float-right">
    //       <div className="triangle2-active"></div>
    //       <div className="step active-step">Confirm Order</div>
    //       <div className="triangle-active"></div>
    //     </Link>
    //   ) : (
    //     <Link to="#!" disabled>
    //       <div className="triangle2-incomplete"></div>
    //       <div className="step incomplete">Confirm Order</div>
    //       <div className="triangle-incomplete"></div>
    //     </Link>
    //   )}

    //   {payment ? (
    //     <Link to="/payment" className="float-right">
    //       <div className="triangle2-active"></div>
    //       <div className="step active-step">Payment</div>
    //       <div className="triangle-active"></div>
    //     </Link>
    //   ) : (
    //     <Link to="#!" disabled>
    //       <div className="triangle2-incomplete"></div>
    //       <div className="step incomplete">Payment</div>
    //       <div className="triangle-incomplete"></div>
    //     </Link>
    //   )}
    // </div>
    <div className="checkout-progress d-flex justify-content-center mt-5">
      {shipping ? (
        <Link to="/shipping" className="float-right mx-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill=""
            className="bi bi-info-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
        </Link>
      ) : (
        <Link to="#!" className="float-right mx-5" disabled>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill=""
            className="bi bi-info-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </Link>
      )}

      {confirmOrder ? (
        <Link to="/order/confirm" className="float-right mx-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill=""
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </Link>
      ) : (
        <Link to="#!" className="float-right mx-5" disabled>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill=""
            className="bi bi-check-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
        </Link>
      )}

      {payment ? (
        <Link to="/payment" className="float-right mx-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill=""
            className="bi bi-credit-card-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
          </svg>
        </Link>
      ) : (
        <Link to="#!" className="float-right mx-5" disabled>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill=""
            className="bi bi-credit-card"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default CheckoutSteps;
