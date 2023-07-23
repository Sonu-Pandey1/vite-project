import { NavLink } from "react-router-dom"
import "./Login.css"
import {useNavigate} from "react-router-dom"
import { useState } from "react";
export default function Signup(Props) {
    const navigate=useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [cpassword,setCpassword]=useState("")
    let emailArr = [];
    let passwordArr = [];
    function signUpHandller(e){
        e.preventDefault()
        emailArr.push(email)
        passwordArr.push(cpassword)
        console.log(email.length,password.length,cpassword.length)
         localStorage.setItem("Email",JSON.stringify(emailArr))
         localStorage.setItem("Password",JSON.stringify(passwordArr))
         navigate("/login")
         Props.alert("Now You Can Login","success")
        
    
        

    }
    return (
        <>
            <div className="container loginpage mt-4 ">
                <div className="row maindiv">
                    <div className="col  imgleftdiv">
                        <img className=" img img-fluid img-thumbnail imgLeft" src="Images\img_left.png" alt="error" />
                    </div>
                    <div className="col col-6">
                        <h1 className={`text-${Props.mode === "dark" ? "light" : "dark"}`}>customize The Text Value <br />Before You add Or Remove</h1>
                        <p id="paramain" className={`text-${Props.mode === "dark" ? "light" : "dark"}`}>Sign Up</p>
                        <div className="form">
                            <form action="/">
                                <input onChange={(e)=>{setEmail(e.target.value)}} className={` inp normal-${Props.mode === "dark" ? "bold" : "normal"} text-${Props.mode === "dark" ? "light" : "dark"}`} id="input1" type="email" placeholder="Email" name="email" required /> <br /><br />

                                <input onChange={(e)=>{setPassword(e.target.value)}} className={` inp normal-${Props.mode === "dark" ? "bold" : "normal"} text-${Props.mode === "dark" ? "light" : "dark"}`} id="input2" type="password" placeholder=" Password" name="password"
                                    required /><br /><br />
                                <input onChange={(e)=>{setCpassword(e.target.value)}} className={` inp normal-${Props.mode === "dark" ? "bold" : "normal"} text-${Props.mode === "dark" ? "light" : "dark"}`} id="input3" type="password" placeholder="Confirm Password" name="password"
                                    required /><br /><br />
                                {/* <input id="submit2" onClick={<navigate to={"/login"}/>} type="submit" value="Login" /><br /><br /> */}
                                <button type="submit" id="submit2" onClick={signUpHandller}>Sign Up</button>
                                <br /><br />

                                <p id="para" className={`text-${Props.mode === "dark" ? "light" : "dark"}`}>
                                    Already have an account?
                                    <NavLink to={"/login"}> Sign In</NavLink>
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