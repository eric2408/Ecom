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
let id;

/************************************** PUT /api/users/:id */
    describe("POST /api/auth/register", function () {
    test("works for anon", async function () {
      const resp = await request(app)
          .post("/api/auth/register")
          .send({
            username: "test2",
            firstName: "test",
            lastName: "two",
            password: "testtwo",
            email: "test2@email.com",
          });
      id = resp.body._id;    
      expect(resp.statusCode).toEqual(201);
      
    }); 
    });

    describe("PUT /api/users/:id", () => {
        test("works for admins", async function () {
          const resp = await request(app)
              .put(`/api/users/${id}`)
              .send({
                username: "great",
              })
              .set("token", `Bearer ${adminToken}`);
          expect(resp.body).toEqual({
            _id: expect.any(String),
            email: "test2@email.com",
            username: 'great',
            isAdmin: false,
            password:expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            __v: 0
          });
        });
      
      
        test("unauth for anon", async function () {
          const resp = await request(app)
              .put(`/api/users/${id}`)
              .send({
                firstName: "New",
              });
          expect(resp.statusCode).toEqual(401);
        });
      
    
      });
 
  
  /************************************** GET /api/users/:id */
  
  describe("GET /api/users/:id", function () {
    test("works for admin", async function () {
      const resp = await request(app)
          .get(`/api/users/${id}`)
          .set("token", `Bearer ${adminToken}`);
      expect(resp.body).toEqual({
        others: {
            _id: expect.any(String),
            email: 'test2@email.com',
            username: 'great',
            isAdmin: expect.any(Boolean),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            __v: 0
          }
      });
    });
  

  });
  

  
  
 /************************************** GET /api/users */
  
 describe("GET /api/users", function () {
    test("works for admins", async function () {
      const resp = await request(app)
          .get("/api/users")
          .set("token", `Bearer ${adminToken}`);
          expect(resp.statusCode).toEqual(200);
    });
  
    test("unauth for non-admin users", async function () {
      const resp = await request(app)
          .get("/api/users")
          .set("token", `Bearer ${userToken}`);
      expect(resp.statusCode).toEqual(403);
    });
  
    test("unauth for anon", async function () {
      const resp = await request(app)
          .get("/api/users");
      expect(resp.statusCode).toEqual(401);
    });

  });



  describe("Delete /api/users/:id", function () {
    test("works for admin", async function () {
      const resp = await request(app)
          .delete(`/api/users/${id}`)
          .set("token", `Bearer ${adminToken}`);
          expect(resp.statusCode).toEqual(200);
    });
  

  });