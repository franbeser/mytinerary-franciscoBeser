import React from 'react'

import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { server } from '../utils/axios.js'

import { GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode';
import GoogleLoginButton from '../components/GoogleLoginButton.jsx'
import { useDispatch } from 'react-redux'
import { login } from '../actions/authActions.js'


const SignIn = () => {

    const inputEmail = useRef()
    const inputPw = useRef()
    const dispatch = useDispatch()

    const handleSubmitGoogle = async (data) => {
        const userData = { ...data }
          if (userData.terms) delete userData.terms
            const res = await server.post('/auth/in', userData)
            console.log(res);
            dispatch(login(res.data))

    }

    const handleSubmit = async () => {
        
        const userData = { 
            email: inputEmail.current.value,
            password: inputPw.current.value,
         }
            const res = await server.post('/auth/in', userData)
            console.log(res);
            dispatch(login(res.data))

    }


    return (

        <section className='mt-12 mb-20'>

            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a className="flex text-white items-center mb-6 text-2xl font-bold">
                    <img className="w-8 h-8 mr-2" src="/myTineraryLogo.png" alt="logo" />
                    myTinerary
                </a>
                <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="text-white mb-0 text-center text-bold text-2xl">
                            <h5>Sign In</h5>
                        </div>
                        <div className="flex justify-center items-center align-middle flex-wrap px-3  sm:px-6 xl:px-12">
                            {/* <div className="w-3/12 max-w-full px-1 mr-auto flex-1">
                        <a className="flex justify-center items-center w-full px-6 py-3 mb-0 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75">
                            <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 64 64" height="32px" width="24px">
                                <g fillRule="evenodd" fill="none" strokeWidth="1" stroke="none">
                                    <g fillRule="nonzero" transform="translate(3.000000, 2.000000)">
                                        <path fill="#4285F4" d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"></path>
                                        <path fill="#34A853" d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"></path>
                                        <path fill="#FBBC05" d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"></path>
                                        <path fill="#EB4335" d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"></path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div> */}

                            {/* <GoogleLogin
                                onSuccess={credentialResponse => {
                                    console.log(credentialResponse);
                                    const infoUser = jwtDecode(credentialResponse.credential)
                                    console.log(infoUser);
                                    handleSubmitGoogle({
                                        email: infoUser.email,
                                        name: infoUser.given_name + " " + infoUser.family_name,
                                        password: "1234AaAa",
                                        terms: true,
                                    })

                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                                useOneTap
                            /> */}
                            <GoogleLoginButton fn={handleSubmitGoogle} />
                        </div>
                        <div className="relative w-full max-w-full px-3 text-center shrink-0">
                            <p className="text-white mb-0 text-center text-2xl">or</p>
                        </div>
                    </div>
                    <div className="flex-auto p-6">
                        <form role="form text-left">
                            <div className="mb-4">
                                <input ref={inputEmail} aria-describedby="email-addon" aria-label="Email" placeholder="Email" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="email" />
                            </div>
                            <div className="mb-4">
                                <input ref={inputPw} aria-describedby="password-addon" aria-label="Password" placeholder="Password" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="password" />
                            </div>

                            <div className="text-center">
                                <button onClick={handleSubmit} className="flex justify-center w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle  bg-fuchsia-700 hover:bg-fuchsia-800 border border-white rounded-lg cursor-pointer ">Sign in</button>
                            </div>
                            <p className="mt-4 mb-0 leading-normal text-white text-sm">Don&apos;t have an account? <Link className="font-bold text-white" to="/auth/up">Sign up</Link></p>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SignIn