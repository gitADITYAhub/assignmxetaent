import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Exercise from "pages/Exercise";
import DashboardDesign from "pages/DashboardDesign";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "exercise",
      element: <Exercise />,
    },
    {
      path: "dashboarddesign",
      element: <DashboardDesign />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
