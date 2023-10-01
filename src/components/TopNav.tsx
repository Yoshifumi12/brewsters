import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const TopNav = () => {
    const session = useSession();
    const user = session.data?.user;

    return (
        <nav className="flex-auto h-12 bg-slate-50">
            <div className="topNav">
                <div className="topNavMenu text-l p-3">
                    <Link href={""} style={{ color: '#311c10' }}>
                        <i className="fa fa-navicon px-1"></i>
                    </Link>
                    <Link href={""} style={{ color: '#311c10' }} className="float-right">
                        <i className="fa fa-power-off px-1"></i>
                        Log Out
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
