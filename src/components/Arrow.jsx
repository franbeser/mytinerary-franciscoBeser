import React from 'react'

const Arrow = ({src, alt, fn}) => {
  return (
    <div className='p-1 rounded-full bg-sky-400 border border-white border-opacity-70' onClick={fn}>
<img className='w-4 sm:w-8 cursor-pointer' src={src} alt={alt} />

    </div>
  )
}

export default Arrow