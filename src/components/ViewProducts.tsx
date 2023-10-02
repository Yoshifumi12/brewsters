const ViewProducts = () => {
    return (
        <div className="flex h-screen flex-col">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">List Of Products</h2>
            <div className="mt-10">
                <table className="table-auto mx-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Id</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Stock</th>
                            <th className="border px-4 py-2"> Supplier</th>
                            <th className="border px-4 py-2">Date Created</th>
                            <th className="border px-4 py-2">Last Updated</th>
                            <th className="border px-4 py-2">Added By</th>

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
                            <td className="border px-4 py-2">01</td>
                            <td ><div className="pl-1"><button className="px-3 py-2 self-end border border-2 rounded-lg bg-green-500"> Edit</button></div></td>
                            <td ><div className="pl-1"><button className="px-3 py-2 self-end border border-2 rounded-lg bg-red-500"> Delete</button></div></td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewProducts;