import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
   const [userData,setUserData] = useContext(AuthContext)

  return (
    <div className='overflow-hidden rounded-xl border border-gray-200'>
      {/* Table Header */}
      <div className='bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200'>
        <div className='grid grid-cols-5 gap-4 p-6'>
          <div className='font-bold text-gray-800 text-lg'>Employee</div>
          <div className='font-bold text-gray-800 text-center text-lg'>New</div>
          <div className='font-bold text-gray-800 text-center text-lg'>Active</div>
          <div className='font-bold text-gray-800 text-center text-lg'>Completed</div>
          <div className='font-bold text-gray-800 text-center text-lg'>Failed</div>
        </div>
      </div>
      
      {/* Table Body */}
      <div className='bg-white'>
        {userData.map((elem, idx) => (
          <div 
            key={idx} 
            className={`grid grid-cols-5 gap-4 p-6 border-b border-gray-100 hover:bg-gray-50 transition-all duration-200 ${
              idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            }`}
          >
            <div className='flex items-center space-x-4'>
              <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg'>
                <span className='text-white font-bold text-sm'>
                  {elem.firstName.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className='font-semibold text-gray-800 text-lg'>{elem.firstName}</span>
            </div>
            
            <div className='flex items-center justify-center'>
              <span className='bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-shadow'>
                {elem.taskCounts.newTask}
              </span>
            </div>
            
            <div className='flex items-center justify-center'>
              <span className='bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-shadow'>
                {elem.taskCounts.active}
              </span>
            </div>
            
            <div className='flex items-center justify-center'>
              <span className='bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-shadow'>
                {elem.taskCounts.completed}
              </span>
            </div>
            
            <div className='flex items-center justify-center'>
              <span className='bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-shadow'>
                {elem.taskCounts.failed}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Summary */}
      <div className='bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-b-xl'>
        <div className='grid grid-cols-4 gap-6 text-center'>
          <div>
            <div className='text-2xl font-bold text-blue-600 mb-1'>
              {userData.reduce((sum, emp) => sum + emp.taskCounts.newTask, 0)}
            </div>
            <div className='text-sm text-gray-600 font-medium'>Total New</div>
          </div>
          <div>
            <div className='text-2xl font-bold text-yellow-600 mb-1'>
              {userData.reduce((sum, emp) => sum + emp.taskCounts.active, 0)}
            </div>
            <div className='text-sm text-gray-600 font-medium'>Total Active</div>
          </div>
          <div>
            <div className='text-2xl font-bold text-green-600 mb-1'>
              {userData.reduce((sum, emp) => sum + emp.taskCounts.completed, 0)}
            </div>
            <div className='text-sm text-gray-600 font-medium'>Total Completed</div>
          </div>
          <div>
            <div className='text-2xl font-bold text-red-600 mb-1'>
              {userData.reduce((sum, emp) => sum + emp.taskCounts.failed, 0)}
            </div>
            <div className='text-sm text-gray-600 font-medium'>Total Failed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllTask