
import './App.css'
import Navbar from './Components/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './Components/register/Singup'
import Login from './Components/register/Login'
import Private from './Components/Private'
import AddStudent from './Components/List/AddStudent'
import StudentList from './Components/List/StudentList'
import Update from './Components/List/Update'
import Home from './Components/Home/Home'

function App() {


  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<Private/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/Studentlist' element={<StudentList/>} />
      <Route path='/studentupdate/:id' element={<Update/>} />
      <Route path='/logout' element={"logout"}/>
      <Route path='/Addstudent' element={<AddStudent/>}/>
      </Route>

      <Route path='/Singup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
