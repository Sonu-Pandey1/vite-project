import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nabbar from './components/Nabbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import { Route, Routes, Navigate } from 'react-router-dom'
import About from './components/About'

function App() {
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
      <Route path='/' element={<TextForm alert={showAlert} mode={mode} toggle={switchToggle} heading={"Enter the text to analyze below"}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<h1>Services page</h1>}/>
      <Route path='/contact' element={<h1>Contact -Us page</h1>}/>
      <Route path='/*' element={<Navigate to={"/"}/>}/>
    </Routes>











      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel='noreferrer'>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel='noreferrer' >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Sonu </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
