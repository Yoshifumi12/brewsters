import { api } from "~/utils/api";

const ViewSuppliers = () => {
  const listSuppliers = api.supplier.allSuppliers.useQuery();

  const deleteSupplierMutation = api.supplier.delete.useMutation({
    onSuccess: () => {
      listSuppliers.refetch()
    }
  });

  const deleteSupplier = (supplierId: { supplierId: string }) => deleteSupplierMutation.mutate(supplierId);
  return (
    <div className="flex h-screen flex-col">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">List of Suppliers</h2>
      <div className="mt-10">
        <table className="table-auto mx-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Id</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Date Created</th>
              <th className="border px-4 py-2">Last Updated</th>
              <th className="border px-4 py-2">Added By</th>
            </tr>
          </thead>
          <tbody>
            {listSuppliers.data?.map((supplier) => (
              <tr key={supplier.supplierId}>
                <td className="border px-4 py-2">{supplier.supplierId}</td>
                <td className="border px-4 py-2">{supplier.supplierName}</td>
                <td className="border px-4 py-2">{supplier.supplierEmail}</td>
                <td className="border px-4 py-2">{supplier.supplierAddress}</td>
                <td className="border px-4 py-2">{supplier.createdAt.toLocaleDateString()}</td>
                <td className="border px-4 py-2">{supplier.updatedAt?.toLocaleDateString()}</td>
                <td className="border px-4 py-2">{supplier.userId}</td>


                <td ><div className="pl-1"><button className="px-3 py-2 self-end border border-2 rounded-lg bg-green-500"> Edit</button></div></td>
                <td ><div className="pl-1"><button onClick={() => deleteSupplier({ supplierId: supplier.supplierId })} className="px-3 py-2 self-end border border-2 rounded-lg bg-red-500"> Delete</button></div></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewSuppliers;