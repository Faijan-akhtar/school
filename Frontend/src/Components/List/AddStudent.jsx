import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../List/StudentList.css'
const AddStudent = () => {

  const [name,setName]=useState('')
  const [fathar,setFathar]=useState('')
  const [standerd,setstanderd]=useState('')
  const [mobile,setMobile]=useState('')
  const [fee,setFee]=useState('')
  const[local,setLocal]=useState('')
  const[update,setUpdate]=useState('')
  const navigate=useNavigate()
 useEffect(()=>{
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);
  
  const formattedDate = `${day}/${month}/${year}`;
  setLocal(formattedDate)
  setUpdate(formattedDate)
 },[])
 
 
  
  const[error,setError]=useState(false)
  const handalAdd= async()=>{
    
   
  

  
  

    
    if(!name||!fathar||!standerd||!mobile||!fee){
      setError(true)
      return false
    }

   
    let result= await fetch("http://localhost:5000/add-details",{
      method:"post",
      body:JSON.stringify({name,fathar,standerd,mobile,fee,local,update}),
      headers:{"Content-Type":"application/json"}
    })
  
   
    
  result= await result.json()

  if(result){
   alert("successful add details")
   navigate('/Studentlist')
  
  }else{
    alert("somthig is wrong")
  }
   
  


  }

  return (
    <>
    <div className="student-container">
        <h1>Student-Details</h1>
        <div className="detail-input">
        <input type="text" placeholder='Enter the Name' value={name} onChange={(e)=>setName(e.target.value)} />
        {error && !name && <span>Enter valid name</span>} 
        <input type="text"placeholder='Enter Father Name'value={fathar} onChange={(e)=>setFathar(e.target.value)}  />
       {error && !fathar && <span>Enter valid Fathar name</span>} 
        <input type="text" placeholder='Enter Class' value={standerd} onChange={(e)=>setstanderd(e.target.value)} />
       {error && !standerd &&  <span>Enter valid class</span> }
        <input type="text" placeholder='Enter Mobile No'value={mobile} onChange={(e)=>setMobile(e.target.value)}  />
       {error && !mobile && <span>Enter valid mobile no.</span> } 
        <input type="text" placeholder='Enter Deposit Fee 'value={fee} onChange={(e)=>setFee(e.target.value)} />
        {error && !fee && <span>Enter deposite fee</span>  }
        <button onClick={handalAdd} className='details-btn'>ADD-DETAILS</button>
        </div>
      
    </div>
      
    </>
  )
}

export default AddStudent
