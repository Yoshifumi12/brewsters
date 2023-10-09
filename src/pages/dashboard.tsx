import { NextPage } from "next";
import Head from 'next/head';
import SideNav from "~/components/SideNav";
import TopNav from "~/components/TopNav";
import 'font-awesome/css/font-awesome.min.css';
import { useState } from "react";
import { useSession } from "next-auth/react";

const DashboardPage: NextPage = () => {
  const { data: sessionData, status } = useSession();

  // If the session data is not loaded yet, show a loading message
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // If the user is not authenticated, redirect to the login page
  if (status === "unauthenticated") {
    window.location.href = "/"; // Replace "/login" with your login page URL
    return null;
  }
  return (
    <>
      <Head>
        <title>Brewsters - Dashboard</title>
      </Head>
      <div className="flex">
        <SideNav />
        <div className="flex flex-col w-screen">
          <TopNav />
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
