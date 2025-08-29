import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({data}) => {
    const [userData, setUserData] = useContext(AuthContext)

    const handleCompleteTask = () => {
        // Find the current employee in userData
        const currentEmployee = userData.find(emp => 
            emp.tasks.some(task => 
                task.taskTitle === data.taskTitle && 
                task.taskDate === data.taskDate &&
                task.active === true
            )
        )

        if (currentEmployee) {
            const updatedData = [...userData]
            const employeeIndex = updatedData.findIndex(emp => emp.firstName === currentEmployee.firstName)
            
            if (employeeIndex !== -1) {
                // Find and update the specific task
                const taskIndex = updatedData[employeeIndex].tasks.findIndex(task => 
                    task.taskTitle === data.taskTitle && 
                    task.taskDate === data.taskDate &&
                    task.active === true
                )
                
                if (taskIndex !== -1) {
                    // Update task status
                    updatedData[employeeIndex].tasks[taskIndex].active = false
                    updatedData[employeeIndex].tasks[taskIndex].completed = true
                    
                    // Update task counts
                    updatedData[employeeIndex].taskCounts.active -= 1
                    updatedData[employeeIndex].taskCounts.completed += 1
                    
                    // Update context and localStorage
                    setUserData(updatedData)
                    localStorage.setItem('employees', JSON.stringify(updatedData))
                    
                    // Update loggedInUser if this is the current employee
                    const loggedInUser = localStorage.getItem('loggedInUser')
                    if (loggedInUser) {
                        const userInfo = JSON.parse(loggedInUser)
                        if (userInfo.role === 'employee' && userInfo.data.firstName === currentEmployee.firstName) {
                            localStorage.setItem('loggedInUser', JSON.stringify({ 
                                role: 'employee', 
                                data: updatedData[employeeIndex]
                            }))
                        }
                    }
                    
                    console.log('Task completed:', data.taskTitle)
                }
            }
        }
    }

    const handleFailedTask = () => {
        // Find the current employee in userData
        const currentEmployee = userData.find(emp => 
            emp.tasks.some(task => 
                task.taskTitle === data.taskTitle && 
                task.taskDate === data.taskDate &&
                task.active === true
            )
        )

        if (currentEmployee) {
            const updatedData = [...userData]
            const employeeIndex = updatedData.findIndex(emp => emp.firstName === currentEmployee.firstName)
            
            if (employeeIndex !== -1) {
                // Find and update the specific task
                const taskIndex = updatedData[employeeIndex].tasks.findIndex(task => 
                    task.taskTitle === data.taskTitle && 
                    task.taskDate === data.taskDate &&
                    task.active === true
                )
                
                if (taskIndex !== -1) {
                    // Update task status
                    updatedData[employeeIndex].tasks[taskIndex].active = false
                    updatedData[employeeIndex].tasks[taskIndex].failed = true
                    
                    // Update task counts
                    updatedData[employeeIndex].taskCounts.active -= 1
                    updatedData[employeeIndex].taskCounts.failed += 1
                    
                    // Update context and localStorage
                    setUserData(updatedData)
                    localStorage.setItem('employees', JSON.stringify(updatedData))
                    
                    // Update loggedInUser if this is the current employee
                    const loggedInUser = localStorage.getItem('loggedInUser')
                    if (loggedInUser) {
                        const userInfo = JSON.parse(loggedInUser)
                        if (userInfo.role === 'employee' && userInfo.data.firstName === currentEmployee.firstName) {
                            localStorage.setItem('loggedInUser', JSON.stringify({ 
                                role: 'employee', 
                                data: updatedData[employeeIndex]
                            }))
                        }
                    }
                    
                    console.log('Task failed:', data.taskTitle)
                }
            }
        }
    }

    return (
        <div className='bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group'>
            <div className='flex justify-between items-start mb-3'>
                <span className='text-yellow-600 text-xs font-medium bg-yellow-50 px-3 py-1.5 rounded-full group-hover:bg-yellow-100 transition-colors'>
                    {data.category}
                </span>
                <span className='text-gray-400 text-xs'>
                    {new Date(data.taskDate).toLocaleDateString()}
                </span>
            </div>
            
            <h3 className='font-semibold text-gray-800 text-sm mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors'>
                {data.taskTitle}
            </h3>
            
            <p className='text-gray-600 text-xs mb-4 line-clamp-2'>
                {data.taskDescription}
            </p>
            
            <div className='flex space-x-2'>
                <button 
                    onClick={handleCompleteTask}
                    className='flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xs py-2.5 px-3 rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md'
                >
                    Complete
                </button>
                <button 
                    onClick={handleFailedTask}
                    className='flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-xs py-2.5 px-3 rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md'
                >
                    Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask