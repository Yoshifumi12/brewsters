import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const SideNav = () => {
  const [sideNavWidth, setSideNavWidth] = useState("w-10");
  const [sideContentPosition, setContentPosition] = useState("pl-2");
  const [navIconPosition, setNavIconPosition] = useState("pr-3 pt-2");

  const session = useSession();
  const user = session.data?.user;
  const router = useRouter();

  const isCurrentPage = (path: string) => {
    return router.asPath === path;
  };

  const toggleSideNav = () => {
    setSideNavWidth((prevWidth) => (prevWidth === "w-2/10" ? "w-10" : "w-2/10"));
    setContentPosition((prevPosition) => prevPosition === "px-1" ? "pl-2" : "px-1");
    setNavIconPosition((prevPosition) => prevPosition === "pr-3 pt-2" ? "px-1" : "pr-3 pt-2")

  }
  const shouldDisplayContent = sideNavWidth === "w-2/10";

  return (
    <nav className={`h-screen ${sideNavWidth}`} style={{ backgroundColor: '#ffe4c8' }}>
      <div className="w-auto mb-6">
        <Link style={{ color: '#311c10' }} href={""} className="float-right" onClick={toggleSideNav}>
          <i className={`fa fa-navicon ${navIconPosition}`}></i>
        </Link>
      </div>
      <div className="sideNav">
        {shouldDisplayContent && (
          <div className="sideNavLogo flex flex-col items-center">
            <img className="mx-10 my-1 h-40 w-auto" src="/images/logo.png" alt="Logo" />
          </div>
        )}
        {shouldDisplayContent && (
          <div className="sideNavUser flex flex-col items-center border-b-2 border-amber-950">
            <img className="mx-50 h-15 w-15" src={`${user?.image}`} alt="User Image" />
            <span>{user?.name}</span>
          </div>
        )}

        <div className={`sideNavMenu text-xl uppercase pt-3`}>
          <ul>
            <li className={`flex items-center ${isCurrentPage("/dashboard") ? 'bg-yellow-600' : 'hover:bg-yellow-500'} py-1`}>
              <Link href="/dashboard" style={{ color: '#311c10' }} className="pr-2">
                <i className={`fa fa-dashboard ${sideContentPosition}`}></i>
                <span className={shouldDisplayContent ? '' : 'hidden'}>
                  Dashboard
                </span>
              </Link>
            </li>
            <li className={`flex items-center ${isCurrentPage("/reports") ? 'bg-yellow-600' : 'hover:bg-yellow-500'} py-1`}>
              <Link href="/reports" style={{ color: '#311c10' }} className="pr-2">
                <i className={`fa fa-clipboard ${sideContentPosition}`}></i>
                <span className={shouldDisplayContent ? '' : 'hidden'}>
                  Reports
                </span>

              </Link>
            </li>
            <li className={`flex items-center ${isCurrentPage("") ? 'bg-yellow-600' : 'hover:bg-yellow-500'} py-1`}>
              <Link href="" style={{ color: '#311c10' }} className="pr-2">
                <i className={`fa fa-cube ${sideContentPosition}`}></i>
                <span className={shouldDisplayContent ? '' : 'hidden'}>
                  Products
                </span>

              </Link>
            </li>
            <li className={`flex items-center ${isCurrentPage("") ? 'bg-yellow-600' : 'hover:bg-yellow-500'} py-1`}>
              <Link href="" style={{ color: '#311c10' }} className="pr-2">
                <i className={`fa fa-user ${sideContentPosition}`}></i>
                <span className={shouldDisplayContent ? '' : 'hidden'}>
                  Users
                </span>

              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
