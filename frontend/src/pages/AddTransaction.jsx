import React, { useState } from "react";
import axios from "axios";

const AddTransaction = () => {
  const [formData, setFormData] = useState({
    productID: "",
    productName: "",
    amount: "",
    customerName: "",
    status: 0,
    transactionDate: "",
    createBy: "",
    createOn: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/transactions", formData)
      .then((response) => {
        alert("Transaction added successfully");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error adding transaction:", error);
      });
  };

  return (
    <div>
      <h1>Add Transaction</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productID"
          placeholder="Product ID"
          onChange={handleChange}
        />
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          onChange={handleChange}
        />
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          onChange={handleChange}
        />
        <select name="status" onChange={handleChange}>
          <option value="0">SUCCESS</option>
          <option value="1">FAILED</option>
        </select>
        <input
          type="datetime-local"
          name="transactionDate"
          onChange={handleChange}
        />
        <input
          type="text"
          name="createBy"
          placeholder="Created By"
          onChange={handleChange}
        />
        <input type="datetime-local" name="createOn" onChange={handleChange} />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
