import React from 'react';
import './public/intro/style.css';




const Intro=()=>{
    const OnChange=()=>{
        
    }
    return(
         <>      
         
         <div className="showCase1">
             <div className="find">
                 <div className="caption">
                 <h1 className="introTexth1">Find a Code Bootcamp</h1>
                 </div>  
                 <div>
                 <h3 className="introTexth3">Find, rate and read reviews on coding bootcamps</h3>             
                 </div>                 
             </div>
             <div>
                    <div>
                         <div className="forms">
                         <div className="inps">
                         <input className="miles" type="text" placeholder="Miles From" onChange={OnChange}></input>
                         </div>
                         <div className="inps">
                         <input className="zipcode" type="text" placeholder="Enter Zipcode" onChange={OnChange}></input>
                         </div>                        
                         </div> 
                         <div className="submit">
                         <input className="submit" tipe="submit" value="Find Bootcamps" onChange={OnChange}></input>
                         </div>                        
                     </div>
                     
                     </div> 
            
         </div>
         
         
         </>
    )
}
export default Intro;



