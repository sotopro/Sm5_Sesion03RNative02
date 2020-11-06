import React, { createContext, useReducer } from 'react'
import  AppReducer from './AppReducer'
const initialState = {
    employees: [
        {
            id: 1,
            name: 'Daniel Soto',
            location: 'Lima, Perú',
            designation: 'FullStack Dev'
        }
    ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const removeEmployee = (id) => {
        dispatch({
            type: 'REMOVE_EMPLOYEE',
            payload: id
        })        
    }
    const addEmployee = (employees) => {
        dispatch({
            type: 'ADD_EMPLOYEES',
            payload: employees
        })
    }

    const editEmployee = (employees) => {
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: employees
        })
    }
    return (
        <GlobalContext.Provider value={{
            employees: state.employees,
            removeEmployee,
            addEmployee,
            editEmployee
        }}>
            {children}
        </GlobalContext.Provider>
    )
}