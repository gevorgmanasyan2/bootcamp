import React, {useContext, useReducer} from 'react';
import regIcon from './public/images/regIcon.png';
import './public/register/style.css';
import useForm from './useForm';
import UserInputContext from './userInputContext';
import validate from './loginFormValidationRules';
import axios from 'axios';



const Register=(props)=>{
   const rout="register";   
   const {values,errors,handleChange,handleSubmit} = useForm(login, validate, rout);    
      function login() {
        console.log('No errors, submit callback called!');        
      } 
     
    const InputStateReducer=useContext(UserInputContext);        
    const [state,dispatch]=useReducer(InputStateReducer.reducer,InputStateReducer.initialstate);

    const OnChange=(e)=>{        
        dispatch({field:e.target.name,value:e.target.value});
        handleChange(e)             
    }    
    
 const SendData=(event)=>{  
    handleSubmit()                         
   }

   const SendDataToBackend=()=>{
      let objState={};            
      for (const i in state) {           
         if(state[i]!=="" && Object.keys(errors).length===0){
              switch (i) {
                 case "name":
                    objState[i]=state[i];
                    break;
                 case "email":
                    objState[i]=state[i];
                    break;
                 case "password":
                    objState[i]=state[i];
                    break;
                 case "role":
                    objState[i]=state[i];
                    break;  
                 default:
                    break;
              }       
         }     
    }      
    console.log(objState);
   axios.post(`https://devcamp-api-node.herokuapp.com/api/v1/auth/register`,objState, {
        headers:{
           'Content-Type': 'application/json',
           
    }})
            .then(res => {               
                localStorage.setItem('userToken',res.data.token);                 
                props.history.push('./login');               
              }).catch(err => {
                console.log(err, "< ERR")               
              })   
  }
    return(
        <>
        
<div className="register">
  <div className="registerForm">
     <div className="registerHeader">
       <div>
         <img src={regIcon} alt="icon" />
       </div>
       <div className="regHead">
           <h1>Register</h1>
       </div>
     </div>
     <div className="regText">
         <h4>Register to list your bootcamp or rate, review and favorite bootcamps</h4>
     </div>
     <div className="regInputs">
        <label>Name</label><br/>
        <input type="text" name="name" placeholder="Enter Full Name" onChange={OnChange}  value={values.name || ''} required autoComplete="off" />
        {errors.name && (<p className="is-danger">{errors.name}</p>)}
     </div>
     <div className="regInputs">
     <label>Email Address</label><br/>
        <input type="email" name="email" placeholder="Enter Email" onChange={OnChange} value={values.email || ''} required autoComplete="off" />
        {errors.email && (<p className="is-danger">{errors.email}</p>)}
     </div>
     <div className="regInputs">
     <label>Password</label><br/>
        <input type="password" name="password" placeholder="Enter Password" onChange={OnChange} value={values.password || ''} required autoComplete="off" />
        {errors.password && (<p className="is-danger">{errors.password}</p>)}
     </div>
     <div className="regInputs">
     <label>Confirm Password</label><br/>
        <input type="password" name="confirm" placeholder="Confirm Password" onChange={OnChange} value={values.confirm || ''} required autoComplete="off" />
        {errors.confirm && (<p className="is-danger">{errors.confirm}</p>)}
     </div>
     <div className="regRadio">
        <label>User Role</label><br/>
        <input type="radio" name="role" value="user"  onChange={OnChange}/>
        <p>Regular User (Browse, Write reviews, etc)</p>
        <br/>
        <input type="radio" name="role" value="publisher"  onChange={OnChange}/>
        <p>Bootcamp Publisher</p>
     </div>     
         <div className="validationError">
             <p>* You must be affiliated with the bootcamp in
                  some way in order to add it to DevCamper.</p>
         </div>   
     <div>
       <button className="regButton" type="button" onClick={SendDataToBackend} onClickCapture={SendData}>Register</button>
     </div>
  </div>
</div>

        </>
    )
}

export default Register;