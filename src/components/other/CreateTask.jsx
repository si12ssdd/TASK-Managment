import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { setLocalStorage } from '../../utils/localStorage'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = { 
            taskTitle, 
            taskDescription, 
            taskDate, 
            category, 
            active: false, 
            newTask: true, 
            failed: false, 
            completed: false 
        }

        const updatedData = [...userData]

        updatedData.forEach(function (elem) {
            if (asignTo === elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        
        setUserData(updatedData)
        
        // Update localStorage with the new data
        localStorage.setItem('employees', JSON.stringify(updatedData))
        
        // Update the loggedInUser in localStorage if the assigned employee is currently logged in
        const loggedInUser = localStorage.getItem('loggedInUser')
        if (loggedInUser) {
            const userInfo = JSON.parse(loggedInUser)
            if (userInfo.role === 'employee' && userInfo.data.firstName === asignTo) {
                const updatedEmployee = updatedData.find(emp => emp.firstName === asignTo)
                localStorage.setItem('loggedInUser', JSON.stringify({ 
                    role: 'employee', 
                    data: updatedEmployee 
                }))
            }
        }

        console.log('Task created and assigned to:', asignTo)
        console.log('Updated data:', updatedData)

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <form onSubmit={submitHandler} className='space-y-6'>
            <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-700'>
                    Task Title
                </label>
                <input
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400'
                    type="text"
                    placeholder='Enter task title'
                    required
                />
            </div>
            
            <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-700'>
                    Due Date
                </label>
                <input
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400'
                    type="date"
                    required
                />
            </div>
            
            <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-700'>
                    Assign To
                </label>
                <select
                    value={asignTo}
                    onChange={(e) => setAsignTo(e.target.value)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400'
                    required
                >
                    <option value="">Select Employee</option>
                    {userData && userData.map((employee, index) => (
                        <option key={index} value={employee.firstName}>
                            {employee.firstName}
                        </option>
                    ))}
                </select>
            </div>
            
            <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-700'>
                    Category
                </label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400'
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Development">Development</option>
                    <option value="Design">Design</option>
                    <option value="Testing">Testing</option>
                    <option value="Documentation">Documentation</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            
            <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-700'>
                    Description
                </label>
                <textarea
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 h-32 resize-none'
                    placeholder='Enter task description...'
                    required
                />
            </div>
            
            <button 
                type="submit"
                className='w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl'
            >
                Create Task
            </button>
        </form>
    )
}

export default CreateTask