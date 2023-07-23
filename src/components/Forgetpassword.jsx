import { NavLink,useNavigate } from "react-router-dom"
import "./Login.css"
import { useState } from "react"
export default function Forgetpassword(Props) {
    const navigate=useNavigate()
    const[email ,setEmail]=useState("")
    const[password ,setPassword]=useState("")
    let emailArr=[]
    let passwordArr=[]
    function submitHandller(e){
        e.preventDefault()
        console.log(email,password)
        emailArr.push(email)
        passwordArr.push(password)
        localStorage.setItem("Email",JSON.stringify(emailArr))
        localStorage.setItem("Password",JSON.stringify(passwordArr))
        navigate("/login")   
        Props.alert("You Change Your Password Successfully","success")
    }
    
    return (
        <>
            <div className="container loginpage mt-4 ">
                <div className="row maindiv">
                    <div className="col  imgleftdiv">
                        <img className=" img img-fluid img-thumbnail imgLeft" src="Images\img_left.png" alt="error" />
                    </div>
                    <div className="col col-6">
                        <h1 className={`text-${Props.mode==="dark"?"light":"dark"}`}>customize The Text Value <br />Before You add Or Remove</h1>
                        <p id="paramain" className={`text-${Props.mode==="dark"?"light":"dark"}`}>Forgot Password</p>
                        <div className="form">
                            <form action="/">

                                <input className={`inp text-${Props.mode==="dark"?"light":"dark"} normal-${Props.mode==="dark"?"bold":"normal"}`} id="input1" onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" name="email" required /><br /><br />

                                <input className={`inp text-${Props.mode==="dark"?"light":"dark"} normal-${Props.mode==="dark"?"bold":"normal"} `} id="input2" onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder=" Set Password" name="password"
                                    required /><br/><br/><br/>
                                    {/* <p id="para" className="pp">
                                <NavLink to={"/forgotpassword"}> Forgot Password ?</NavLink>
                                </p> */}
                                    
                                <input id="submit" onClick={submitHandller} type="submit" value="Login" /><br /><br /><br/>

                                {/* <p id="para" className={`text-${Props.mode==="dark"?"light":"dark"}`}>
                                Don`t have an account?
                                <NavLink to={"/signup"}> Sign Up</NavLink>
                                </p> */}
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