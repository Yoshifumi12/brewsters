import { useSession } from "next-auth/react";
import { FormEvent, useEffect, useState } from "react";
import { object } from "zod";
import { supplierRouter } from "~/server/api/routers/supplier";
import { api } from "~/utils/api";

const NewProductForm = () => {
    const [productName, setProductName] = useState("");
    const [supplierName, setSupplierName] = useState("");

    const session = useSession();

    const createNewProduct = api.product.create.useMutation({
        onSuccess:
            newProduct => {
                console.log(newProduct);

            }
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        createNewProduct.mutate({
            productName, supplierName,
            userId: "clne62gcv000ixmkoqwbetn9m",
            supplierId:"clne6lsn2000uxmkor42aavzt"
        });
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
                </form>
            </div>
        </div>
    );
}

export default NewProductForm;