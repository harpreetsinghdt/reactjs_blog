import MainHeader from "../components/layouts/MainHeader";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      {/* <MainHeader /> */}
      <Outlet />
    </>
  );
};

export default RootLayout;
