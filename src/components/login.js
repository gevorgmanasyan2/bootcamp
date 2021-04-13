import React, {useContext, useReducer} from 'react';
import './public/login/style.css';
import login1 from "./public/images/arrowLog.png";
import login2 from "./public/images/arrowLog2.png";
import useForm from './useForm';
import UserInputContext from './userInputContext';
import validate from './loginFormValidationRules';
import LoginContext from './LoginContext';
import Home from './home';
import axios from 'axios';


const Login=(props)=>{    
    const[isLogin,setIsLogin]=useContext(LoginContext);    
      const rout="login";
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
     const HideLogin=()=>{
            props.history.push('./reset');
     }

     const SendDataToBackend=()=>{ 
        let objState={};        
         for (const i in state) {           
            if(state[i]!=="" && (Object.keys(errors).length===2||Object.keys(errors).length===0)){
                switch (i) {
                    case "email":
                        objState[i]=state[i]; 
                        break;
                    case "password":
                        objState[i]=state[i]; 
                        break;            
                    default:
                        break;
                }               
            }     
       }    
    axios.post(`https://devcamp-api-node.herokuapp.com/api/v1/auth/login`,objState, 
    {
        headers:{'Content-Type': 'application/json'
    }})
            .then(res => {                
                setIsLogin(res.data.token);
                localStorage.setItem("login",res.data.token);  
                props.history.push('./home');              
              }).catch(err => {
                console.log(err, "< ERR")               
              })    
     } 

    return(
        
        
        <> 
              {(isLogin==="")?(<div className="loginForm">
<div className="logForn">
<div className="loginHeader">
              <div className="loginLog">
                   <img className="logImg1" src={login1} alt="arrow"/>
                   <img className="logImg2" src={login2} alt="arrow"/>
               </div>
               <div>
                   <h1>Login</h1>
                </div>
</div>
<div className="formText">
    <h5>Log in to list your bootcamp or rate, review and favorite bootcamps</h5>
</div>
<div className="inpts">
    <label className="fLabel">Email Address</label><br/>
    <input className="inp" type="email" name="email" onChange={OnChange} 
     placeholder="Enter Email" autoComplete="off" value={values.email || ''} required />
     {errors.email && (<p className="is-danger">{errors.email}</p>)}                      
</div>
<div className="inpts">
    <label className="fLabel">Password</label><br/>
    <input className="inp" type="password" name="password" onChange={OnChange}  
     placeholder="Enter Password" autoComplete="off" value={values.password || ''}  required />
     {errors.password && (<p className="is-danger">{errors.password}</p>)}                      
</div>
<div className="inpButton">
    <button className="formBtn" type="submit" onClick={SendDataToBackend} onClickCapture={SendData}>Login</button>
</div>

<div className="formFooter">
    <div>
    <h5>Forgot Password?</h5> 
    </div>
    
    <div>
   <h5 style={{color:"#E05433",textDecoration:"none"}} onClick={HideLogin}>Reset Password</h5>
   </div>   
   
   </div>

</div>
</div>
):<Home/>
              
            }



        </>
    )
}

export default Login;