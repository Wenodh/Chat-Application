import {
    arrayUnion,
    collection,
    doc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
    where,
} from 'firebase/firestore';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { db } from '../../../../lib/firebase';
import { useUserStore } from '../../../../lib/userStore';

const AddUser = () => {
    const [user, setUser] = useState(null);

    const { currentUser } = useUserStore();
    const handleSearch = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');

        try {
            const userRef = collection(db, 'users');
            const q = query(userRef, where('username', '==', username));
            const querySnapShot = await getDocs(q);
            if (!querySnapShot.empty) {
                setUser(querySnapShot.docs[0].data());
            }
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    };

    const handleAdd = async () => {
        const chatRef = collection(db, 'chats');
        const userChatsRef = collection(db, 'userschats');

        try {
            const newChatRef = doc(chatRef);

            await setDoc(newChatRef, {
                createdAt: serverTimestamp(),
                messages: [],
            });

            await updateDoc(doc(userChatsRef, user.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: '',
                    receiverId: currentUser.id,
                    updatedAt: Date.now(),
                }),
            });

            await updateDoc(doc(userChatsRef, currentUser.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: '',
                    receiverId: user.id,
                    updatedAt: Date.now(),
                }),
            });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 w-max h-max p-8 bg-blue-950/90 m-auto rounded-lg">
            <form className="flex gap-5" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    className="p-5 border-none outline-none rounded-md text-black font-black"
                />
                <button className="p-5 rounded-md border-none bg-blue-500 cursor-pointer">
                    Search
                </button>
            </form>
            {user && (
                <div className="mt-12 flex items-center justify-between">
                    <div className="flex gap-5 items-center">
                        <img
                            src={user.avatar || './avatar.png'}
                            alt=""
                            className="w-12 h-12"
                        />
                        <span>{user.username}</span>
                    </div>
                    <button
                        className="p-3 rounded-md border-none bg-blue-500 cursor-pointer"
                        onClick={handleAdd}
                    >
                        Add User
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddUser;
