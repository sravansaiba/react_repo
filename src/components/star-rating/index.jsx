import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './stars.css'


// eslint-disable-next-line react/prop-types
export default function StarRating({noOfstars=5}) {
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)


    const handleClick =(getId)=>{
       setRating(getId)
        
    }

    const handleMouseEnter =(getId) =>{
        setHover(getId)
        
    }

    const handleMouseLeave =() =>{
        setHover(rating)
        
    }


  return (
  <div>
     <div className="stars-rating ">
        {
            [...Array(noOfstars)].map((_,index)=>{
                index+=1
                return <FaStar
                key={index}
                className={`bsdk ${index <= (hover||rating) ? 'active':'inactive'}`}
            
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
                size={40}
                ></FaStar>
            })
        }
      
    
    </div>
      <div className="flex justify-center align-middle text-center items-center">
            <h1>Rating : {rating}</h1>
        </div>
    </div>)
 
  
}
