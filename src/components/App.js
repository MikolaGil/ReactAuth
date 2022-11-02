import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from "./SignUp";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  return (
    <AuthProvider>
      <Container 
        className="d-flex align-items-center justify-content-center"
        style={{minHeight: "100vh"}} 
      >
        <div className="w-100" style={{ maxWidth: "400px"}}>
          <Router>
            
              <Routes>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/login" component={Login}></Route>
              </Routes>
            
          </Router>
          <Signup/>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
