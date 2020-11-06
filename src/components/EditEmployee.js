import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link, useHistory } from 'react-router-dom'

export const EditEmployee = (route) => {
    let history = useHistory();
    const { employees, editEmployee } = useContext(GlobalContext)
    const [selectedUser, setSelectedUser] = useState({ id: null, name: '', designation: '', location: '' })
    const currentUserId = route.match.params.id
    const handleOnchange = (userKey, value) => {
        console.log(value)
        setSelectedUser({ ...selectedUser, [userKey]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        editEmployee(selectedUser)
        history.push('/')
    }

    useEffect(() => {
        const employeeId = currentUserId;
        const selectUser = employees.find(emp => emp.id === parseInt(employeeId));
        setSelectedUser(selectUser)
    }, [currentUserId, employees])
    return (
        <>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 py-2" htmlFor="name">Name of Employee</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-none focus:outline-none focus:text-gray-600" 
                            onChange={(e) => handleOnchange('name', e.target.value)}
                            placeholder="Enter name"
                            value={selectedUser.name}
                        />
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 py-2" htmlFor="location">Location</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-none focus:outline-none focus:text-gray-600" 
                            onChange={(e) => handleOnchange('location', e.target.value)}
                            placeholder="Enter location"
                            value={selectedUser.location}
                        />
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 py-2" htmlFor="designation">Designation</label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-none focus:outline-none focus:text-gray-600" 
                            onChange={(e) => handleOnchange('designation', e.target.value)}
                            placeholder="Enter designation"
                            value={selectedUser.designation}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="mt-2 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4">Edit employee</button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to="/">Cancel</Link></div>
                </form>
            </div>
        </>
    )
}