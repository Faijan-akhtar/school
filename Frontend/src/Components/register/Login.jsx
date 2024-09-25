import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../register/Singup.css'
const Login = () => {
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()
   
  //  useEffect(()=>{
  //    const auth=localStorage.getItem('user')
  //    if(auth){
  //     navigate('/')
  //    }
  //  },[])



  const handleLog=async()=>{
    let result= await fetch("http://localhost:5000/login",{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{"Content-Type":"application/json"}
    })
     result=await result.json()
     console.log(result)
   if(result.name){
    localStorage.setItem('user',JSON.stringify(result))
    navigate('/')
   }else{
    alert("enter correct details")
   }
 }
  
   
   

   



  return (
    <>
     
      
     <div className="box">
      <h1>Register-Form</h1>
      <div  className='input-style'>
       <input type="text" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button  onClick={handleLog} className='btn-button'>Submit</button>
       </div>

      </div>
    </>
  )
}

export default Login
