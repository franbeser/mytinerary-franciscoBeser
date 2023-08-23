import React from 'react'

function Footer() {
  return (
    <>
<div className=' text-white font-semibold absolute bottom-0 w-full flex h-[7vh] items-center justify-between bg-black px-10'>
<h1>MINDHUB<span className='hidden sm:inline-block' > - AP MERN 07 TN</span></h1>
<button className="bg-blue-400 hover:bg-blue-500 text-white py-1 px-2 border border-gray-500 rounded flex  justify-center items-center gap-1">
                <p className=' text-sm m-0'>🤍</p>

                <p className='hidden sm:flex'>Follow Us</p>
            </button>
</div>
</>
  )}

export default Footer