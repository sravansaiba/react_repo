
import { useEffect } from 'react'
import { useState } from 'react'

export default function useWindowResize() {
    const [windowresize,setWindowResize]=useState({width:0,height:0})

    function handleResize(){
        setWindowResize(
            {width:window.innerWidth,
             height:window.innerHeight}
        )
    }
    
    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        return()=>{
            window.removeEventListener("resize",handleResize)
        }
    },[])


  return windowresize
}
