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
const userToken = createToken({ id: "test", isAdmin: false });
let id = 'test';
/************************************** POST /api/products/ */

describe("POST /api/products/", function () {
    const newProduct = {
        title: 'test',
        description: 'test product',
        img: 'test image',
        price: 29
    };
  
    test("ok for admin", async function () {
      const resp = await request(app)
          .post("/api/products/")
          .send(newProduct)
          .set("token", `Bearer ${adminToken}`);
      expect(resp.statusCode).toEqual(200);
      id = resp.body._id 
      expect(resp.body).toEqual({
        title: expect.any(String),
        description: expect.any(String),
        img: expect.any(String),
        categories: [],
        size: [],
        color: [],
        price: 29,
        inStock: true,
        _id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        __v: 0
      });
    });
  
    test("unauth for users", async function () {
      const resp = await request(app)
          .post("/api/products/")
          .send(newProduct)
          .set("token", `Bearer ${userToken}`);
      expect(resp.statusCode).toEqual(403);
    });

    test("bad request with missing data", async function () {
      const resp = await request(app)
          .post("/api/products/")
          .send({
            title: 'test',
            description: 'test product',
          })
          .set("token", `Bearer ${adminToken}`);
      expect(resp.statusCode).toEqual(500);
    });
  
    test("bad request with invalid data", async function () {
      const resp = await request(app)
          .post("/jobs")
          .send({
            title: 'test',
            description: 22,
            img: 39,
            price: 29
          })
          .set("token", `Bearer ${adminToken}`);
      expect(resp.statusCode).toEqual(404);
    });
  });
  
  /************************************** GET /api/products/ */
  
  describe("GET /api/products/", function () {
    test("ok for anon", async function () {
      const resp = await request(app).get("/api/products/");
      expect(resp.statusCode).toEqual(200);
    });
  
    test("Get /api/products/ - filtering", async function(){
      const resp = await request(app).get("/api/products/").query({ new: "true"});
      expect(resp.statusCode).toEqual(200);
    });
  
  });
  
  /************************************** GET /api/products/:id */
  describe("GET /api/products/:id", function () {
    test("works for anon", async function () {
      const resp = await request(app).get(`/api/products/${id}`);
      expect(resp.body).toEqual({
        title: expect.any(String),
        description: expect.any(String),
        img: expect.any(String),
        categories: [],
        size: [],
        color: [],
        price: 29,
        inStock: true,
        _id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        __v: 0
      });
    });
  
  
    test("not found for no such job", async function () {
      const resp = await request(app).get(`/companies/nope`);
      expect(resp.statusCode).toEqual(404);
    });
  });
  
  /************************************** PUT /api/products/:id */
  
  describe("PUT /api/products/:id", function () {
    test("works for admin", async function () {
      const resp = await request(app)
          .put(`/api/products/${id}`)
          .send({
            title: "update",
          })
          .set("token", `Bearer ${adminToken}`);
          expect(resp.statusCode).toEqual(200);
      expect(resp.body).toEqual({
        title: "update",
        description: expect.any(String),
        img: expect.any(String),
        categories: [],
        size: [],
        color: [],
        price: 29,
        inStock: true,
        _id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        __v: 0
        })
    });

    test("unauth", async function () {
      const resp = await request(app)
          .put(`/api/products/${id}`)
          .send({
            title: "F1",
          })
          .set("token", `Bearer ${userToken}`);
      expect(resp.statusCode).toEqual(403);
    });
  

  });
  
  /************************************** DELETE /api/products/:id */
  
  describe("DELETE /api/products/:id", function () {
    test("works for admin", async function () {
      const resp = await request(app)
          .delete(`/api/products/${id}`)
          .set("token", `Bearer ${adminToken}`);
          expect(resp.statusCode).toEqual(200);
    });
  
    test("unauth for non admin", async function () {
      const resp = await request(app)
        .delete(`/api/products/${id}`)
        .set("token", `Bearer ${userToken}`);
      expect(resp.statusCode).toEqual(403);
    });
  
    test("unauth for anon", async function () {
      const resp = await request(app)
        .delete(`/api/products/${id}`)
      expect(resp.statusCode).toEqual(401);
    });
  
  });