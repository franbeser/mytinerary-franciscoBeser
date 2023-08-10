import React from 'react'

const Card = ({src, name }) => {
    return (

        <>
            <div className='w-60 p-2 flex flex-col justify-center'>
                <img className=' h-full object-cover border border-violet-800' src={src} alt="" />
                <h1 className='text-white text-xs sm:text-lg bg-black border border-violet-800 flex justify-center px-1'>{name}</h1>
            </div>

        </>
    )
}

export default Card