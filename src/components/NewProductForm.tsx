import router from "next/router";
import { FormEvent, useState } from "react";
import { api } from "~/utils/api";

const NewProductForm = () => {
    const [productName, setProductName] = useState("");
    const [supplierName, setSupplierName] = useState("");
    const [error, setError] = useState("")

    const token = api.loginToken.getToken.useQuery();
    const user = api.user.findById.useQuery(`${token.data?.userId}`)
    const supplier = api.supplier.findByName.useQuery(`${supplierName}`)

    const createNewProduct = api.product.create.useMutation({
        onError: error => {
            setError(error.message)
        },
        onSuccess: () => {
            router.replace("/products/view")
        }
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (supplier.data !== undefined) {
            createNewProduct.mutate({
                productName,
                supplierName: `${supplier.data?.supplierName}`,
                userName: `${user.data?.name}`,
                userId: `${user.data?.id}`,
                supplierId: `${supplier.data?.supplierId}`
            });
        }
        else{
            setError("Supplier does not exist")
        }
    }
    return (
        <div className="flex h-screen flex-col">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-60 w-auto" src="/images/login_logo.png" alt="Logo" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add New Product</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900"> Product Name</label>
                        <div className="mt-2">
                            <input id="name" name="name" type="name" autoComplete="name" required onChange={e => setProductName(e.target.value)} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Supplier</label>
                        <div className="mt-2">
                            <input id="name" name="name" type="name" autoComplete="name" required onChange={e => setSupplierName(e.target.value)} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" style={{ backgroundColor: '#ffe4c8', color: '#311c10' }} className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm">Add New Product</button>
                    </div>
                    {error && (
                        <div className="bg-red-500 text-white w-fit text-sm rounded-md p-1">
                            {error}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default NewProductForm;