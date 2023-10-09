import { api } from "~/utils/api";

const ViewProducts = () => {
    const listProducts = api.product.allProducts.useQuery();

    const deleteProductMutation = api.product.delete.useMutation({
        onSuccess: () => {
            listProducts.refetch()
        }
    });

    const deleteProduct = (productId: { productId: string }) => deleteProductMutation.mutate(productId);
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
                        {listProducts.data?.map((product) => (
                            <tr key={product.productId}>
                                <td className="border px-4 py-2">{product.productId}</td>
                                <td className="border px-4 py-2">{product.productName}</td>
                                <td className="border px-4 py-2">{product.productStock}</td>
                                <td className="border px-4 py-2">{product.supplierName}</td>
                                <td className="border px-4 py-2">{product.createdAt.toLocaleDateString()}</td>
                                <td className="border px-4 py-2">{product.updatedAt?.toLocaleDateString()}</td>
                                <td className="border px-4 py-2">{product.userId}</td>


                                <td ><div className="pl-1"><button className="px-3 py-2 self-end border border-2 rounded-lg bg-green-500"> Edit</button></div></td>
                                <td ><div className="pl-1"><button onClick={() => deleteProduct({ productId: product.productId })} className="px-3 py-2 self-end border border-2 rounded-lg bg-red-500"> Delete</button></div></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewProducts;