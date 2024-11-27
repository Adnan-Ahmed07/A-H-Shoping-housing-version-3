import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./routes/bag.jsx";
import Home from "./routes/Home.jsx";
import {Provider}from"react-redux";
import AdnanStore from "./Store/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home/> /* ,loader:PostLoader*/ },
      {
        path: "/bag",
        element: <Bag/>,
        /*action: CreatePostAction,*/
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={AdnanStore}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
