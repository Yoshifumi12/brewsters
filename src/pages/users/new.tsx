import { NextPage } from "next";
import Head from 'next/head';
import SideNav from "~/components/SideNav";
import TopNav from "~/components/TopNav";
import 'font-awesome/css/font-awesome.min.css';
import NewUserForm from "~/components/NewUserForm";

const NewUserPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brewsters - New User</title>
      </Head>
      <div className="flex">
          <SideNav />
        <div className="flex flex-col w-screen">
          <TopNav />
          <NewUserForm/>
        </div>
      </div>
    </>
  );
};

export default NewUserPage;
