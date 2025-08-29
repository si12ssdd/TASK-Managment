import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50'>
        {/* Header */}
        <div className='bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-10'>
            <div className='max-w-7xl mx-auto px-6 py-4'>
                <Header changeUser={props.changeUser} data={props.data}/>
            </div>
        </div>
        
        {/* Main Content */}
        <div className='max-w-7xl mx-auto px-6 py-8'>
            {/* Task Statistics */}
            <div className='mb-8'>
                <div className='bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300'>
                    <div className='flex items-center mb-8'>
                        <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg'>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold text-gray-800'>Task Overview</h2>
                            <p className='text-gray-500 text-sm'>Your current task statistics</p>
                        </div>
                    </div>
                    <TaskListNumbers data={props.data} />
                </div>
            </div>
            
            {/* Task List */}
            <div className='bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300'>
                <div className='flex items-center mb-8'>
                    <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg'>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-gray-800'>My Tasks</h2>
                        <p className='text-gray-500 text-sm'>Manage and track your assigned tasks</p>
                    </div>
                </div>
                <TaskList data={props.data} />
            </div>
        </div>
    </div>
  )
}

export default EmployeeDashboard