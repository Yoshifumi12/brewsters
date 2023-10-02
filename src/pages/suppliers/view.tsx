import { NextPage } from "next";
import Head from 'next/head';
import SideNav from "~/components/SideNav";
import TopNav from "~/components/TopNav";
import 'font-awesome/css/font-awesome.min.css';
import ViewSuppliers from "~/components/ViewSuppliers";

const ViewSuppliersPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brewsters - View Suppliers</title>
      </Head>
      <div className="flex">
        <SideNav />
        <div className="flex flex-col w-screen">
          <TopNav />
         <ViewSuppliers/>
        </div>
      </div>
    </>
  );
};

export default ViewSuppliersPage;
