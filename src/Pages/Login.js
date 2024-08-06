import React, { useState } from 'react'
import loginIcon from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <section id='login' className='h-[60%] mb-20 flex justify-center items-start pt-16'>
            <div className='flex p-4 w-[450px] '>
                <div className='bg-white w-full mx-auto max-w-md p-2 py-5 rounded-md shadow-lg flex flex-col justify-between'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcon} alt="Login Icon" />
                    </div>
                    <form className='pt-6 flex flex-col gap-2 flex-grow'>
                        <div className='grid'>
                            <label>Email :</label>
                            <div className='bg-slate-100 p-2 rounded-md'>
                                <input
                                    className='w-full h-full bg-transparent outline-none'
                                    type="text"
                                    placeholder='Enter Your Email...'
                                />
                            </div>
                        </div>
                        <div>
                            <label>Password :</label>
                            <div className='bg-slate-100 p-2 flex rounded-md'>
                                <input
                                    className='w-full h-full bg-transparent outline-none'
                                    type={showPassword ? "text" : "password"} placeholder='Enter Your Password...'
                                />
                                <div className='cursor-pointer text-xl ml-2' onClick={() => setShowPassword(!showPassword)}>
                                    <span>
                                        {
                                            showPassword ? <FaEye /> : <FaEyeSlash />
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link
                                to="/forgot-password"
                                className="block w-fit ml-auto text-blue-500 text-sm hover:underline hover:text-red-600 transition duration-300 ease-in-out transform hover:scale-105 mt-2"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
                    </form>

                    <p className='my-5'>
                        Don't Have An Account ? 
                        <Link to="/sign-up" className=' text-red-600 ml-2 hover:text-red-700 hover:underline'>
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Login
