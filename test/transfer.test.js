const request = require("supertest");
const app = require("../app");
const Account = require("../models/account");

describe("test transfer route", () => {
  let transfer = [
    {
      accountNumber: "123456",
      amount: 12,
    },
  ];

  test("Should have validation error when account number field is missing ", async () => {
    transfer = [
      {
        amount: 12,
      },
    ];
    const mockTransfer = jest.fn(() => transfer);
    jest.spyOn(Account, "update").mockImplementation(() => mockTransfer());

    const res = await request(app).post("/api").send(transfer);

    expect(res.body).toHaveProperty("location");
    expect(res.body).toHaveProperty("msg");
    expect(res.body).toHaveProperty("param");
  });

  test("Should have validation error when amount field is missing ", async () => {
    transfer = [
      {
        accountNumber: "123456",
      },
    ];
    const mockTransfer = jest.fn(() => transfer);
    jest.spyOn(Account, "update").mockImplementation(() => mockTransfer());

    const res = await request(app).post("/api").send(transfer);

    expect(res.body).toHaveProperty("location");
    expect(res.body).toHaveProperty("msg");
    expect(res.body).toHaveProperty("param");
  });

  test("Should not update account when failed validation ", async () => {
    transfer = [
      {
        accountNumber: "123456",
      },
    ];
    const mockTransfer = jest.fn(() => transfer);
    jest.spyOn(Account, "update").mockImplementation(() => mockTransfer());

    const res = await request(app).post("/api").send(transfer);

    expect(mockTransfer).toHaveBeenCalledTimes(0);
  });
});

describe("test create route", () => {
  let create = {
    accountNumber: "123456",
    amount: 12,
    phoneNumber: "080234",
  };
  const transfer = [
    {
      accountNumber: "123456",
      amount: 12,
    },
  ];

  test("Should have key amount, phoneNumber and accountNumber when created", async () => {
    const mockCreateTodo = jest.fn(() => create);
    jest.spyOn(Account, "create").mockImplementation(() => mockCreateTodo());

    const res = await request(app).post("/api").send(create).expect(200);

    expect(mockCreateTodo).toHaveBeenCalledTimes(1);
    expect(res.body).toHaveProperty("amount");
    expect(res.body).toHaveProperty("phoneNumber");
    expect(res.body).toHaveProperty("accountNumber");
  });

  test("Should have validation error when account number field is missing ", async () => {
    create = {
      amount: 12,
      phoneNumber: "080234",
    };
    const mockCreate = jest.fn(() => create);
    jest.spyOn(Account, "create").mockImplementation(() => mockCreate());

    const res = await request(app).post("/api").send(create);

    expect(res.body).toHaveProperty("location");
    expect(res.body).toHaveProperty("msg");
    expect(res.body).toHaveProperty("param");
  });

  test("Should have validation error when amount field is missing ", async () => {
    create = {
      accountNumber: "123456",
      phoneNumber: "080234",
    };
    const mockCreate = jest.fn(() => create);
    jest.spyOn(Account, "create").mockImplementation(() => mockCreate());

    const res = await request(app).post("/api").send(create);

    expect(res.body).toHaveProperty("location");
    expect(res.body).toHaveProperty("msg");
    expect(res.body).toHaveProperty("param");
  });
});
