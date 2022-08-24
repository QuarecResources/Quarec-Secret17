import React from "react";
import { Redirect } from "react-router-dom";

import Home from "../pages/Home/home";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";
import Service from "../pages/Service";
import Hairs from "../pages/Service/hair";
import Nails from "../pages/Service/nail";
// import Machines from "../pages/Machines";
// import BreakLease from "../pages/BreakLease";
// import SellMachine from "../pages/SellMachine";
// import Details from "../pages/Machines/detail";

const userRoutes = [
  { path: "/", component: Home },
  { path: "/blogs", exact: true, component: Blogs },
  { path: "/contact", exact: true, component: ContactUs },
  { path: "/services", exact: true, component: Service },
  { path: "/hairs", exact: true, component: Hairs },
  { path: "/nails", exact: true, component: Nails },




  { path: "/", exact: true, component: () => <Redirect to="/" /> },
];

export { userRoutes };
