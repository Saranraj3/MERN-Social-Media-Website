import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../Assets/PNG/swiper.png'
import design from '../Assets/PNG/mobile-design.png'

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // Perform authentication logic here
        onLogin()
        navigate('/home')
    }

    return (
        <div className='min-h-screen bg-black text-white '>
            <div className='flex pt-[5rem] ml-[15rem]'>
                <img className='cursor-pointer size-[2.5rem]' src={logo} alt="" />
                <h1 className='cursor-pointer ml-[0.5rem] pt-2 text-xl font-bold font-mono '>Login</h1>
            </div>
            <h1 className='mt-3 ml-[12.5rem] font-bold text-2xl'>Let's Get Started</h1>
            <form className='mt-[2rem]' onSubmit={handleSubmit}>
                <div className='ml-[10rem]'>
                    <input className='cursor-pointer w-[17rem] h-[2.3rem] pl-3 rounded-[5px] outline-none border border-black text-black' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                </div>
                <div className='mt-4 ml-[10rem]'>
                    <input className='cursor-pointer w-[17rem] h-[2.3rem] pl-3 rounded-[5px] outline-none border border-black text-black' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                </div>
                <button className='mt-4 ml-[10rem] w-[17rem] h-[2.3rem] rounded-[5px] font-bold hover:bg-green-600 bg-green-500 ' type="submit">Login</button>
            </form>
            <div className='flex mt-5 ml-[9rem] cursor-pointer'>
                <p>You Don't Have an Account Then ?</p>
                <p className='ml-2 text-red-500' onClick={() => navigate('/signup')}>Signup</p>
            </div>
            <div className='mt-[-20rem] mr-[15rem] justify-end flex'>
                <img className=' w-[20rem] h-[28rem] ' src={design} alt="" />
            </div>
        </div>
    )
}

export default Login
