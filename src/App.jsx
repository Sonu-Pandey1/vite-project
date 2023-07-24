import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nabbar from './components/Nabbar'
import Home from './components/Home'
import Alert from './components/Alert'
import { Route, Routes, Navigate } from 'react-router-dom'
import About from './components/About'
import Login from './components/Login'
import Services from './components/Services'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Forgetpassword from './components/Forgetpassword'
import {useSelector,useDispatch} from "react-redux"
import {IncrementNumber,DecrementNumber} from "./redux/actions/Action"
import Protected from './components/Protected'


function App() {
  let myState = useSelector((state)=>state.changeTheNumber);
  let dispatch=useDispatch()
  const [mode, setMode] = useState("light")
  const [alert,setAlert] = useState(null)

  function showAlert(message,type){
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
     setAlert(null)
     
    },1500)
  }

  function switchToggle(){
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#042743"
      showAlert("dark mode has been enabled","success")
  

    }
    else{
      setMode("light")
      document.body.style.backgroundColor=""
      showAlert("dark mode has been desebled","success")


    }

 
  }

  return (
    <>
    <Nabbar Mode={mode} toggle={switchToggle}/>
    <Alert msg={alert}/>
    {/* <TextForm alert={showAlert} mode={mode} toggle={switchToggle} heading={"Enter the text to analyze below"}/> */}

    <Routes>
      {/* <Route path='/' element={<h1>home</h1>}/> */}
      <Route path='/home' element={<Protected Component={Home} alert={showAlert} mode={mode} toggle={switchToggle} heading={"Enter the text to analyze below"}/>}/>
      {/* <Route path='/home' element={<Home alert={showAlert} mode={mode} toggle={switchToggle} heading={"Enter the text to analyze below"}/>}/> */}
      <Route path='/about' element={<About  mode={mode}/>}/>
      <Route path='/login' element={<Login mode={mode} alert={showAlert}/>}/>
      <Route path='/signup' element={<Signup alert={showAlert} mode= {mode}/>}/>
      <Route path='/forgotpassword' element={<Forgetpassword mode={mode} alert={showAlert} />}/>
      <Route path='/' element={<Services mode={mode}/>}/>
      <Route path='/contact' element={<Contact mode={mode}/>}/>
      {/* <Route path='/services' element={<h1>Services page</h1>}/>
      <Route path='/contact' element={<h1>Contact -Us page</h1>}/> */}
      <Route path='/*' element={<Navigate to={"/home"}/>}/>
    </Routes>

 {/* remainng fetures is form validation and protectes routes  */}
{/* 
 <div className="counter ms-5 m-5 ps-5">
 <button onClick={()=>dispatch(DecrementNumber())}>-</button><input type="text" value={myState} /><button onClick={()=>dispatch(IncrementNumber())}>+</button>
 </div> */}


    </>
  )
}

export default App
