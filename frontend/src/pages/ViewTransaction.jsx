// src/pages/ViewTransaction.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ViewTransaction = () => {
  const { id } = useParams(); // Mengambil id dari URL
  const [transaction, setTransaction] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Ambil data transaksi berdasarkan id
    axios
      .get(`http://localhost:8000/api/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => {
        console.error("Error fetching transaction:", error);
      });
  }, [id]);

  if (!transaction) {
    return <div>Loading...</div>; // Menampilkan loading jika data belum tersedia
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
          Transaction Details
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full mt-4 border border-collapse border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300">ID</th>
              <th className="px-4 py-2 border border-gray-300">Product ID</th>
              <th className="px-4 py-2 border border-gray-300">Product Name</th>
              <th className="px-4 py-2 border border-gray-300">Amount</th>
              <th className="px-4 py-2 border border-gray-300">
                Customer Name
              </th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
              <th className="px-4 py-2 border border-gray-300">
                Transaction Date
              </th>
              <th className="px-4 py-2 border border-gray-300">Created By</th>
              <th className="px-4 py-2 border border-gray-300">Created On</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center odd:bg-white even:bg-gray-100">
              <td className="px-4 py-2 border border-gray-300">
                {transaction.id}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {transaction.productID}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {transaction.productName}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {transaction.amount}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {transaction.customerName}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {transaction.status === 0 ? "SUCCESS" : "FAILED"}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {transaction.transactionDate}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {transaction.createBy}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {transaction.createOn}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTransaction;
