import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { auth, db } from '../../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import upload from '../../lib/upload';

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: '',
    });
    const [loading, setLoading] = useState(false);
    const handleAvatar = (e) => {
        setAvatar({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0]),
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData);
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const imgUrl = await upload(avatar.file);
            await setDoc(doc(db, 'users', res.user.uid), {
                username,
                email,
                avatar: imgUrl,
                id: res.user.uid,
                blocked: [],
            });
            await setDoc(doc(db, 'userschats', res.user.uid), {
                chats: [],
            });
            toast.success('Account created! You can login now!');
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-full flex items-center gap-28">
            <div className="flex flex-1 flex-col items-center gap-5">
                <h2>Welcome back,</h2>
                <form
                    className="flex flex-col items-center justify-center gap-5"
                    onSubmit={handleLogin}
                >
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
                    <button
                        className="w-full bg-blue-500 cursor-pointer rounded-md font-semibold p-4 disabled:cursor-wait  disabled:bg-blue-500/50"
                        disabled={loading}
                    >
                        Sign In
                    </button>
                </form>
            </div>
            <div className="h-[80%] w-1  border-[1px] border-slate-100/50"></div>
            <div className="flex flex-1 flex-col items-center gap-5">
                <h2>Create an Account</h2>
                <form
                    className="flex flex-col items-center justify-center gap-5"
                    onSubmit={handleRegister}
                >
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
                        required
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="p-5 border-none outline-none rounded-md bg-blue-950/50"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="p-5 border-none outline-none rounded-md bg-blue-950/50"
                        required
                    />
                    <button
                        className="w-full bg-blue-500 cursor-pointer rounded-md font-semibold p-4 disabled:cursor-wait  disabled:bg-blue-500/50"
                        disabled={loading}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
