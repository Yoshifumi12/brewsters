import email from "next-auth/providers/email";
import { FormEvent, useState } from "react";
import { api } from "~/utils/api";

const ViewUsers = () => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [updatedAt, setUpdatedAt] = useState(new Date(Date.now()))


    const listUsers = api.user.allUsers.useQuery();

    const deleteUserMutation = api.user.delete.useMutation({
        onSuccess: () => {
            listUsers.refetch()
        }
    });

    const editUser = api.user.edit.useMutation({
        onSuccess: () => {
            listUsers.refetch()
        }
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        editUser.mutate({ id, name, email, password, updatedAt });
    }

    const deleteUser = (userId: { id: string }) => deleteUserMutation.mutate(userId);
    return (
        <div className="flex h-screen flex-col">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">List of Users</h2>
            <div className="mt-10">
                <table className="table-auto mx-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Id</th>
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
                                    <td className="border px-4 py-2">{user.id}</td>
                                    <td className="border px-4 py-2">{user.name}</td>
                                    <td className="border px-4 py-2">{user.email}</td>
                                    <td className="border px-4 py-2">{user.image}</td>
                                    <td className="border px-4 py-2">{user.createdAt.toLocaleDateString()}</td>
                                    <td className="border px-4 py-2">{user.updatedAt?.toLocaleDateString()}</td>
                                    <td><div className="pl-1"><button className="px-3 py-2 self-end border border-2 rounded-lg bg-green-500"> Edit</button></div></td>
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