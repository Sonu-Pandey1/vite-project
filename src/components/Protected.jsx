import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Protected(Props){
    // const {component}=Props
    const navigate = useNavigate()

    useEffect(()=>{
      let Login = localStorage.getItem("Email");
      if(!Login){
        navigate("/login")
      }
    })

    // let Login = localStorage.getItem("Email");
    // if(Login){
    //     console.log(Login)
    // }

    return(
        <>
        
          <Props.Component alert={Props.alert} mode={Props.mode} toggle={Props.switchToggle} heading={"Enter the text to analyze below"} />

        </>
    )
}
