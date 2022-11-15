import React from "react"
import Signup from "./SignUp"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import '../styles/index.css'

import ForgotPassword from "./forgotPassword"
import UpdateProfile from "./UpdateProfile"
import PrivateRoute from "./PrivateRoute"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={
                <PrivateRoute>
                  <Dashboard/>
                </PrivateRoute>
              }/>
              <Route path="/update-profile" element={
                <PrivateRoute>
                  <UpdateProfile/>
                </PrivateRoute>
              }/>
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App