import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

import '../List/Student.css'
const StudentList = () => {
 const [list,setList]=useState([]);

 
 
console.log(list)
   






useEffect(()=>{
   
   getStudentDetails()
},[])

const getStudentDetails=async()=>{
    let result= await fetch("http://localhost:5000/student-list");
    result= await result.json()
    console.log(result)
    result=result.map((items)=>{
        const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear().toString().slice(-2); // Last 2 digits of the year
        return `${day}-${month}-${year}`;
    };
      return{ ...items,
        createdAtLocal: formatDate(items.createdAt),
            updatedAtLocal: formatDate(items.updatedAt)
    }
})
    
    setList(result)
}

const handleSearch=async(e)=>{

  let key=e.target.value;
  if(key){
    let result=await fetch(`http://localhost:5000/search/${key}`)
    result= await result.json()
    console.log(result)
    setList(result)
  }else{
    getStudentDetails()
  }
  
}
 

 




  return (


    <> 
    
    <div className="list">
      <h1>Student-Details-List</h1>
      <input className='student-search' type="text" placeholder='Enter student name'
      onChange={handleSearch}
      />
      <ul className='list-ul'>
            <li style={{color:'blue',width:"45px"}}>Sr.no</li>
            <li style={{color:'blue'}}>Name</li>
            <li style={{color:'blue',width:"150px"}}>Fathar-Name</li>
            <li style={{color:'blue'}}>Mobile-No</li>
            <li style={{color:'blue'}}>Fee</li>
            <li style={{color:'blue',width:"60px"}}>Class</li>
            <li style={{color:'blue'}}>Addmition</li>
            <li style={{color:'blue'}}>deposite</li>
            <li style={{color:'blue'}}>Oprations</li>
            
        </ul>
        {list.map((items,index)=>{
          
            return <>
            
             <ul key={items._id} className='list-ul'>
            <li style={{width:"45px"}}>{index+1}</li>
            <li>{items.name}</li>
            <li style={{width:"150px"}}>Mr.{items.fathar}</li>
            <li>{items.mobile}</li>
            <li>₹{items.fee}</li>
            <li style={{width:"60px"}}>{items.standerd}</li>
            
             <li  >{items.local} </li>
              <li>{items.update}</li>
            
            <li > 
                <Link to={`/studentupdate/${items._id}`}><button>Update</button></Link>
                
                
                </li>
            
            
        </ul>
            
            </>
        })}

        
            
        
       
       
      </div>
    </>
  )
}

export default StudentList
