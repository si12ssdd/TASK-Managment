import React, { useState } from 'react'

const Header = (props) => {
  const [username, setUsername] = useState('')

  React.useEffect(() => {
    if(!props.data){
      setUsername('Admin')
    } else {
      setUsername(props.data.firstName)
    }
  }, [props.data])

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-6'>
            <div className='w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300'>
                <span className='text-white font-bold text-lg'>
                    {username ? username.charAt(0).toUpperCase() : 'A'}
                </span>
            </div>
            <div>
                <h1 className='text-2xl font-bold text-gray-800 mb-1'>
                    Welcome back, <span className='gradient-text'>{username}</span>!
                </h1>
                <p className='text-sm text-gray-600 font-medium'>
                    {props.data ? 'Employee Dashboard' : 'Admin Dashboard'}
                </p>
            </div>
        </div>
        
        <button 
            onClick={logOutUser} 
            className='flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl font-semibold'
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Logout</span>
        </button>
    </div>
  )
}

export default Header