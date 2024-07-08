import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../Assets/PNG/swiper.png'
import design from '../Assets/PNG/mobile-design.png'

const Signup = ({ onSignup }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // Perform authentication logic here
        onSignup()
        navigate('/home')
    }

    return (
        <div className='min-h-screen bg-black text-white '>
            <div className='flex pt-[5rem] ml-[15rem]'>
                <img className='cursor-pointer size-[2.5rem]' src={logo} alt="" />
                <h1 className='cursor-pointer ml-[0.5rem] pt-2 text-xl font-bold font-mono '>Signup</h1>
            </div>
            <h1 className='mt-3 ml-[11rem] font-bold text-2xl'>Create a new account</h1>
            <form className='mt-[2rem]' onSubmit={handleSubmit}>
                <div className='ml-[10rem]'>
                    <input className='cursor-pointer w-[17rem] h-[2.3rem] pl-3 rounded-[5px] outline-none border border-black text-black' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                </div>
                <div className='mt-3 ml-[10rem]'>
                    <input className='cursor-pointer w-[17rem] h-[2.3rem] pl-3 rounded-[5px] outline-none border border-black text-black' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                </div>
                <div className='mt-4 ml-[10rem]'>
                    <input className='cursor-pointer w-[17rem] h-[2.3rem] pl-3 rounded-[5px] outline-none border border-black text-black' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                </div>
                <button className='mt-4 ml-[10rem] w-[17rem] h-[2.3rem] rounded-[5px] font-bold hover:bg-green-600 bg-green-500 ' type="submit">Login</button>
            </form>
            <div className='flex mt-5 ml-[8.6rem] cursor-pointer'>
                <p>You Already Have an Account Then ?</p>
                <p className='ml-2 text-red-500' onClick={() => navigate('/login')}>Login</p>
            </div>
            <div className='mt-[-23rem] mr-[15rem] justify-end flex'>
                <img className=' w-[20rem] h-[28rem] ' src={design} alt="" />
            </div>
        </div>
    )
}

export default Signup
