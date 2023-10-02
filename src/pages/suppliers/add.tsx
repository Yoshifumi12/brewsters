import { NextPage } from "next";
import Head from 'next/head';
import SideNav from "~/components/SideNav";
import TopNav from "~/components/TopNav";
import 'font-awesome/css/font-awesome.min.css';
import NewSupplierForm from "~/components/NewSupplierForm";

const AddSupplierPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brewsters - New User</title>
      </Head>
      <div className="flex">
          <SideNav />
        <div className="flex flex-col w-screen">
          <TopNav />
          <NewSupplierForm/>
        </div>
      </div>
    </>
  );
};

export default AddSupplierPage;