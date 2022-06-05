const request = require("supertest");
const app = require("../app");
const Customer = require("../models/account");

describe("test create route", () => {
  const todo = {
    accountNumber: "123456",
    amount: 12,
    phoneNumber: "080234",
  };
  const todo2 = [
    {
      accountNumber: "123456",
      amount: 12,
    },
  ];

  test("Should have key record and msg when created", async () => {
    const mockCreateTodo = jest.fn(() => todo);
    jest.spyOn(Customer, "create").mockImplementation(() => mockCreateTodo());

    const res = await request(app).post("/api").send(todo).expect(200);

    expect(mockCreateTodo).toHaveBeenCalledTimes(1);
    expect(res.body).toHaveProperty("amount");
    expect(res.body).toHaveProperty("phoneNumber");
  });

  // test("Should have key record and msg when created", async () => {
  //   await request(app).post("/api").send(todo);
  //   const mockCreateTodo = jest.fn(() => todo);

  //   jest.spyOn(Customer, "findOne").mockImplementation(() => mockCreateTodo());

  //   const res = await request(app)
  //     .patch("/api/transfer")
  //     .send(todo2)
  //     .expect(200);

  // expect(mockCreateTodo).toHaveBeenCalledTimes(1);
  // expect(res.body).toHaveProperty("amount");
  // expect(res.body).toHaveProperty("phoneNumber");
  //});
});
