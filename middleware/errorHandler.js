// Page Not Found
const pageNotFound = (req, res, next) => {
  const statusCode = res.statusCode == 200 ? 404 : res.statusCode;
  res.status(statusCode).json({
    message: "404 Error - Page Not Found!",
  });
};

// Error Handler
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
  });
};

module.exports = { pageNotFound, errorHandler };
