import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const SideNav = () => {
  const session = useSession();
  const user = session.data?.user;
  const router = useRouter();

  const isCurrentPage = (path: string) => {
    return router.asPath === path;
  };

  return (
    <nav className="w-2/10 h-screen" style={{ backgroundColor: '#ffe4c8' }}>
      <div className="sideNav">
        <div className="sideNavLogo flex flex-col items-center">
          <img className="mx-10 my-1 h-40 w-auto" src="/images/logo.png" alt="Logo" />
        </div>
        <div className="sideNavUser flex flex-col items-center">
          <img className="mx-50 h-15 w-15" src={`${user?.image}`} alt="User Image" />
          <span>{user?.name}</span>
        </div>
        <div className="sideNavMenu text-xl uppercase">
          <ul>
          <li className={`${isCurrentPage("/dashboard") ? 'bg-yellow-600' : ''} hover:bg-yellow-600`}>
              <Link href={"/dashboard"} style={{ color:'#311c10'}} className="pr-32">
                <i className="fa fa-dashboard pr-1"></i>
                Dashboard
              </Link>
            </li>
            <li className={`${isCurrentPage("/reports") ? 'bg-yellow-600' : ''} hover:bg-yellow-600`}>
              <Link href={"/reports"} style={{ color:'#311c10'}} className="pr-32">
                <i className="fa fa-dashboard pr-1"></i>
                Reports
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav >
  );
};

export default SideNav;
