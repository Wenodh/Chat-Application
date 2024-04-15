import { useEffect, useState } from 'react';
import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { useUserStore } from './lib/userStore';

const App = () => {
    const { currentUser, isLoading, fetchUserInfo } = useUserStore();
    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (user) => {
            fetchUserInfo(user?.uid);
        });
        return () => {
            unSub();
        };
    }, [fetchUserInfo]);
    if (isLoading)
        return (
            <div className="p-5 text-2xl bg-blue-950/50 rounded-lg">
                Loading...
            </div>
        );
    return (
        <div className="container backdrop-blur-md bg-blue-800/30 w-[95vw] h-[90vh] rounded-xl flex">
            {currentUser ? (
                <>
                    <List />
                    <Chat />
                    <Detail />
                </>
            ) : (
                <Login />
            )}
            <Notification />
        </div>
    );
};

export default App;
