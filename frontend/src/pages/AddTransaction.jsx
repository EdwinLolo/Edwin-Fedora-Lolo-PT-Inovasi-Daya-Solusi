import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTransaction = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productID: "",
    productName: "",
    amount: "",
    customerName: "",
    status: "",
    transactionDate: "",
    createBy: "",
    createOn: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.status === "") {
      alert("Please select a status");
      return;
    }
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
    <div className="p-4">
      <div className="flex w-full mb-2 text-center h-fit-content">
        <button
          onClick={() => navigate("/")}
          className="absolute px-4 py-2 font-bold text-white bg-blue-500 rounded left-5 top-5 hover:bg-blue-700"
        >
          Back
        </button>
        <h1 className="w-full mb-4 text-2xl font-bold text-center">
          Add Transaction
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product ID:
          </label>
          <input
            type="text"
            name="productID"
            placeholder="Product ID"
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Name:
          </label>
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Amount:
          </label>
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Customer Name:
          </label>
          <input
            type="text"
            name="customerName"
            placeholder="Customer Name"
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Status:
          </label>
          <select
            name="status"
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">--Select Status--</option>
            <option value="0">SUCCESS</option>
            <option value="1">FAILED</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Transaction Date:
          </label>
          <input
            type="datetime-local"
            name="transactionDate"
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Created By:
          </label>
          <input
            type="text"
            name="createBy"
            placeholder="Created By"
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Created On:
          </label>
          <input
            type="datetime-local"
            name="createOn"
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-700"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
