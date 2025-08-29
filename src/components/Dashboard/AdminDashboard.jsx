import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'>
            {/* Header */}
            <div className='bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-10'>
                <div className='max-w-7xl mx-auto px-6 py-4'>
                    <Header changeUser={props.changeUser} />
                </div>
            </div>
            
            {/* Main Content */}
            <div className='max-w-7xl mx-auto px-6 py-8'>
                <div className='grid grid-cols-1 xl:grid-cols-3 gap-8'>
                    {/* Create Task Section */}
                    <div className='xl:col-span-1'>
                        <div className='bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300'>
                            <div className='flex items-center mb-8'>
                                <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg'>
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className='text-2xl font-bold text-gray-800'>Create New Task</h2>
                                    <p className='text-gray-500 text-sm'>Assign tasks to your team members</p>
                                </div>
                            </div>
                            <CreateTask />
                        </div>
                    </div>
                    
                    {/* All Tasks Section */}
                    <div className='xl:col-span-2'>
                        <div className='bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300'>
                            <div className='flex items-center mb-8'>
                                <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg'>
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className='text-2xl font-bold text-gray-800'>Employee Tasks Overview</h2>
                                    <p className='text-gray-500 text-sm'>Monitor task progress across your team</p>
                                </div>
                            </div>
                            <AllTask />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard