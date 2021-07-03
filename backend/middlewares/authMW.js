const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const asyncErrorsMW = require("./asyncErrorsMW");

exports.isAuthenticated = asyncErrorsMW(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Login first", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);

  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(`Role (${req.user.role}) is not allowed access.`, 403)
      );
    }
    next();
  };
};
