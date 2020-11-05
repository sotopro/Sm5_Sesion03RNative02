import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useHistory, Link } from 'react-router-dom'

export const AddEmployee = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [designation, setDesignation] = useState('')
    const { addEmployee, employees } = useContext(GlobalContext)

    let history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            id: employees.length + 1,
            name,
            location,
            designation
        }
        addEmployee(newEmployee)
        history.push('/')
    }
    return (
        <>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 py-2" htmlFor="name">
                            Name of employee
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter name"
                        />
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 py-2" htmlFor="location">
                            Location
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Enter location"
                        />
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 py-2" htmlFor="designation">
                            Designation
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            type="text"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            placeholder="Enter designation"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Employee</button>
                    </div>
                    <div className="text-center mt-4 justify-between">
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        </>
    )
}