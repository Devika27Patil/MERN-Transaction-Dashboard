// src/main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // Ensure this path matches the actual filename
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css"; // Import DataTables Bootstrap 5 CSS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
