import { NextPage } from "next";
import Head from 'next/head';
import SideNav from "~/components/SideNav";
import TopNav from "~/components/TopNav";
import 'font-awesome/css/font-awesome.min.css';

const DashboardPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brewsters - Dashboard</title>
      </Head>
      <div className="Navs flex flex-row">
      <SideNav />
      <TopNav />
      </div>
      <div className="dashboardContainer">
    <div className="dashboardContent">
    </div>
      </div>
    </>
  );
};

export default DashboardPage;
