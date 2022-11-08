import React from 'react'
import { Routes, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute({component: Component, children}) {
    const { currentUser } = useAuth();

    return currentUser ? children : <Navigate to="/login"/>
}
