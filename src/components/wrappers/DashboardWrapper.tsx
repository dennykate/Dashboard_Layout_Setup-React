import { Outlet } from "react-router-dom";
import Layout from "../layouts/Layout";
import Wrapper from "./Wrapper";

const DashboardWrapper = () => {
  return (
    <Wrapper>
      <Layout>
        <Outlet />
      </Layout>
    </Wrapper>
  );
};

export default DashboardWrapper;
