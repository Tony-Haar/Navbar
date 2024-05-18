import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </React.StrictMode>
);
