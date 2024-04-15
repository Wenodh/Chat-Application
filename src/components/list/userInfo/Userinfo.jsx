import React from 'react';
import { useUserStore } from '../../../lib/userStore';

const Userinfo = () => {
    const { currentUser } = useUserStore();
    const { avatar, username } = currentUser;
    return (
        <div className="flex p-5 items-center justify-between">
            <div className="flex items-center gap-5">
                <img
                    className="object-cover w-12 h-12 rounded-full"
                    src={avatar || './avatar.png'}
                    alt=""
                />
                <h2>{username}</h2>
            </div>
            <div className="flex gap-5">
                <img
                    className="w-5 h-5 cursor-pointer"
                    src="./more.png"
                    alt=""
                />
                <img
                    className="w-5 h-5 cursor-pointer"
                    src="./video.png"
                    alt=""
                />
                <img
                    className="w-5 h-5 cursor-pointer"
                    src="./edit.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Userinfo;
