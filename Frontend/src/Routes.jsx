import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Career from "./Pages/Career/Career";
import Login from "./Pages/Login/Login";
const routerRoutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
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
  {
    path: "/career",
    element: <Career />,
  },
];
export default routerRoutes;
