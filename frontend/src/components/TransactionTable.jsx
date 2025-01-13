import React, { useEffect, useState } from "react";
import axios from "axios";

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/transactions")
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }, []);

  return (
    <div className="px-6 py-4">
      <h2 className="mb-4 text-2xl font-bold">Transaction Table</h2>
      {Object.keys(transactions).map((group, index) => (
        <div key={index} className="mb-8">
          <div className="flex w-full mb-2 text-center">
            <h3 className="w-full text-lg font-bold text-white rounded-md bg-slate-600">
              {group}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border border-collapse border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border border-gray-300">
                    Product Name
                  </th>
                  <th className="px-4 py-2 border border-gray-300">Amount</th>
                  <th className="px-4 py-2 border border-gray-300">
                    Customer Name
                  </th>
                  <th className="px-4 py-2 border border-gray-300">Status</th>
                  <th className="px-4 py-2 border border-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions[group].map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="text-center odd:bg-white even:bg-gray-100"
                  >
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
                      <a
                        href={`/view/${transaction.id}`}
                        className="text-blue-500 hover:underline"
                      >
                        View
                      </a>{" "}
                      |
                      <a
                        href={`/edit/${transaction.id}`}
                        className="ml-2 text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionTable;
