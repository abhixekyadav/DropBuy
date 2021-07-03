const asyncErrorsMW = require("../middlewares/asyncErrorsMW");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Process stripe payments   =>   /api/v1/payment/process

exports.processPayment = asyncErrorsMW(async (req, res, next) => {
  const paymentIntent = await stripe.paymentIntents.create({
    description: "DropBuy services",
    shipping: {
      name: "DropBuy",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
    amount: req.body.amount,
    currency: "usd",

    metadata: { integration_check: "accept_a_payment" },
  });

  res.status(200).json({
    success: true,
    client_secret: paymentIntent.client_secret,
  });
});

// Send stripe API Key   =>   /api/v1/stripeapi
exports.sendStripApi = asyncErrorsMW(async (req, res, next) => {
  res.status(200).json({
    stripeApiKey: process.env.STRIPE_API_KEY,
  });
});
