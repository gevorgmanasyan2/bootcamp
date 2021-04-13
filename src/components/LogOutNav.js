import React from 'react';
import Login from './login';
import Intro from './Intro';
import Update from './update';
import Register from './register';
import Reset from './reset';
import Home from './home';
import devcump from "./public/images/Vector.png";
import login1 from "./public/images/Arrow.png";
import login2 from "./public/images/Arrow2.png";
import reg from "./public/images/reg.png";
import line from "./public/images/_.png";
import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

const LogOutNav=()=>{
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
<div className="navLink">         
    <NavLink to="/login" className="nav"> <div className="login">
          <img className="loginImg1" src={login1} alt="logo" />
          <img className="loginImg2" src={login2} alt="logo" />
      </div>
       </NavLink>
       <NavLink to="/login" exact className="nav"><div>
          <h3>Login</h3>
       </div></NavLink>
    <NavLink to="/register" className="nav"><div>
          <img src={reg} alt="pic" />
        </div>
       </NavLink>
         <NavLink to="/register" exact className="nav">
         <div>
          <h3>Register</h3>
         </div>
         </NavLink> 
       <NavLink to="intro" exact className="nav">
        <div>
           <img src={line} alt="pic" />
        </div>
        </NavLink>             
          <NavLink to="/" exact className="nav">
          <div>
            <h3>Browse Bootcamps</h3>
          </div>
          </NavLink>
 </div>
 </div>  
  <Switch>
      <Route exact path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/reset" component={Reset}></Route>
      <Route path="/update" component={Update}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/" component={Intro}></Route>               
  </Switch>
</Router>


</>
   )
}


export default LogOutNav;