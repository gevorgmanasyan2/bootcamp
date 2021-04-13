import React, {useState} from 'react';
import './App.css';
import './components/public/intro/style.css';
import LoginNav from './components/LoginNav';
import LogOutNav from './components/LogOutNav';
import LoginContext from './components/LoginContext';


function App() {
  const[isLogin,setIsLogin]=useState(localStorage.getItem("login")||"");

  
  
  return (  
    <LoginContext.Provider value={[isLogin,setIsLogin]}>
      
      {(isLogin==="")?<LogOutNav/>:<LoginNav/>}

    </LoginContext.Provider>
   
  );
}

export default App;
