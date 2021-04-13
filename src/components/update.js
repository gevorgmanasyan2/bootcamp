import React, {useState,useContext} from 'react';
import './public/update/style.css';
import axios from 'axios';
import LoginContext from './LoginContext';



const Update=(props)=>{
    const[isLogin,setIsLogin]=useContext(LoginContext);
    const[value,setValue]=useState({currentPassword:"",newPassword:"",confirmNewPassword:""});
    const[errors,setErrors]=useState({curPass:"",newPass:"",confirmNewPass:""});
    const OnChange=(e)=>{
        switch (e.target.name) {
            case "currentPassword":
                setValue({...value, currentPassword:e.target.value})
                break;
            case "newPassword":
                setValue({...value, newPassword:e.target.value})
                break;
            case "confirmNewPassword":
                setValue({...value, confirmNewPassword:e.target.value})
                break;        
            default:
                break;
        }
    }
    const SendData=()=>{        
       let err={};
        if (value.currentPassword==="") {
            err.curPass='Password is required';            
          } else if (value.currentPassword.length < 6) {
              err.curPass='Password must be 6 or more characters';                        
          }        
          if (value.newPassword==="") {
              err.newPass='Password is required';            
          } else if (value.newPassword.length < 6) {
              err.newPass='Password must be 6 or more characters';            
          }        
          if(value.confirmNewPassword===""){
              err.confirmNewPass='The field must be filled in';                 
          }
          else if(value.confirmNewPassword!==value.newPassword){
              err.confirmNewPass='password and confirm fields must be the same'           
          }        
        setErrors(err)
    }

    const SendDataToBackend=()=>{
        delete value.confirmNewPassword;        
        if(!Object.keys(errors).length){            
            axios.put(`https://devcamp-api-node.herokuapp.com/api/v1/auth/updatepassword`,value, 
    {
        headers:{'Content-Type': 'application/json',
        "Authorization" : `Bearer ${isLogin}`
    }})
            .then(res => {                
                props.history.push('./home'); 
                             
              }).catch(err => {
                console.log(err, "< ERR")               
              })    
        }        
    }

    return(
        <>
       
       <div className="update">
          <div className="updateForm">
             <h1 className="updateHeader">Update Password</h1>
             <div className="updateItem">
                 <label className="updateLabel">Current Password</label><br/>
                 <input className="updateInp" type="password" name="currentPassword" placeholder="Current Password"
                 onChange={OnChange} value={value.currentPassword || ''} required autoComplete="off" />
                 {errors.curPass && (<p className="is-danger">{errors.curPass}</p>)}
             </div>
             <div className="updateItem">
                 <label className="updateLabel">New Password</label><br/>
                 <input className="updateInp" type="password" name="newPassword" placeholder="New Password"
                 onChange={OnChange} value={value.newPassword || ''} required autoComplete="off" />
                 {errors.newPass && (<p className="is-danger">{errors.newPass}</p>)}
             </div>
             <div className="updateItem">
                 <label className="updateLabel">Confirm New Password</label><br/>
                 <input className="updateInp" type="password" name="confirmNewPassword" placeholder="Confirm New Password"
                 onChange={OnChange} value={value.confirmNewPassword || ''} required autoComplete="off" />
                 {errors.confirmNewPass && (<p className="is-danger">{errors.confirmNewPass}</p>)}
             </div>
             <div className="updateBtn">
                 <button className="updateBtnInp" type="button"
                 onClick={SendDataToBackend} onClickCapture={SendData}>Update Password</button>
             </div>
          </div>
       </div>

        </>
    )
}


export default Update;