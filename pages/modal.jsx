import Modal from '@/components/Modal'
import React, { useState } from 'react'

export default function modal() {
  const [show, setShow] = useState(false);

  const handClick = () => {
    setShow(true)
  }
  return (
    <>
    <div className='relative'>
       <div className="max-w-7xl bg-gray-100 py-32 grid  mx-auto">
        <button className='px-5 m-auto py-4 bg-blue-500 hover:bg-blue-600 text-semibold text-white tracking-wide' onClick={handClick} >Click here if you want to pop up a modal</button>
       </div>
    </div>
    {show && <Modal setShow={setShow}/>}
    </>
  )
}
