import React from 'react'

export default function Modal({setShow}) {

    const handleClick = () => {
        setShow(false)
    }
  return (
    <section className='h-screen  fixed grid inset-0'>
        <div className='bg-slate-300 opacity-80 fixed inset-0'></div>
        <div className='max-w-lg bg-white shadow-2xl grid space-y-10 m-auto px-14 relative z-50 py-10'>
         <h1 className='text-lg  text-green-600'>Are you sure you want to exit?</h1>
         <div className='flex ml-auto gap-4 items-center'>
            <button onClick={handleClick} className='p-3 bg-green-500 hover:bg-green-600 text-white'>Yes</button>
            <button onClick={handleClick} className='p-3 bg-red-500 hover:bg-red-600 text-white'>No</button>
         </div>
        </div>
    </section>
  )
}
