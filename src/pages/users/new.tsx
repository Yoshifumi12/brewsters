import { NextPage } from "next";
import Head from 'next/head';
import SideNav from "~/components/SideNav";
import TopNav from "~/components/TopNav";
import 'font-awesome/css/font-awesome.min.css';

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
          <div className="flex h-screen flex-col">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img className="mx-auto h-60 w-auto" src="/images/login_logo.png" alt="Logo" />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create New User</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                  <div className="mt-2">
                    <input id="name" name="name" type="name" autoComplete="name" required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div className="mt-2">
                    <input id="email" name="email" type="email" autoComplete="email" required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  </div>
                  <div className="mt-2">
                    <input id="password" name="password" type="password" autoComplete="current-password" required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <button type="submit" style={{ backgroundColor: '#ffe4c8', color: '#311c10' }} className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm">Add New User</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewUserPage;
