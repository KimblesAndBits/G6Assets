module.exports = function() {
  // eslint-disable-next-line no-unused-vars
  const sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
      res.json("/admin");
    } else {
      next();
    }
  };
};
