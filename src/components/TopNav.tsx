import router from "next/router";
import { FormEvent } from "react";
import { api } from "~/utils/api";

const TopNav = () => {
    const token = api.loginToken.getToken.useQuery();
    const deleteTokenMutation = api.loginToken.delete.useMutation({
        onSuccess: () => {
            router.replace('/')
        }
    });

    const deleteToken = (tokenId: { id: string }) => deleteTokenMutation.mutate(tokenId);


    const handleLogOut = (e: FormEvent) => {
        e.preventDefault();
        if(!token || !token.data?.id){
            return null;
        }else{
            deleteToken({ id: token.data?.id })

        }

    }

    return (
        <nav className="flex-auto h-12 bg-slate-50">
            <div className="topNav">
                <div className="topNavMenu text-l p-3">
                    <button style={{ color: '#311c10' }} className="float-right" onClick={handleLogOut} >
                        <i className="fa fa-power-off px-1"></i>
                        Log Out
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
