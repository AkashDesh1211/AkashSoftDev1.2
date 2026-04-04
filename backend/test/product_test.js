const chai = require("chai");
const sinon = require("sinon");
const mongoose = require("mongoose");

const Product = require("../models/product");
const { createProduct } = require("../controllers/productController");

const { expect } = chai;

describe("Product Create Function Test", () => {
  it("should create a new product successfully", async () => {
    const req = {
      user: { id: new mongoose.Types.ObjectId() },
      body: {
        name: "Laptop",
        brand: "Dell",
        category: "Electronics",
        price: 1500,
        stock: 10,
        description: "Gaming laptop",
        imageUrl: "test.jpg",
      },
    };

    const createdProduct = {
      _id: new mongoose.Types.ObjectId(),
      ...req.body,
      createdBy: req.user.id,
    };

    const createStub = sinon.stub(Product, "create").resolves(createdProduct);

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await createProduct(req, res);

    expect(createStub.calledOnce).to.be.true;
    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledWith(createdProduct)).to.be.true;

    createStub.restore();
  });
});
