import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { api } from "~/utils/api";

const NewSupplierForm = () => {
  const [supplierName, setSupplierName] = useState('');
  const [supplierEmail, setSupplierEmail] = useState('');
  const [supplierAddress, setSupplierAddress] = useState('');
  const [error, setError] = useState('')

  const router = useRouter();

  const token = api.loginToken.getToken.useQuery();

  const user = api.user.findById.useQuery(`${token.data?.userId}`)


  const createNewSupplier = api.supplier.create.useMutation({
    onError: error => {
      setError(error.message)
    },
    onSuccess: () => {
      router.replace("/suppliers/view")
    }
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createNewSupplier.mutate({ supplierName, supplierEmail, supplierAddress, userId: `${user.data?.id}`, userName: `${user.data?.name}` });

  }
  return (
    <div className="flex h-screen flex-col">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-60 w-auto" src="/images/login_logo.png" alt="Logo" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add New Supplier</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900"> Supplier Name</label>
            <div className="mt-2">
              <input id="name" name="name" type="name" autoComplete="name" required onChange={e => setSupplierName(e.target.value)} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Supplier Email</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" autoComplete="email" required onChange={e => setSupplierEmail(e.target.value)} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Supplier Address</label>
            </div>
            <div className="mt-2">
              <input id="address" name="address" type="address" autoComplete="current-address" required onChange={e => setSupplierAddress(e.target.value)} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" style={{ backgroundColor: '#ffe4c8', color: '#311c10' }} className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm">Add New Supplier</button>
          </div>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm rounded-md p-1">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default NewSupplierForm;