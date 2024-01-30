import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />

    </Routes>
    
    </BrowserRouter>
  )
}

export default App
