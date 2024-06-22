import { lazy } from "react";
import { Navigate } from "react-router-dom";

const List = lazy(() => import("./list/List"));
const Create = lazy(() => import("./create/Create"));
const Edit = lazy(() => import("./edit/Edit"));

const castRoute = {
  path: "casts",
  children: [
    {
      path: "list",
      element: <List />,
    },
    {
      path: "create",
      element: <Create />,
    },
    {
      path: "edit/:castId",
      element: <Edit />,
    },
    {
      path: "*",
      element: <Navigate to="list" />,
    },
  ],
};

export default castRoute