import React from 'react'
import { auth } from '../../lib/firebase'

const Detail = () => {
  return (
      <div className="flex flex-col flex-1 h-full">
          <div className="px-8 py-5 flex flex-col items-center gap-5 border-b-[1px] border-slate-100/50">
              <img src="./avatar.png" alt="" className="w-28 h-28 object-cover rounded-full" />
              <h2>Wenodh</h2>
              <p>ad;f;dl djf ld d dshf </p>
          </div>
          <div className="p-5 flex flex-col gap-8 overflow-y-auto ">
              <div className="">
                  <div className="flex items-center justify-between">
                      <span>Chat Settings</span>
                      <img src="./arrowUp.png" alt="" className="w-8 h-8 p-2 bg-blue-950/50 rounded-full cursor-pointer" />
                  </div>
              </div>
              <div className="">
                  <div className="flex items-center justify-between">
                      <span>Chat Settings</span>
                      <img src="./arrowUp.png" alt="" className="w-8 h-8 p-2 bg-blue-950/50 rounded-full cursor-pointer" />
                  </div>
              </div>
              <div className="">
                  <div className="flex items-center justify-between">
                      <span>Shared Photos</span>
                      <img src="./arrowUp.png" alt="" className="w-8 h-8 p-2 bg-blue-950/50 rounded-full cursor-pointer" />
                  </div>
                  <div className='flex flex-col gap-5 mt-5'>
                      <div className="flex justify-between items-center">
                          <div className="flex items-center gap-5">
                              <img src="./avatar.png" alt="" className="w-10 h-10 rounded-sm object-cover" />
                              <span className="font-xs text-gray-300 font-light">photo_2024_2.png</span>
                          </div>
                          <img src="./download.png" alt="" className='w-8 h-8 cursor-pointer p-1 bg-blue-950/50 ' />
                      </div>
                      <div className="flex justify-between items-center">
                          <div className="flex items-center gap-5">
                              <img src="./avatar.png" alt="" className="w-10 h-10 rounded-sm object-cover" />
                              <span className="font-xs text-gray-300 font-light">photo_2024_2.png</span>
                          </div>
                          <img src="./download.png" alt="" className='w-8 h-8 cursor-pointer p-1 bg-blue-950/50 ' />
                      </div>
                      <div className="flex justify-between items-center">
                          <div className="flex items-center gap-5">
                              <img src="./avatar.png" alt="" className="w-10 h-10 rounded-sm object-cover" />
                              <span className="font-xs text-gray-300 font-light">photo_2024_2.png</span>
                          </div>
                          <img src="./download.png" alt="" className='w-8 h-8 cursor-pointer p-1 bg-blue-950/50 ' />
                      </div>
                  </div>
              </div>
              <div className="">
                  <div className="flex items-center justify-between">
                      <span>Shared Files</span>
                      <img src="./arrowUp.png" alt="" className="w-8 h-8 p-2 bg-blue-950/50 rounded-full cursor-pointer" />
                  </div>
              </div>
              <button className="px-5 py-2 cursor-pointer rounded-md bg-red-500/80 hover:bg-red-500">Block User</button>
              <button className="px-5 py-2 cursor-pointer rounded-md bg-blue-500/80 hover:bg-blue-500" onClick={() => auth.signOut()}>Log Out</button>
          </div>
    </div>
  )
}

export default Detail