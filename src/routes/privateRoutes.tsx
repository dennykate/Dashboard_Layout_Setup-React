import DashboardWrapper from "@/components/wrappers/DashboardWrapper";
import castRoute from "@/features/casts/route";
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
    ],
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" />,
  },
];

export default privateRoutes;
