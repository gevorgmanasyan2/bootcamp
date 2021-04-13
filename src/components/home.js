import React,  {useState} from 'react';
import './public/home/style.css';
import image1 from './public/images/image_1.png';
import axios from 'axios';

const Home=()=>{

    const[data,setData]=useState();   
   
    axios.get(`https://devcamp-api-node.herokuapp.com/api/v1/bootcamps`)
            .then(res => {               
                if(data===undefined){
                    setData(res.data.data);
                }           
                
              }).catch(err => {
                console.log(err, "< ERR")               
              })              
    return(
        <>

<div className="grid">
  <div className="sideGrid">
    <form className="byLocation">
<h1>By Location </h1>
<div className="inputs">
   <input className="homeInp" type="text" name="mile" placeholder="Miles From" />
   <input className="homeInp" type="text" name="mile" placeholder="Enter Zipcode" />
</div>
<input className="byLocButton" type="button" value="Find Bootcamps" />
    </form>
    <form className="filterForm">
        <h1>Filter</h1>        
        <div>
            <label>Rating</label><br/>
            <input className="filterInput" type="number" name="rate" placeholder="Any" />
        </div>
        <div>
            <label>Budget</label><br/>
            <input className="filterInput" type="number" name="budget" placeholder="Any" />
        </div>
      <input className="byLocButton" type="button" value="Find Bootcamps" />
    </form>
  </div>
  
    <div className="mainGrid">

    {(data) && data.map((i,k)=>
<div key={k} className="items">
    <div>
        <img src={image1} alt="pic" />
    </div>
    <div className="description">
        <div className="itemHeader">
            <h1>{i.name}</h1>
            <p className="count">0</p>
        </div>
        <p className="city">{i.address}</p>
        <h2 className="skil">{i.careers}&nbsp</h2>
    </div>
</div>
  )}

<div className="items">
    <div className="pagin">
    <a className='next' href="#">Previous</a>
    <a className='next' href="#">1</a>
    <a className="next" href="#">2</a>
    <a className='next' href="#">3</a>
    <a className='next' href="#">4</a>
    <a className='next' href="#">Next</a>
    </div>

</div>

</div>


</div>

        </>
    )
}

export default Home;