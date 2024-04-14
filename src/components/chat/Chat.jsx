import EmojiPicker from 'emoji-picker-react';
import React, { useEffect, useRef, useState } from 'react';

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');

    const endRef = useRef(null)
    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        setOpen(false);
    };
    useEffect(() => {
        endRef.current?.scrollIntoView({behavior: "smooth"})
    },[])
    return (
        <div className="flex-2 flex-col border-x-[1px] border-slate-100/50 h-full flex">
            <div className="p-5 flex items-center justify-between border-b-[1px] border-slate-100/50">
                <div className="flex items-center p-5 gap-5 cursor-pointer ">
                    <img
                        className="w-14 h-14 rounded-full object-cover"
                        src="./avatar.png"
                        alt=""
                    />
                    <div className=" flex flex-col gap-1">
                        <span className="font-bold text-lg">Wenodh</span>
                        <p className="font-light text-sm text-slate-200">
                            Hello I am wenodh nice to meet you!
                        </p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <img
                        className="w-6 h-6 cursor-pointer hover:bg-blue-950/50 p-1 hover:rounded-md"
                        src="./phone.png"
                        alt=""
                    />
                    <img
                        className="w-6 h-6 cursor-pointer hover:bg-blue-950/50 p-1 hover:rounded-md"
                        src="./video.png"
                        alt=""
                    />
                    <img
                        className="w-6 h-6 cursor-pointer hover:bg-blue-950/50 p-1 hover:rounded-md"
                        src="./info.png"
                        alt=""
                    />
                </div>
            </div>
            {/* Center */}
            <div className="p-5 flex-1 overflow-auto gap-2 flex flex-col">
                <div className="max-w-[80%] flex gap-5">
                    <img
                        src="./avatar.png"
                        alt=""
                        className="w-8 h-8 cursor-pointer rounded-full"
                    />
                    <div className="flex-1 flex-col flex gap-1">
                        <p className="bg-blue-950/50 p-5 rounded-lg">
                            adad adf adad fvsdfaasfdvafdsv adfas adsfas asdf asd
                            dgfbf fg
                        </p>
                        <span className='text-xs'>1 min ago</span>
                    </div>
                </div>
                <div className="max-w-[80%] flex gap-5 ml-auto">
                    <div className="flex-1 flex-col flex gap-1">
                        <p className="bg-blue-500 p-5 rounded-lg">
                            adad adf adad fvsdfaasfdvafdsv adfas adsf sdf asd
                            dgfbf fg
                        </p>
                        <span className='text-xs'>1 min ago</span>
                    </div>
                </div>
                <div className="max-w-[80%] flex gap-5">
                    <img
                        src="./avatar.png"
                        alt=""
                        className="w-8 h-8 cursor-pointer rounded-full"
                    />
                    <div className="flex-1 flex-col flex gap-1">
                        <p className="bg-blue-950/50 p-5 rounded-lg">
                            adad adf adad fvsdfaasfdvafdsv adfas adsfas asdf asd
                            dgfbf fg
                        </p>
                        <span className='text-xs'>1 min ago</span>
                    </div>
                </div>
                <div className="max-w-[80%] flex gap-5 ml-auto">
                    <div className="flex-1 flex-col flex gap-1">
                        <p className="bg-blue-500 p-5 rounded-lg">
                            adad adf adad fvsdfaasfdvafdsv adfas adsf sdf asd
                            dgfbf fg
                        </p>
                        <span className='text-xs'>1 min ago</span>
                    </div>
                </div>
                <div className="max-w-[80%] flex gap-5">
                    <img
                        src="./avatar.png"
                        alt=""
                        className="w-8 h-8 cursor-pointer rounded-full"
                    />
                    <div className="flex-1 flex-col flex gap-1">
                        <p className="bg-blue-950/50 p-5 rounded-lg">
                            adad adf adad fvsdfaasfdvafdsv adfas adsfas asdf asd
                            dgfbf fg
                        </p>
                        <span className='text-xs'>1 min ago</span>
                    </div>
                </div>
                <div className="max-w-[80%] flex gap-5 ml-auto">
                    <div className="flex-1 flex-col flex gap-1">
                        <p className="bg-blue-500 p-5 rounded-lg">
                            we adad adf adad fvsdfaasfdvafdsv adfas adsf sdf asd
                            dgfbf fg
                        </p>
                        <span className='text-xs'>1 min ago</span>
                    </div>
                </div>
                <div className="max-w-[80%] flex gap-5">
                    <img
                        src="./avatar.png"
                        alt=""
                        className="w-8 h-8 cursor-pointer rounded-full"
                    />
                    <div className="flex-1 flex-col flex gap-1">
                        <p className="bg-blue-950/50 p-5 rounded-lg">
                            adad adf adad fvsdfaasfdvafdsv adfas adsfas asdf asd
                            dgfbf fg
                        </p>
                        <span className='text-xs'>1 min ago</span>
                    </div>
                </div>
                <div className="max-w-[80%] flex gap-5 ml-auto">
                    <div className="flex-1 flex-col flex gap-1">
                        <p className="bg-blue-500 p-5 rounded-lg">
                            adad adf adad fvsdfaasfdvafdsv adfas adsf sdf asd
                            dgfbf fg
                        </p>
                        <span className='text-xs'>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            {/* Bottom */}
            <div className="p-5 flex items-center justify-between border-t-[1px] border-slate-100/50 gap-5">
                <div className="flex gap-5">
                    <img
                        className="w-6 h-6 cursor-pointer hover:bg-blue-950/50 p-1 hover:rounded-md"
                        src="./img.png"
                        alt=""
                    />
                    <img
                        className="w-6 h-6 cursor-pointer hover:bg-blue-950/50 p-1 hover:rounded-md"
                        src="./camera.png"
                        alt=""
                    />
                    <img
                        className="w-6 h-6 cursor-pointer hover:bg-blue-950/50 p-1 hover:rounded-md"
                        src="./mic.png"
                        alt=""
                    />
                </div>
                <input
                    type="text"
                    className="bg-blue-950/50 border-none outline-none flex-1 rounded-md p-2 text-base"
                    placeholder="Type a message..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="relative">
                    <img
                        className="w-6 h-6 cursor-pointer hover:bg-blue-950/50 p-1 hover:rounded-lg"
                        src="./emoji.png"
                        alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className="absolute bottom-12 left-0">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className="bg-blue-500 px-3 py-2 rounded-lg cursor-pointer">
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
