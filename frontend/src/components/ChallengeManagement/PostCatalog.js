import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Ads.css";
import { Link } from "react-router-dom";

const PropertyCatalog = () => {
  
  const [ads, setAds] = useState(undefined);
  const [AdSearch , setadSearch] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/CM/all`)
      .then((res) => {
        setAds(res.data);
      });

    console.log(ads);
  }, []);
  
  


  return (
<div style={{backgroundColor: "#4E5180"}}>
<br/>

<div className="upper-images" style={{border:"2px solid #0C1559"}}>
        <img
          className="ecommerce-slide"
          src="https://th.bing.com/th/id/R.eddb8c9577d39de1b24dd2b180e653c1?rik=6l%2bWxWTSpnwhSw&pid=ImgRaw&r=0"
          alt=""
        />
        <div class="middle">
    <div class="text"><p style={{color:"4E5180"}}>Challenges..</p></div>
   <p className="para">Save Sea is a project aimed at addressing the problem of plastic waste in our oceans. 
   It is a web-based platform that provides a user-friendly interface for people to report plastic pollution sightings, which are then plotted on a map for everyone to see. 
   By raising awareness of plastic pollution and encouraging individuals to take action, 
   Save Sea hopes to reduce the amount of plastic waste in our oceans and protect marine life.</p>
     <button class="buttonserv"><span>Discover</span></button> 
  </div>
      </div>

<div className='col-md-8 mt-4 mx-auto' style={{marginBottom:"40px",backgroundColor: "#ffffff"}}>
  

<br/>
<div className="input-group" style={{ width: "18rem", border:"1px solid #0C1559" }}>
  <input type="search" onChange ={(e)=>{setadSearch(e.target.value); }} className="form-control rounded" placeholder="Type" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary" style={{color:"black"}}>search</button>
</div>
<br/>
<br/>
<hr></hr>
<br/>

<div className="products-list row p-5" style={{backgroundColor:"#D3D3D3"}}>
{ads && ads.filter(value=>{
            if(AdSearch ===""){
                return value;
            }else if(
                value.type.toLowerCase().includes(AdSearch.toLowerCase())
            ){
                return value
            }
        }).map((ad) => (
    <div className="card" style={{ width: "15rem", margin: ".5rem", height:"23rem" }}>
    <div className="card-bodies">
    <div className="product-image" style={{height:"15rem", marginTop:"10px"}}>
        <img src={ad.img} alt="product" width="238px"/>
      </div>
      
      <p className="card-title">{ad.topic}</p>
      <p className="card-type">{ad.description}</p>

      <Link className="card-link"to={`/CM/post/${ad._id}/${ad.topic}/${ad.description}/${encodeURIComponent(ad.img)}`}
      style={{ textDecoration: "none" }}>more..</Link>
    </div>
    <div className="card-body">
    </div>
  </div>
          ))}
      </div>
  </div>
  </div>
  );
}
export default PropertyCatalog;
