import React, {useState} from 'react';
import './public/reset/style.css';
import axios from 'axios';


const Reset=(props)=>{
    const[value,setValue]=useState({email:""});
    const[error,setError]=useState("");

    const OnChange=(e)=>{
       setValue({email:e.target.value})
    }
    const BackToLogin=()=>{
        props.history.push('./login');
    }
    const SendData=()=>{
        if (!value.email) {
            setError('Email address is required');
          } else if (!/\S+@\S+\.\S+/.test(value.email)) {
            setError('Email address is invalid');
          }else{
              setError("")
          }
    }
    const SendDataToBackend=()=>{
        if(!error){            
            axios.post(`https://devcamp-api-node.herokuapp.com/api/v1/auth/forgotpassword`,value, 
    {
        headers:{'Content-Type': 'application/json'
    }})
            .then(res => {               
                              
              }).catch(err => {
                console.log(err, "< ERR")               
              })    
        }         
    }
    return(
        <>
       
        <div className="reset">
            <div className="resetForm">
              <h4 style={{color:"#E05433",margin:"0",cursor:"pointer"}} onClick={BackToLogin}>Back to login</h4>
              <h1>Reset Password</h1>
              <h4>Use this form to reset your password using the registered email address.</h4>
              <div>
                  <label className="resetLabel">Enter Email</label><br/>
                  <input className="resetInp" type="email" name="email" placeholder="Enter address"
                    onChange={OnChange} required autoComplete="off" />
                    {error && (<p className="is-danger">{error}</p>)}
              </div>
              <button className="resetButton" type="button" onClick={SendDataToBackend} onClickCapture={SendData}></button>
            </div>
        </div>

        </>
    )
}

export default Reset;