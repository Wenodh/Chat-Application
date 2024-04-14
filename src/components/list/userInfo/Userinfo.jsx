import React from 'react'

const Userinfo = () => {
  return (
      <div className='flex p-5 items-center justify-between'>
          <div className='flex items-center gap-5'>
              <img className='object-cover w-12 h-12 rounded-full' src="./avatar.png" alt="" />
              <h2>Wenodh</h2>
          </div>
          <div className='flex gap-5'>
              <img className='w-5 h-5 cursor-pointer' src="./more.png" alt=""/>
              <img className='w-5 h-5 cursor-pointer' src="./video.png" alt=""/>
              <img className='w-5 h-5 cursor-pointer' src="./edit.png" alt=""/>
          </div>
    </div>
  )
}

export default Userinfo