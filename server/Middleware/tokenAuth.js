const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.token;

    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) res.status(403).json("Non valid token");
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json(`You are not logged in! ${authHeader}`);
    }
  };
  
  const ensureCorrectUserOrAdmin = (req, res, next) => {
    authenticateJWT(req, res, () => {
      if (req.user.isAdmin || req.user.id === req.params.id ) {
        next();
      } else {
        res.status(403).json("Access Denied");
      }
    });
  };
  
  const ensureAdmin = (req, res, next) => {
    authenticateJWT(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("Not Admin");
      }
    });
  };
  
  module.exports = {
    authenticateJWT,
    ensureCorrectUserOrAdmin,
    ensureAdmin
  };