import { useState } from "react";

export default function RandomColor() {
    const [type,setType]   = useState("hex");
    const [color,setColor] = useState("pink");


    const randcol=(length)=>(Math.floor(Math.random()*length))
    
    
    const handleHexColor =()=>{

        const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexcol="#";

        for(let i=0;i<6;i++){
            hexcol += hex[randcol(hex.length)];
        }
        console.log(hexcol)
        setColor(hexcol)

    }

    const handleRgbColor=()=>{
        const r = randcol(256)
        const g = randcol(256)
        const b = randcol(256)

        setColor(`rgb(${r},${g},${b})`)
        
    }

  return (
    <div  style={{backgroundColor:color}}>
      <div
      style={{display:"flex",justifyContent:"center",flexDirection:"column",maxWidth:"1020px",marginLeft:"35%"}}><h1>{type==="rgb"? "rgb":"hex"}</h1>
      <button style={{border:"1px solid black",backgroundColor:type==="hex"? "grey":"", maxWidth:"250px"}} onClick={()=> setType("hex")}>HEX COLOR</button>
      <button style={{border:"1px solid black",backgroundColor:type==="rgb"? "grey":"",maxWidth:"250px"}} onClick={()=> setType("rgb")}>RGB COLOR</button>
      <button style={{border:"1px solid black",maxWidth:"250px"}} onClick={type==='hex'? ()=> handleHexColor():()=>handleRgbColor()}>GENERATE RANDOM COLOR</button>
      <h1>{color}</h1>
     </div> 
     
    </div>
  )
}
