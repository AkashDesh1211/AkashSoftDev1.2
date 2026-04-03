import React, { useState } from "react";
import axiosInstance from "../axiosConfig";

const CreateOrderPage = () => {
  const [shippingAddress, setShippingAddress] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      shippingAddress,
      totalAmount,
      items: [
        {
          productId,
          name,
          quantity,
          price,
        },
      ],
    };

    try {
      await axiosInstance.post("/api/orders", orderData);
      alert("Order created successfully");
      setShippingAddress("");
      setTotalAmount("");
      setProductId("");
      setName("");
      setQuantity(1);
      setPrice("");
    } catch (error) {
      console.error(error);
      alert("Failed to create order");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Product ID" value={productId} onChange={(e) => setProductId(e.target.value)} required />
        <input placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="number" placeholder="Total Amount" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} required />
        <input placeholder="Shipping Address" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CreateOrderPage;
