// import React from 'react'
import {useNavigate} from "react-router-dom"
export default function About() {
    const navigate=useNavigate()
  return (
    <div>
      <h1>About Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque iste quas dignissimos cumque quod sunt corrupti, unde et harum earum consequatur aspernatur! Magnam assumenda nulla earum veniam, vitae consequatur. Aspernatur.</p><br />
    <button onClick={()=>{navigate("/")}}  className=" btn btn-outline-primary mt-5"> Go to Home Page</button>
    </div>
  )
}
