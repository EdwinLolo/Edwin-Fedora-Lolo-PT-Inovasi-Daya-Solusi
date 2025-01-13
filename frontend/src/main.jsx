// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; // Mengimpor dengan benar
import Home from "./pages/Home";
import AddTransaction from "./pages/AddTransaction";
import EditTransaction from "./pages/EditTransaction";
import ViewTransaction from "./pages/ViewTransaction";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="add" element={<AddTransaction />} />
          <Route path="edit/:id" element={<EditTransaction />} />
          <Route path="view/:id" element={<ViewTransaction />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
