"use client";

import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { api } from "~/utils/api";

const NewUserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const session = useSession();

    const createNewUser = api.user.create.useMutation({
        onSuccess: newUser => {
            console.log(newUser);
        },
        onError: error => {
            if (error.message === 'Email already exists') {
                setError('Email already exists');
            } else {
                setError('An unknown error occurred');
            }
        }
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        createNewUser.mutate({ name, email, password });
    }
    return (
        <div className="flex h-screen flex-col">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-60 w-auto" src="/images/login_logo.png" alt="Logo" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create New User</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <div className="mt-2">
                            <input id="name" name="name" type="name" autoComplete="name" required onChange={e => setName(e.target.value)} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" required onChange={e => setEmail(e.target.value)} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" autoComplete="current-password" required onChange={e => setPassword(e.target.value)} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" style={{ backgroundColor: '#ffe4c8', color: '#311c10' }} className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm">Add New User</button>
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

export default NewUserForm;