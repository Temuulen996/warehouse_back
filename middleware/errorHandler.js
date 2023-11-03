const errorHandler = (err, req, res, next) => {
  console.log(err.stack.green);
  const error = { ...err };

  res.status(error.statusCode || 500).json({
    success: false,
    error,
    code: error.statusCode,
  });
};
module.exports = errorHandler;
