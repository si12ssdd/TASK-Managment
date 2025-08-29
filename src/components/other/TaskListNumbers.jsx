import React from 'react'

const TaskListNumbers = ({data}) => {
  const stats = [
    {
      title: 'New Tasks',
      count: data.taskCounts.newTask,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      icon: '📋',
      description: 'Awaiting acceptance'
    },
    {
      title: 'Active Tasks',
      count: data.taskCounts.active,
      color: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700',
      icon: '⚡',
      description: 'Currently working'
    },
    {
      title: 'Completed',
      count: data.taskCounts.completed,
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      icon: '✅',
      description: 'Successfully finished'
    },
    {
      title: 'Failed',
      count: data.taskCounts.failed,
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      icon: '❌',
      description: 'Needs attention'
    }
  ]

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className={`${stat.bgColor} rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300`}
        >
          <div className='flex items-center justify-between mb-4'>
            <span className='text-3xl'>{stat.icon}</span>
            <div className={`w-4 h-4 ${stat.color} rounded-full shadow-lg`}></div>
          </div>
          <div className={`text-3xl font-bold ${stat.textColor} mb-2`}>
            {stat.count}
          </div>
          <div className={`text-sm font-semibold ${stat.textColor} mb-1`}>
            {stat.title}
          </div>
          <div className='text-xs text-gray-500'>
            {stat.description}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumbers