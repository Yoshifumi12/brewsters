import { api } from "~/utils/api";

const ViewUsers = () => {
    const listUsers = api.user.allUsers.useQuery();

    const deleteUserMutation = api.user.delete.useMutation({
        onSuccess: () => {
            listUsers.refetch()
        }
    });

    const deleteUser = (userId: { id: string }) => deleteUserMutation.mutate(userId);
    return (
        <div className="flex h-screen flex-col">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">List of Users</h2>
            <div className="mt-10">
                <table className="table-auto mx-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Image</th>
                            <th className="border px-4 py-2">Date Created</th>
                            <th className="border px-4 py-2">Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers.data?.map((user) => (
                            <>
                                <tr key={user.id}>
                                    <td className="border px-4 py-2">{user.name}</td>
                                    <td className="border px-4 py-2">{user.email}</td>
                                    <td className="border px-4 py-2"><img className="w-20 h-auto rounded-full" src={`${user.image}`}></img></td>
                                    <td className="border px-4 py-2">{user.createdAt.toLocaleDateString()}</td>
                                    <td className="border px-4 py-2">{user.updatedAt?.toLocaleDateString()}</td>
                                    <td><div className="pl-1"><button onClick={() => deleteUser({ id: user.id })} className="px-3 py-2 self-end border border-2 rounded-lg bg-red-500"> Delete</button></div></td>
                                </tr>

                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewUsers;