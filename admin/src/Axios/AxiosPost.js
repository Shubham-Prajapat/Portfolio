import axios from 'axios'
import React, { useState } from 'react'

const AxiosPost = () => {
    const data={fname:" ",  lastname:" "}
    const[inputdata,setInputData]=useState(data)

    const handleChange=(e)=>{
       setInputData({...inputdata,[e.target.name]:e.target.value})
    }


    const handleSubmit=(e)=>{
       e.preventDefault()
       axios.post("https://jsonplaceholder.typicode.com/users",inputdata)
       .then((res)=>{
        console.log(res)
       })
    }

    const handleUpdate = (e)=>{
      e.preventDefault()
      axios.put("https://jsonplaceholder.typicode.com/users/1",inputdata)
      .then((res)=>{
       console.log(res)
      })
    }

    const handleDelete=(e)=>{
      e.preventDefault()
      axios.delete("https://jsonplaceholder.typicode.com/users/1")
      .then((res)=>{
       console.log(res)
      })
    }

  return (
    <div>
        <label>First Name</label>
        <input type='text' name='fname' value={inputdata.fname} onChange={handleChange}/><br/>
        <label>Last Name</label>
        <input type='text' name='lastname' value={inputdata.lastname} onChange={handleChange} /><br/>
        <button className='btn btn-primary' type='button' onClick={handleSubmit}>Submit</button>
        <button type='button' className='btn btn-primary' onClick={handleUpdate}>Update</button>
        <button className='btn btn-primary' type='button' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default AxiosPost