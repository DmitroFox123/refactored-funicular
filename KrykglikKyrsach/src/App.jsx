import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProductPage from "./components/ProductPage/ProductPage";
import MainPage from "./components/MainPage/MainPage";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";
import Order from "./components/Order/Order";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/catalog", element: <Catalog /> },
  { path: "/product", element: <ProductPage /> },
  { path: "/cart", element: <Cart /> },
  { path: "/order", element: <Order /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
