import { NextPage } from "next";
import Head from 'next/head';
import SideNav from "~/components/SideNav";
import TopNav from "~/components/TopNav";
import 'font-awesome/css/font-awesome.min.css';
import ViewUsers from "~/components/ViewUsers";

const ViewUserPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brewsters - View Users</title>
      </Head>
      <div className="flex">
        <SideNav />
        <div className="flex flex-col w-screen">
          <TopNav />
          <ViewUsers/>
        </div>
      </div>
    </>
  );
};

export default ViewUserPage;
