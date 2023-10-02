import { NextPage } from "next";
import Head from 'next/head';
import SideNav from "~/components/SideNav";
import TopNav from "~/components/TopNav";
import 'font-awesome/css/font-awesome.min.css';
import { useState } from "react";

const DashboardPage: NextPage = () => {


  return (
    <>
      <Head>
        <title>Brewsters - Dashboard</title>
      </Head>
      <div className="flex">
        <SideNav />
        <div className="flex flex-col w-screen">
          <TopNav/>
          <div className="flex h-screen flex-col">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Dashboard</h2>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
