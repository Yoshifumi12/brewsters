import { NextPage } from "next";
import SideNav from "~/components/SideNav";

const DashboardPage: NextPage = () => {
  return (
    <div className="container mx-auto flex ">
      <SideNav></SideNav>
      <div className="min-h-screen flex-grow border-x">
      </div>
    </div>
  );
};

export default DashboardPage;