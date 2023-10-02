const ViewUsers = () => {
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
                        <tr>
                            <td className="border px-4 py-2">01</td>
                            <td className="border px-4 py-2">Lily Morrow</td>
                            <td className="border px-4 py-2">Lily@gmail.com</td>
                            <td className="border px-4 py-2">/image/image.png</td>
                            <td className="border px-4 py-2">01</td>
                            <td className="border px-4 py-2">01</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewUsers;