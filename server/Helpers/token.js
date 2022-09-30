const jwt = require("jsonwebtoken");

/** return signed JWT from user data. */

function createToken(user) {    
return jwt.sign({
    id:user._id,
    isAdmin: user.isAdmin
}, 
process.env.JWT_SECRET,
{expiresIn:'2d'}
)
}

module.exports = { createToken };