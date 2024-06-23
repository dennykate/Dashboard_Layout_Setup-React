import DashboardWrapper from "@/components/wrappers/DashboardWrapper";
import castRoute from "@/features/casts/route";
import categoryRoute from "@/features/categories/route";
import studioRoute from "@/features/studios/route";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = lazy(() => import("@/features/dashboard/Dashboard"));

const privateRoutes = [
  {
    path: "/dashboard",
    element: <DashboardWrapper />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      castRoute,
      studioRoute,
      categoryRoute,
    ],
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" />,
  },
];

export default privateRoutes;
