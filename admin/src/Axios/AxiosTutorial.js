import React, { useEffect, useState } from 'react'
import axios from 'axios'
const AxiosTutorial = () => {
    const[userData,setuserData]=useState([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res)=>{
        console.log(res)
        setuserData(res.data)
      })
    })
  return (
    <div>
     {
        userData.map((data)=>{
            return(
                <div>{data.name}
                   {data.id}
                   {data.username}
                </div>
            )
        })}
    </div>
  )
}

export default AxiosTutorial