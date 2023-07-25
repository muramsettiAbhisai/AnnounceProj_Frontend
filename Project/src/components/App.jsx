import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Login from "./loginRegister/Login"
import Register from "./loginRegister/Register"
import Clubs from './Clubs'
import Navbar  from "./Navbar"
import ClubPage from "./clubPage/ClubPage"
window.onbeforeunload=(event)=>{
  event.preventDefault();
  return "";
}
function App() {
 
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Clubs" element={<Clubs/>}/>
        <Route path="/ClubPage/:id" element={<ClubPage/>}/>
      </Routes>
    </>
  )
}

export default App
