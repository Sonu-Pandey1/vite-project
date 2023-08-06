import { NavLink } from "react-router-dom"
import "./Login.css"
import {useNavigate} from "react-router-dom"
// import { useState } from "react";
import { useFormik } from "formik";
import * as yup from 'yup'

export default function Signup(Props) {

    
const initialValues = {
  email: "",
  password: "",
  confirm_password: "",
};

const valite  = yup.object({
    email : yup.string().email().min(3).required('please enter '),
    password : yup.string().max(31).min(6).required('please enter '),
    confirm_password : yup.string().max(31).min(6).oneOf([yup.ref('password'),null],'password must match').required('please enter '),
    
})
   let arrEmail =[];
   let arrPassword =[];
   const { values,touched,errors ,handleBlur,handleChange,handleSubmit} =  useFormik({
        initialValues:initialValues,
        validationSchema:valite,
        onSubmit : (values,action)=>{
            var a = values
            arrEmail.push(a.email)
            arrPassword.push(a.confirm_password)
            localStorage.setItem("Email",JSON.stringify(arrEmail))
            localStorage.setItem("Confirm_Password",JSON.stringify(arrPassword))
            let lsi = localStorage.getItem("Confirm_Password")
            console.log(lsi)
            let lsiv = JSON.parse(lsi)
            console.log(lsiv)
            console.log(a)
            console.log(a.email)
            console.log(a.confirm_password)
            console.log(arrEmail)
            console.log(arrPassword)
            action.resetForm()
        } 
    })
    // console.log(Formik)

    // const navigate=useNavigate();
    // const [email,setEmail]=useState("")
    // const [password,setPassword]=useState("")
    // const [cpassword,setCpassword]=useState("")
    // let emailArr = [];
    // let passwordArr = [];
    // function signUpHandller(e){
    //     e.preventDefault()
    //     emailArr.push(email)
    //     passwordArr.push(cpassword)
    //     console.log(email.length,password.length,cpassword.length)
    //      localStorage.setItem("Email",JSON.stringify(emailArr))
    //      localStorage.setItem("Password",JSON.stringify(passwordArr))
    //      navigate("/login")
    //      Props.alert("Now You Can Login","success")
    // }

    //     function submitHandller(){
    //     // e.preventDefault()
    //     let lsi =  localStorage.getItem("Confirm_Password")
    //     console.log(lsi)
    //     if(lsi){
    //      navigate("/login")
    //     }
    //      Props.alert("Now You Can Login","success")

        
    //    }

    return (
        <>
            <div className="container loginpage mt-4 ">
                <div className="row maindiv">
                    <div className="col  imgleftdiv">
                        <img className=" img img-fluid img-thumbnail imgLeft" src="Images\img_left.png" alt="error" />
                    </div>
                    <div className="col col-6">
                        <h1 className={`text-${Props.mode === "dark" ? "light" : "dark"}`}> customize The Text Value <br />Before You add Or Remove</h1>
                        <p id="paramain" className={`text-${Props.mode === "dark" ? "light" : "dark"}`}>Sign Up</p>
                        <div className="form">
                            <form action="/" onSubmit={handleSubmit}>
                                <input 
                                // onChange={(e)=>{setEmail(e.target.value)}} 
                                className={` inp normal-${Props.mode === "dark" ? "bold" : "normal"} text-${Props.mode === "dark" ? "light" : "dark"}`} id="input1" type="email" placeholder="Email" name="email" value={values.email} /> <br /><br />
                                <p>
                                    {errors.email && touched.email ? <span>{errors.email}</span> : null}
                                </p>

                                <input 
                                // onChange={(e)=>{setPassword(e.target.value)}} 
                                className={` inp normal-${Props.mode === "dark" ? "bold" : "normal"} text-${Props.mode === "dark" ? "light" : "dark"}`} id="input2" type="password" placeholder=" Password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}
                                     /><br /><br />
                                     <p>
                                    {errors.password && touched.password ? <span>{errors.password}</span> : null}
                                </p>
                                <input 
                                // onChange={(e)=>{setCpassword(e.target.value)}} 
                                className={` inp normal-${Props.mode === "dark" ? "bold" : "normal"} text-${Props.mode === "dark" ? "light" : "dark"}`} id="input3" type="password" placeholder="Confirm Password" name="confirm_password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}
                                /><br /><br />
                                     <p>
                                    {errors.confirm_password && touched.confirm_password ? <span>{errors.confirm_password}</span> : null}
                                </p>
                                {/* <input id="submit2" onClick={<navigate to={"/login"}/>} type="submit" value="Login" /><br /><br /> */}
                                <button type="submit" id="submit2" >Sign Up</button>
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