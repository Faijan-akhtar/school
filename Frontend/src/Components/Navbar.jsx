import React, { useEffect } from 'react'
import './navbar/Navbar.css'

import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate();
  const auth=localStorage.getItem("user")






const Logout=()=>{localStorage.clear();
  navigate('/Singup')
}

  return (
    <>
      <div className="nav">
    
    {auth ? 
        <ul className='nav-ul'>
      
      <li> <Link to={'/'}>Home</Link></li>
       <li><Link to={'/studentlist'}>Student-List</Link></li>  
       <li><Link to={'/addstudent'}>Add-Student-details</Link> </li> 
       <li ><Link  to={'/Singup'}   onClick={Logout}>Logout</Link></li>
       
      
        
     </ul>:
     <ul style={{marginLeft:"70%"}} className='nav-ul'>
     <li><Link to={'/singup'} >Singup</Link></li> 
     <li> <Link to={'/login'}>Login</Link>  </li>
     </ul> 
}
      </div>
    

    </>
  )
}

export default Navbar
