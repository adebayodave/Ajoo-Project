import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />


    </Routes>
    
    </BrowserRouter>
  )
}

export default App
