import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({data}) => {
    const [userData, setUserData] = useContext(AuthContext)

    const handleAcceptTask = () => {
        // Find the current employee in userData
        const currentEmployee = userData.find(emp => 
            emp.tasks.some(task => 
                task.taskTitle === data.taskTitle && 
                task.taskDate === data.taskDate &&
                task.newTask === true
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
                    task.newTask === true
                )
                
                if (taskIndex !== -1) {
                    // Update task status
                    updatedData[employeeIndex].tasks[taskIndex].newTask = false
                    updatedData[employeeIndex].tasks[taskIndex].active = true
                    
                    // Update task counts
                    updatedData[employeeIndex].taskCounts.newTask -= 1
                    updatedData[employeeIndex].taskCounts.active += 1
                    
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
                    
                    console.log('Task accepted:', data.taskTitle)
                }
            }
        }
    }

    return (
        <div className='bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group'>
            <div className='flex justify-between items-start mb-3'>
                <span className='text-blue-600 text-xs font-medium bg-blue-50 px-3 py-1.5 rounded-full group-hover:bg-blue-100 transition-colors'>
                    {data.category}
                </span>
                <span className='text-gray-400 text-xs'>
                    {new Date(data.taskDate).toLocaleDateString()}
                </span>
            </div>
            
            <h3 className='font-semibold text-gray-800 text-sm mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors'>
                {data.taskTitle}
            </h3>
            
            <p className='text-gray-600 text-xs mb-4 line-clamp-2'>
                {data.taskDescription}
            </p>
            
            <button 
                onClick={handleAcceptTask}
                className='w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs py-2.5 px-3 rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md'
            >
                Accept Task
            </button>
        </div>
    )
}

export default NewTask