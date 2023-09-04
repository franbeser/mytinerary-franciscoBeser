import { Popover } from 'react-tiny-popover'
import { initFlowbite } from 'flowbite'
import { useParams } from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom'


const Card2 = ({  }) => {



    return (
        <>
            <div className=" w-[14rem] h-[20rem] sm:w-[28rem] sm:h-[16rem] bg-black bg-opacity-75 border border-fuchsia-400 rounded-lg m-1 flex flex-col">

                <div className="p-2 flex flex-col items-center ">

                    <h5 className="text-base sm:text-2xl font-bold text-white text-center">ITINERARY NAME</h5>
                    <h5 className="mb-1 text-xl font-semibold text-white text-center">$$$</h5>

                    <div className='flex flex-row gap-2 items-center my-2'>

                        <img className='rounded-full w-[2rem] h-[2rem]' src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Juan_Perez_de_Zurita.jpg" alt="" />
                        <h3 className=' text-sm font-bold text-white text-center italic'>AUTHOR NAME</h3>
                    </div>

                    <p className="mb-2 font-normal text-white text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor corporis aperiam, delectus officia laudantium aliquid.</p>
                    <h3 className='mb-1 text-sm font-semibold text-white text-center'>DURATION: 60min</h3>



                    {/* <!-- Modal toggle --> */}
                    <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="h-[2rem] mt-2 flex justify-center items-center text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                        View More</button>

                    {/* <!-- Main modal --> */}
                    <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative w-full max-w-2xl max-h-full">
                            {/* <!-- Modal content --> */}
                            <div className="relative bg-gray-800 rounded-lg shadow">
                                {/* <!-- Modal header --> */}
                                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-white">
                                        Section Under Construction
                                    </h3>
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>

                                    </button>
                                </div>
                                {/* <!-- Modal body --> */}
                                <div className="p-6 space-y-6">
                                    <div className="flex flex-col justify-center items-center text-base leading-relaxed text-gray-500 ">
                                        <img className='h-96 ' src="https://images.squarespace-cdn.com/content/v1/5ae82a16e74940ea6cfdfc94/9979f422-9213-41af-a84f-febd50d9a6f2/Under+Construction+Poster.png?format=2500w" alt="" />                </div>

                                </div>
                                {/* <!-- Modal footer --> */}
                                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button data-modal-hide="defaultModal" type="button" className="text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"> Close</button>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Card2