import React, {useContext} from 'react';
import Login from './login';
import Intro from './Intro';
import Update from './update';
import Register from './register';
import Home from './home';
import './public/intro/style.css';
import devcump from "./public/images/Vector.png";
import line from "./public/images/_.png";
import headImg from './public/images/headImg.png';
import poligon from './public/images/poligon.png';
import bodyImg from './public/images/body.png';
import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import LoginContext from './LoginContext';
import axios from 'axios';


const LoginNav=()=>{

  const[isLogin,setIsLogin]=useContext(LoginContext);
  
  const OnDropDown=()=>{      
     let content=document.getElementById("dropdown-content"); 
     if ( window.getComputedStyle(content, null).getPropertyValue("display") === 'none') {
      content.style.display = 'block';
  } else {
      content.style.display = 'none';
  }    
    
  }
  const OnLogOut=()=>{    
    axios.get(`https://devcamp-api-node.herokuapp.com/api/v1/auth/logout`,
    {
        headers:{"Authorization" : `Bearer ${isLogin}`

    }})
            .then(res => {                
                localStorage.removeItem("login");
                             
              }).catch(err => {
                console.log(err, "< ERR")               
              })    
    setIsLogin("");
  }
  const UpdatePassword=()=>{

  }
  
  
    return(
      <>
      <Router>
<div className="rect">
          <div className="dev">
             <div className="devIcon">                
             <img src={devcump} alt="icon" />             
             </div>
             <div><h4>DevCamper</h4>
             </div>
           </div>
      <div  className="navLink">   
         <div className="dropdownWraper" onClick={OnDropDown} >
         <div className="nav">
            <div className="accountIcon dropdown">
              <img className="headIcon" src={headImg} alt="logo" />
              <img className="bodyIcon" src={bodyImg} alt="logo" />
            </div>
         </div>
         <div className="nav">
            <div className="dropdown">
              <h3 className="account">Account</h3>
            </div>
         </div>
         <div className="nav pol dropdown">
             <div>
               <img className="poligon" src={poligon} alt="pic" />
             </div>
          </div>          
           <div id="dropdown-content" className="non" >            
           <NavLink to="intro" exact className="nav">
            <div className="logout">
              <h4 onClick={OnLogOut}>Logout</h4>
            </div>
            </NavLink>          
            <NavLink to="update" exact className="nav">
            <div className="updatePass">
              <h4 onClick={UpdatePassword}>Update Password</h4>
            </div>
            </NavLink>
           </div>
        </div>      
        
           <NavLink to="intro" exact className="nav">
            <div>
              <img src={line} alt="line" />
            </div>
            </NavLink>          
            <NavLink to="intro" exact className="nav">
            <div>
              <h3>Browse Bootcamps</h3>
            </div>
            </NavLink>
   </div>
   </div>  
    <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/update" component={Update}></Route>
        <Route path="/intro" component={Intro}></Route>
        <Route path="/" component={Home}></Route>
                       
    </Switch>
</Router>


</>
            
             
    
    )
    
}

export default LoginNav;