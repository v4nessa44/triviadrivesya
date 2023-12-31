// false url middleware handler
const notFound = (req, res, next) => {
  const error = new Error(`NOT FOUND - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// error handling middleware
const errorHandler = (err, req, res, next) => {
  // some errors have status code as 200, so let's replace that with a 500
  // const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(200);
  res.json({
    message: err.message,
  });
};

module.exports = { notFound, errorHandler };
