import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditTransaction = () => {
  const { id } = useParams();
  const [transaction, setTransaction] = useState({
    productID: "",
    productName: "",
    amount: "",
    customerName: "",
    status: 0,
    transactionDate: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching transaction:", error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/transactions/${id}`, transaction)
      .then(() => {
        alert("Transaction updated successfully!");
        navigate(`/view/${id}`);
      })
      .catch((error) => {
        console.error("Error updating transaction:", error);
        alert("Failed to update transaction.");
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
          Edit Transaction
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
            value={transaction.productID}
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
            value={transaction.productName}
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
            value={transaction.amount}
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
            value={transaction.customerName}
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
            value={transaction.status}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
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
            value={transaction.transactionDate}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditTransaction;
