// src/App.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>My Application</h1>
      <Outlet /> {/* This will render the nested routes */}
    </div>
  );
};

export default App; // Pastikan ada ekspor default di sini
