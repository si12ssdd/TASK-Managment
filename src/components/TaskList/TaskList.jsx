import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div className='space-y-8'>
            {/* Task Categories */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {/* New Tasks */}
                <div className='space-y-4'>
                    <div className='flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200'>
                        <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
                        <h3 className='font-semibold text-blue-800'>New Tasks</h3>
                        <span className='ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full'>
                            {data.tasks.filter(task => task.newTask).length}
                        </span>
                    </div>
                    <div className='space-y-4'>
                        {data.tasks.filter(task => task.newTask).map((elem, idx) => (
                            <div key={idx}>
                                <NewTask data={elem} />
                            </div>
                        ))}
                        {data.tasks.filter(task => task.newTask).length === 0 && (
                            <div className='text-center py-8 text-gray-400 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200'>
                                <div className='text-4xl mb-2'>📭</div>
                                <p className='text-sm font-medium'>No new tasks</p>
                                <p className='text-xs'>Tasks will appear here when assigned</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Active Tasks */}
                <div className='space-y-4'>
                    <div className='flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200'>
                        <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                        <h3 className='font-semibold text-yellow-800'>Active Tasks</h3>
                        <span className='ml-auto bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full'>
                            {data.tasks.filter(task => task.active).length}
                        </span>
                    </div>
                    <div className='space-y-4'>
                        {data.tasks.filter(task => task.active).map((elem, idx) => (
                            <div key={idx}>
                                <AcceptTask data={elem} />
                            </div>
                        ))}
                        {data.tasks.filter(task => task.active).length === 0 && (
                            <div className='text-center py-8 text-gray-400 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200'>
                                <div className='text-4xl mb-2'>⚡</div>
                                <p className='text-sm font-medium'>No active tasks</p>
                                <p className='text-xs'>Accept tasks to start working</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Completed Tasks */}
                <div className='space-y-4'>
                    <div className='flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200'>
                        <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                        <h3 className='font-semibold text-green-800'>Completed</h3>
                        <span className='ml-auto bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full'>
                            {data.tasks.filter(task => task.completed).length}
                        </span>
                    </div>
                    <div className='space-y-4'>
                        {data.tasks.filter(task => task.completed).map((elem, idx) => (
                            <div key={idx}>
                                <CompleteTask data={elem} />
                            </div>
                        ))}
                        {data.tasks.filter(task => task.completed).length === 0 && (
                            <div className='text-center py-8 text-gray-400 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200'>
                                <div className='text-4xl mb-2'>✅</div>
                                <p className='text-sm font-medium'>No completed tasks</p>
                                <p className='text-xs'>Complete tasks to see them here</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Failed Tasks */}
                <div className='space-y-4'>
                    <div className='flex items-center space-x-3 p-4 bg-red-50 rounded-lg border border-red-200'>
                        <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                        <h3 className='font-semibold text-red-800'>Failed</h3>
                        <span className='ml-auto bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full'>
                            {data.tasks.filter(task => task.failed).length}
                        </span>
                    </div>
                    <div className='space-y-4'>
                        {data.tasks.filter(task => task.failed).map((elem, idx) => (
                            <div key={idx}>
                                <FailedTask data={elem} />
                            </div>
                        ))}
                        {data.tasks.filter(task => task.failed).length === 0 && (
                            <div className='text-center py-8 text-gray-400 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200'>
                                <div className='text-4xl mb-2'>❌</div>
                                <p className='text-sm font-medium'>No failed tasks</p>
                                <p className='text-xs'>Keep up the good work!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskList