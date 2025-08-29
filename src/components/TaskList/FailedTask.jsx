import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className='bg-white border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow'>
        <div className='flex justify-between items-start mb-2'>
            <span className='text-red-600 text-xs font-medium bg-red-50 px-2 py-1 rounded'>
                {data.category}
            </span>
            <span className='text-gray-400 text-xs'>
                {new Date(data.taskDate).toLocaleDateString()}
            </span>
        </div>
        
        <h3 className='font-medium text-gray-800 text-sm mb-2 line-clamp-2'>
            {data.taskTitle}
        </h3>
        
        <p className='text-gray-600 text-xs mb-3 line-clamp-2'>
            {data.taskDescription}
        </p>
        
        <div className='flex items-center justify-center'>
            <span className='text-red-600 text-xs font-medium bg-red-50 px-2 py-1 rounded'>
                ✗ Failed
            </span>
        </div>
    </div>
  )
}

export default FailedTask