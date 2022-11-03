import React from 'react'
import { Routes, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute({component: Component, ...rest}) {
    const { currentUser } = useAuth();
    
    return (
        <Routes
            {...rest}

            render={props =>{
                return currentUser ? <Component {...props} /> : <Navigate to="/login"/>
            }}
        />
    )
}
