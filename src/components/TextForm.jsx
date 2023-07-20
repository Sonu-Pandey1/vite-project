// import React from "react";
import { useState } from "react";
import "../index.css";

export default function TextForm(Props) {
  console.log(Props)
  const [text, setText] = useState("");

  function onclickHandller1() {
    setText(text.toUpperCase());
    Props.alert("Converted to UpperCase","success")
  }
  function onclickHandller2() {
    setText(text.toLowerCase());
    Props.alert("Converted to LowerCase","success")
  }
  function onclickHandller3() {
    setText("");
    Props.alert("Clear TextArea","success")



  }
  function onclickHandller4() {
    let text =document.getElementById("exampleFormControlTextarea1")
     text.select();
    // text.select();
    navigator.clipboard.writeText(text.value)
    Props.alert("Copy to Clipbord","success")

  }

  return (
    <>
      <div className="container my-3">
        <h1 className={`  text-${
          Props.mode === "dark" ? "light" : "dark"} `}>{Props.heading}</h1>
        <div className="mb-3">
          <textarea style={{backgroundColor:Props.mode==="dark"?"#13466e":"white"}} className={`form-control  text-${
          Props.mode === "dark" ? "light" : "dark"} 
          `}
            onChange={(e) => {
              setText(e.target.value);
            }}
            // className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={onclickHandller1}>
          convert to upper case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={onclickHandller2}>
          convert to lower case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={onclickHandller3}>
          Clear textarea
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={onclickHandller4}>
          copy text
        </button>
        {/* <button className="btn btn-primary mx-2" onClick={onclickHandller3}> */}
          {/* Find the length of the text */}
        {/* </button> */}
      </div>

      <div className="container">
        <h2 className={`  text-${
          Props.mode === "dark" ? "light" : "dark"} `}>Your Text Summery</h2>
        <p className={`  text-${
          Props.mode === "dark" ? "light" : "dark"} `}>
          {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} Charecters
        </p>
        <p className={`  text-${
          Props.mode === "dark" ? "light" : "dark"} `}>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes to read</p>
        <h3 className={`  text-${
          Props.mode === "dark" ? "light" : "dark"} `}>Preview</h3>
        <p className={`  text-${
          Props.mode === "dark" ? "light" : "dark"} `}>{text.length<=0?"Nothing  to preview :- ":text}</p>
      </div>
    </>
  );
}
