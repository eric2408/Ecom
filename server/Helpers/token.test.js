const jwt = require("jsonwebtoken");
const { createToken } = require("./token");
const dotenv = require('dotenv');
dotenv.config();

describe("createToken", function () {
  test("works: not admin", function () {
    const token = createToken({ id: "test", is_admin: false });
    const payload = jwt.verify(token, process.env.JWT_SECRET,
        {expiresIn:'2d'});
    expect(payload).toEqual({
      exp: expect.any(Number),
      iat: expect.any(Number),
    });
  });

  test("works: admin", function () {
    const token = createToken({ id: "test", isAdmin: true });
    const payload = jwt.verify(token, process.env.JWT_SECRET,
        {expiresIn:'2d'});
    expect(payload).toEqual({
      exp: expect.any(Number),
      iat: expect.any(Number),
      isAdmin: true,
    });
  });

  test("works: default no admin", function () {
    // given the security risk if this didn't work, checking this specifically
    const token = createToken({ id: "test" });
    const payload = jwt.verify(token, process.env.JWT_SECRET,
        {expiresIn:'2d'});
    expect(payload).toEqual({
        exp: expect.any(Number),
        iat: expect.any(Number),
    });
  });
});