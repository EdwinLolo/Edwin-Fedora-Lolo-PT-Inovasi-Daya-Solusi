import React from "react";
import TransactionTable from "../components/TransactionTable";

const Home = () => {
  return (
    <div>
      <div className="flex w-full bg-gray-200">
        <div
          className="flex justify-between w-[90%] mx-auto py-4 font-bold  
        "
        >
          <h1 className="px-4 py-1 text-2xl text-gray-600 rounded-lg">
            Home Page
          </h1>
          <a
            href="/add"
            className="px-4 py-1 text-xl text-white transition duration-300 transform bg-green-500 rounded-lg drop-shadow-xl hover:translate-y-1"
          >
            Add Form
          </a>
        </div>
      </div>
      <TransactionTable />
    </div>
  );
};

export default Home;
