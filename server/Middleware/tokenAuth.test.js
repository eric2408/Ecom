const jwt = require("jsonwebtoken");
const {
  authenticateJWT,
} = require("./tokenAuth");
const dotenv = require('dotenv');
dotenv.config();

const testJwt = jwt.sign({ id: "test", isAdmin: false }, process.env.JWT_SECRET);
const badJwt = jwt.sign({ username: "test", isAdmin: false }, "wrong");


describe("authenticateJWT", function () {

  test("valid token", function () {
    const req = { headers: { token: `Bearer ${testJwt}` } };
    const res = {};
    const next = function (err) {
      expect(err).toBeFalsy();
    };
    authenticateJWT(req, res, next);
    expect(req).toEqual({
      headers: { token: `Bearer ${testJwt}` },
      user: {
        iat: expect.any(Number),
        id: "test",
        isAdmin: false,
      },
    });
  });

});

