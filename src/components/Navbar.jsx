import React from 'react'

 


export default function Navbar() {
  return (
    <div className='flex justify-between bg-green-400 p-3 px-5 w-full h-[10vh] items-center max-[640px]:flex-col max-[640px]:gap-3'>
        <div className="text-white font-medium font-sans text-5xl " onDoubleClick={()=> localStorage.setItem('user', false)}>Messenger</div>
        <div className="text-red-900 font-medium">This is site test mode!!!</div>
        <div className="flex  gap-3 items-center max-[640px]:hidden">
            <p className='text-white font-medium text-2xl '>SUPERadmin</p>
            <div className="rounded-[50%] bg-blue-400 w-[50px] h-[50px] " onDoubleClick={()=> localStorage.setItem('user', true)}></div>
        </div>
    </div>
  )
}
