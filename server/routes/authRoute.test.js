const request = require("supertest");
const dotenv = require('dotenv');
dotenv.config();
const app = require("../index");
const { createToken } = require("../Helpers/token");

const mongoose = require("mongoose");

beforeEach(async () => {
    await mongoose.connect(process.env.Mongo_Pw);
  });

afterEach(async () => {
    await mongoose.connection.close();
  });

const adminToken = createToken({ id: "test", isAdmin: true });
let userId;  
/************************************** POST /api/auth/login */

describe("POST /api/auth/login", function () {
  test("works", async function () {
    const resp = await request(app)
        .post('/api/auth/login')
        .send({
          username: "joe",
          password: "123",
        });
    expect(resp.body).toEqual({
        _id: expect.any(String),
        email: 'joe123@gmail.com',
        username: 'joe',
        isAdmin: true,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        __v: 0,
        img: expect.any(String),
        accessToken: expect.any(String)
    });
  });

  test("unauth with non-existent user", async function () {
    const resp = await request(app)
        .post("/api/auth/login")
        .send({
          username: "no-such-user",
          password: "password1",
        });
    expect(resp.statusCode).toEqual(401);
  });

  test("unauth with wrong password", async function () {
    const resp = await request(app)
        .post("/api/auth/login")
        .send({
          username: "u1",
          password: "nope",
        });
    expect(resp.statusCode).toEqual(401);
  });

  test("bad request with missing data", async function () {
    const resp = await request(app)
        .post("/api/auth/login")
        .send({
          username: "u1",
        });
    expect(resp.statusCode).toEqual(401);
  });

  test("bad request with invalid data", async function () {
    const resp = await request(app)
        .post("/api/auth/login")
        .send({
          username: 42,
          password: "above-is-a-number",
        });
    expect(resp.statusCode).toEqual(401);
  });
});

/************************************** POST /api/auth/register */

describe("POST /api/auth/register", function () {
  test("works for anon", async function () {
    const resp = await request(app)
        .post("/api/auth/register")
        .send({
          username: "new",
          firstName: "first",
          lastName: "last",
          password: "password",
          email: "new@email.com",
        });
    expect(resp.statusCode).toEqual(201);
        userId = resp.body._id
    expect(resp.body).toEqual({
        _id: expect.any(String),
        email: 'new@email.com',
        username: 'new',
        isAdmin: false,
        password:expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        __v: 0
    });
  });

  test("bad request with missing fields", async function () {
    const resp = await request(app)
        .post("/api/auth/register")
        .send({
          username: "new",
        });
    expect(resp.statusCode).toEqual(500);
  });

});

describe("Delete /api/users/:id", function () {
  test("works for admin", async function () {
    const resp = await request(app)
        .delete(`/api/users/${userId}`)
        .set("token", `Bearer ${adminToken}`);
        expect(resp.statusCode).toEqual(200);
  });

});