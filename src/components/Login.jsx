import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { useState } from "react"
export default function Login(Props) {
    const navigate = useNavigate()
    const[email ,setEmail]=useState("")
    const[password ,setPassword]=useState("")
    

    function submitHandller(e){
        e.preventDefault()
        console.log(email,password)
        let a = localStorage.getItem("Email")
        let b = localStorage.getItem("Password")
        console.log(a,b)
        let c = JSON.parse(a)
        let d = JSON.parse(b)
        console.log(c[0],d[0])
        if(email == c[0] && password === d[0] ){
            navigate("/home")
            console.log("ok")
            Props.alert("You are Login Successfully" ,"success")
        }
        else{
            // alert("Wrong User`Id Or Password")
            Props.alert("Wrong User I`d & Password ","danger")
            // setEmail("")
            // setPassword("")
            // email.focus()
        }
        
        
        
    }
    
    return (
        <>
            <div className="container loginpage mt-4 ">
                <div className="row maindiv">
                    <div className="col  imgleftdiv">
                        <img className=" img img-fluid img-thumbnail imgLeft" src="Images\img_left.png" alt="error" />
                    </div>
                    <div className="col col-6">
                        <h1 className={` text-${Props.mode==="dark"?"light":"dark"}`}>customize The Text Value <br />Before You add Or Remove</h1>
                        <p id="paramain" className={`text-${Props.mode==="dark"?"light":"dark"}`}>Sign in</p>
                        <div className="form">
                            <form action="/">

                                <input className={`inp2 text-${Props.mode==="dark"?"light":"dark"} normal-${Props.mode==="dark"?"bold":"normal"}`} id="input1" onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" name="email" required /><br /><br />

                                <input className={`inp2 text-${Props.mode==="dark"?"light":"dark"} normal-${Props.mode==="dark"?"bold":"normal"} `} id="input2" onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder=" Password" name="password"
                                    required /><br/>
                                    <p id="para" className="pp">
                                <NavLink to={"/forgotpassword"}> Forgot Password ?</NavLink>
                                </p>
                                    
                                <input id="submit" onClick={submitHandller} type="submit" value="Login" /><br /><br /><br/>

                                <p id="para" className={`text-${Props.mode==="dark"?"light":"dark"}`}>
                                Don`t have an account?
                                <NavLink to={"/signup"}> Sign Up</NavLink>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="col imgrightdiv">
                        <img className="img img-fluid img-thumbnail  imgLeft" src="Images\img_right.png" alt="error" />
                    </div>
                </div>
            </div>
        </>
    )
}