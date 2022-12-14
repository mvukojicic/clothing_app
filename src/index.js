import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/containers/App/index";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Context/user.context";
import { ProductsProvider } from "./Context/product.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
