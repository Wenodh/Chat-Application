import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: '',
    });

    const handleAvatar = (e) => {
        setAvatar({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0]),
        });
    };

    const handleLogin = (e) => {
        e.preventDefault()
        toast.error("error")
    }
    
    return (
        <div className="w-full h-full flex items-center gap-28">
            <div className="flex flex-1 flex-col items-center gap-5">
                <h2>Welcome back,</h2>
                <form className="flex flex-col items-center justify-center gap-5" onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="p-5 border-none outline-none rounded-md bg-blue-950/50"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="p-5 border-none outline-none rounded-md bg-blue-950/50"
                    />
                    <button className="w-full bg-blue-500 cursor-pointer rounded-md font-semibold p-2">
                        Sign In
                    </button>
                </form>
            </div>
            <div className="h-[80%] w-1  border-[1px] border-slate-100/50"></div>
            <div className="flex flex-1 flex-col items-center gap-5">
                <h2>Create an Account</h2>
                <form className="flex flex-col items-center justify-center gap-5">
                    <label
                        htmlFor="file"
                        className="w-full flex items-center justify-between cursor-pointer underline"
                    >
                        <img
                            src={avatar.url || './avatar.png'}
                            alt=""
                            className="w-12 h-12 rounded-md object-cover opacity-50"
                        />
                        Upload an image
                    </label>
                    <input
                        type="file"
                        id="file"
                        className="hidden"
                        onChange={handleAvatar}
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        className="p-5 border-none outline-none rounded-md bg-blue-950/50"
                        name="username"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="p-5 border-none outline-none rounded-md bg-blue-950/50"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="p-5 border-none outline-none rounded-md bg-blue-950/50"
                    />
                    <button className="w-full bg-blue-500 cursor-pointer rounded-md font-semibold p-2">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
