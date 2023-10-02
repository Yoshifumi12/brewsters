import { NextPage } from "next";
import Head from 'next/head';
import SideNav from "~/components/SideNav";
import TopNav from "~/components/TopNav";
import 'font-awesome/css/font-awesome.min.css';
import NewProductForm from "~/components/NewProductForm";

const AddProductPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brewsters - New User</title>
      </Head>
      <div className="flex">
        <SideNav />
        <div className="flex flex-col w-screen">
          <TopNav />
          <NewProductForm />
        </div>
      </div>
    </>
  );
};

export default AddProductPage;