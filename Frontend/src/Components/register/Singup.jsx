import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../register/Singup.css'
const Signup = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()


  useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth){
      navigate('/')
    }
  })




const handleSubmit= async()=>{
 
  let result= await fetch("http://localhost:5000/singup",{
    method:"post",
    body:JSON.stringify({name,email,password}),
    headers:{"Content-Type":"application/json"}
  });
  result= await result.json()
  if(result){
    localStorage.setItem('user',JSON.stringify(result))
    
  }
  
  
 
  

 
}








  




  return (
    <>
    
      
       

       

      <div className="box">
      <h1>Register-Form</h1>
      <div  className='input-style'>
       <input type="text" placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='Enter Password'  value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button  onClick={handleSubmit} className='btn-button'>Submit</button>
       </div>

      </div>
    </>
  )
}

export default Signup
