import React from 'react'
import { Link } from 'react-router-dom'

export const Heading = () => {
    return (
        <div>
            <div className="flex items-center mt-24 mb-10">
                <div className="flex-grow text-left px-4 py-2 m-2">
                    <h5 className="text-gray-900 font-bold text-xl">Employee Listing</h5>
                </div>
            </div>
            <div className="flex-grow text-right px-4 py-2 m-2">
                <Link to="/add">
                    <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                        <span className="pl-2">Add Employee</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}