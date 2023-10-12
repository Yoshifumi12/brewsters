import { useState } from "react";
import { api } from "~/utils/api";

const ViewProducts = () => {
    const listProducts = api.product.allProducts.useQuery();

    const deleteProductMutation = api.product.delete.useMutation({
        onSuccess: () => {
            listProducts.refetch()
        }
    });

    const updateStock = api.product.editStock.useMutation();

    const [newStock, SetNewStock] = useState("")

    const handleStockUpdate = (productId: string, newStock: string) => {

        updateStock.mutate({ productId, productStock: newStock });
    };



    const deleteProduct = (productId: { productId: string }) => deleteProductMutation.mutate(productId);
    return (
        <div className="flex h-screen flex-col">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">List Of Products</h2>
            <div className="mt-10">
                <table className="table-auto mx-auto">
                    <thead>
                        <tr>
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
                                <td className="border px-4 py-2">{product.productName}</td>
                                <td className="border px-4 py-2">
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        handleStockUpdate(product.productId, newStock);
                                    }}>
                                        <input id="stock" name="stock" type="number" autoComplete="number" defaultValue={product.productStock} onChange={e => SetNewStock(e.target.value)} required />
                                    </form>
                                </td>
                                <td className="border px-4 py-2">{product.supplierName}</td>
                                <td className="border px-4 py-2">{product.createdAt.toLocaleDateString()}</td>
                                <td className="border px-4 py-2">{product.updatedAt?.toLocaleDateString()}</td>
                                <td className="border px-4 py-2">{product.userName}</td>

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