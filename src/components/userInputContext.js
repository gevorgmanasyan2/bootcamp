import React from 'react';

const initialstate={    
    name:"",    
    email:"",
    password:"",
    confirm:""
}
function reducer(state,{field,value}){
    return{
        ...state,
        [field]:value        
    }
    
}

const UserInputContext=React.createContext({initialstate:initialstate,reducer:reducer});

export default UserInputContext;