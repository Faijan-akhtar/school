import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"
import '../List/StudentList.css'
const Update = () => {
    const [name,setName]=useState('')
    const [fathar,setFathar]=useState('')
    const [standerd,setstanderd]=useState('')
    const [mobile,setMobile]=useState('')
    const [fee,setFee]=useState('')
    const [update,setUpdate]=useState('')
   
    const params=useParams()
    const navigates=useNavigate()
    
   useEffect(()=>{
   

      getstudentDetails()
   },[])
    const  getstudentDetails=async()=>{
      let result=await fetch(`http://localhost:5000/update/${params.id}`);
      result=await result.json()
      setName(result.name)
      setFathar(result.fathar)
      setstanderd(result.standerd)
      setMobile(result.mobile)
      setFee(result.fee)
      const date = new Date();
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = String(date.getFullYear()).slice(-2);
      
      const formattedDate = `${day}/${month}/${year}`;
        
      setUpdate(formattedDate)

    }
  

 

    const handalUpdate=async()=>{
       
       let result=await fetch(`http://localhost:5000/update/${params.id}`,{
        method:'put',
        body:JSON.stringify({name,fathar,standerd,mobile,fee,update}),
        headers:{"Content-Type":"application/json"} 
        // first time got error i am not write Type with Content
      
       });
       result=await result.json()
       navigates('/Studentlist')
 
    }







  return (
    <>
      <div className="student-container">
        <h1>Update-Student-Details</h1>
        <div className="detail-input">
        <input type="text" placeholder='Enter the Name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text"placeholder='Enter Father Name'value={fathar} onChange={(e)=>setFathar(e.target.value)}  />
        <input type="text" placeholder='Enter Class' value={standerd} onChange={(e)=>setstanderd(e.target.value)} />
        <input type="text" placeholder='Enter Mobile No'value={mobile} onChange={(e)=>setMobile(e.target.value)}  />
        <input type="text" placeholder='Enter Deposit Fee 'value={fee} onChange={(e)=>setFee(e.target.value)} />
        <button onClick={handalUpdate} className='details-btn'>Update-Details</button>
        </div>
      
    </div>
      
    </>
  )
}

export default Update
