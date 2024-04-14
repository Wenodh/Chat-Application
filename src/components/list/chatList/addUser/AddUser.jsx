import React from 'react';

const AddUser = () => {
    return (
        <div className='absolute top-0 bottom-0 left-0 right-0 w-max h-max p-8 bg-blue-950/90 m-auto rounded-lg'>
            <form className='flex gap-5'>
                <input type="text" placeholder="Username" name="username"  className="p-5 border-none outline-none rounded-md"/>
                <button className='p-5 rounded-md border-none bg-blue-500 cursor-pointer'>Search</button>
            </form>
            <div className="mt-12 flex items-center justify-between">
                <div className="flex gap-5 items-center">
                    <img src="./avatar.png" alt="" className='w-12 h-12' />
                    <span>Wenodh</span>
                </div>
                <button  className='p-3 rounded-md border-none bg-blue-500 cursor-pointer'>Add User</button>
            </div>
        </div>
    );
};

export default AddUser;
