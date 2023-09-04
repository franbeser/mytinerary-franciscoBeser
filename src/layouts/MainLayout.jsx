import React, { useState } from 'react'
import Nav from '../components/Nav'
import { linksHome } from '../utils/List'
import { dialogClasses } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


const MainLayout = () => {

    const [bar, setBar] = useState(false)

    return (
        <div className=' w-full  min-h-screen bg-[url(/cordobaArgentina.jpg)] bg-cover overflow-x-hidden flex flex-col align-middle'>

            <div className='h-screen'>

                <div className='w-100 flex h-[10vh] items-center justify-between bg-black  border-box absolute top-0 '>
                    <Link to="">
                        <header className='flex justify-center items-center h-full p-2'>
                            <img src="/myTineraryLogo.png" alt="logo" className='h-10 mx-2 px-2 ' />
                            <h1 className=' font-bold text-2xl text-white hidden sm:flex'>myTinerary</h1>
                        </header>
                    </Link>
                    <div className='flex gap-2 m-3 text-white font-light'>
                        <Nav className={'hidden sm:flex gap-3 flex-row mx-4 text-white justify-center items-center'} links={linksHome} />

                        <button onClick={() => setBar(!bar)} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-2 border border-gray-500 rounded flex sm:hidden justify-center items-center">
                            <p className=' text-sm m-0'>⛯</p>
                        </button>

                        {
                            bar && (
                                <Nav className={'flex sm:hidden text-sm  flex-col justify-center align-middle right-24 top-2 absolute border border-blue-600 bg-blue-500 bg-opacity-30 p-1 rounded'} links={linksHome} />
                            )
                        }


                        <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-2 border border-gray-500 rounded flex  justify-center items-center gap-1">
                            <p className=' text-sm m-0'>👤</p>

                            <p className='hidden sm:flex'>Login</p>
                        </button>
                    </div>
                </div>


                <main className="flex-grow">
                    <Outlet />
                </main>

                <Footer className="fixed inset-x-0 bottom-0" />


            </div>
        </div>




    )
}

export default MainLayout