import { useState } from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routerRoutes from "./Routes";

function App() {
  const router = createBrowserRouter(routerRoutes, {
    basename: "/career-guidance",
  });
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
