/* eslint-disable react-hooks/rules-of-hooks */
import { useRoutes } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";

const routes = () => {
  const isAuth = true;

  const routes = isAuth ? privateRoutes : publicRoutes;

  const element = useRoutes(routes);

  return <>{element}</>;
};

export default routes;
