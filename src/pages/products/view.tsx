import { NextPage } from "next";
import Head from 'next/head';
import SideNav from "~/components/SideNav";
import TopNav from "~/components/TopNav";
import 'font-awesome/css/font-awesome.min.css';
import ViewProducts from "~/components/ViewProducts";

const ViewProductsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brewsters - View Products</title>
      </Head>
      <div className="flex">
        <SideNav />
        <div className="flex flex-col w-screen">
          <TopNav />
         <ViewProducts/>
        </div>
      </div>
    </>
  );
};

export default ViewProductsPage;
