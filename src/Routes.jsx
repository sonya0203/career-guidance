import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
const routerRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
export default routerRoutes;
