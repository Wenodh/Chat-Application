import React, { useState } from 'react';
import AddUser from './addUser/AddUser';

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    return (
        <div className="flex-1 overflow-y-auto">
            <div className="flex items-center gap-5 p-5">
                <div className="bg-blue-950/50 flex items-center rounded-md gap-5 p-3">
                    <img className="w-5 h-5" src="./search.png" alt="" />
                    <input
                        className="bg-transparent border-none outline-none flex-1"
                        placeholder="Search"
                    />
                </div>
                <img
                    className="w-9 h-9 p-3 rounded-md cursor-pointer bg-blue-950/50"
                    src={addMode ? './minus.png' : './plus.png'}
                    alt=""
                    onClick={() => setAddMode(!addMode)}
                />
            </div>
            <div className="flex items-center p-5 gap-5 cursor-pointer border-b-[1px] border-slate-100/50">
                <img
                    className="w-12 h-12 rounded-full object-cover"
                    src="./avatar.png"
                    alt=""
                />
                <div className=" flex flex-col gap-3">
                    <span className="font-medium">Wenodh</span>
                    <p className="font-normal">Hello</p>
                </div>
            </div>
            <div className="flex items-center p-5 gap-5 cursor-pointer border-b-[1px] border-slate-100/50">
                <img
                    className="w-12 h-12 rounded-full object-cover"
                    src="./avatar.png"
                    alt=""
                />
                <div className=" flex flex-col gap-3">
                    <span className="font-medium">Wenodh</span>
                    <p className="font-normal">Hello</p>
                </div>
            </div>
            <div className="flex items-center p-5 gap-5 cursor-pointer border-b-[1px] border-slate-100/50">
                <img
                    className="w-12 h-12 rounded-full object-cover"
                    src="./avatar.png"
                    alt=""
                />
                <div className=" flex flex-col gap-3">
                    <span className="font-medium">Wenodh</span>
                    <p className="font-normal">Hello</p>
                </div>
            </div>
            <div className="flex items-center p-5 gap-5 cursor-pointer border-b-[1px] border-slate-100/50">
                <img
                    className="w-12 h-12 rounded-full object-cover"
                    src="./avatar.png"
                    alt=""
                />
                <div className=" flex flex-col gap-3">
                    <span className="font-medium">Wenodh</span>
                    <p className="font-normal">Hello</p>
                </div>
            </div>
            {addMode && <AddUser />}
        </div>
    );
};

export default ChatList;
