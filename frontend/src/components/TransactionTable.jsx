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
    <div>
      <h2>Transaction Table</h2>
      {Object.keys(transactions).map((group, index) => (
        <div key={index}>
          <h3>{group}</h3>
          <table border="1" style={{ width: "100%", marginBottom: "20px" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Amount</th>
                <th>Customer Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions[group].map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>{transaction.productName}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.customerName}</td>
                  <td>{transaction.status === 0 ? "SUCCESS" : "FAILED"}</td>
                  <td>
                    <a href={`/view/${transaction.id}`}>View</a> |
                    <a href={`/edit/${transaction.id}`}>Edit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TransactionTable;
