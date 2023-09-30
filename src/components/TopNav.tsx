import { useSession } from "next-auth/react";
import Link from "next/link";

const TopNav = () => {
    const session = useSession();
    const user = session.data?.user;

    return (
        <nav className="w-7/10">
            <div className="topNav">
                <Link href={""} style={{ color: '#311c10' }}>
                    <i className="fa fa-navicon"></i>
                </Link>
                <Link href={""} style={{ color: '#311c10' }}>
                    <i className="fa fa-power-off"></i>
                    Log Out
                </Link>

            </div>
        </nav>

    );
};

export default TopNav;
