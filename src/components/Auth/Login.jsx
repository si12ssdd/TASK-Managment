import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden'>
        {/* Background decoration */}
        <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70'></div>
            <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70'></div>
            <div className='absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70'></div>
        </div>
        
        <div className='relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-md mx-4 border border-white/20'>
            <div className='text-center mb-8'>
                <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg'>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h1 className='text-3xl font-bold text-gray-800 mb-2'>
                    Welcome Back
                </h1>
                <p className='text-gray-600'>
                    Sign in to your account
                </p>
            </div>
            
            <form 
                onSubmit={submitHandler}
                className='space-y-6'
            >
                <div className='space-y-2'>
                    <label htmlFor="email" className='block text-sm font-semibold text-gray-700'>
                        Email Address
                    </label>
                    <input 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400' 
                        type="email" 
                        placeholder='Enter your email' 
                    />
                </div>
                
                <div className='space-y-2'>
                    <label htmlFor="password" className='block text-sm font-semibold text-gray-700'>
                        Password
                    </label>
                    <input
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400' 
                        type="password" 
                        placeholder='Enter your password' 
                    />
                </div>
                
                <button 
                    type="submit"
                    className='w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl'
                >
                    Sign In
                </button>
            </form>
            
            <div className='mt-8 text-center space-y-2'>
                <div className='bg-blue-50 rounded-lg p-4 border border-blue-200'>
                    <p className='text-sm text-gray-700 font-medium'>
                        <span className='text-blue-600 font-bold'>Admin:</span> admin@example.com / 123
                    </p>
                </div>
                <div className='bg-purple-50 rounded-lg p-4 border border-purple-200'>
                    <p className='text-sm text-gray-700 font-medium'>
                        <span className='text-purple-600 font-bold'>Employee:</span> e1@e.com / 123
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;