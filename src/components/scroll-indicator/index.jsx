import { useEffect, useState } from "react"


export default function ScrollIndicator({url}) {
    const [data,setData]=useState([])
    const [scrollPercent,setScrollPercent]=useState(0)


    function handleScrollPercentage(){
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        );

        const howmuchscrolled =document.body.scrollTop || document.documentElement.scrollTop;

        const Height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

        setScrollPercent((howmuchscrolled/Height)*100)
        }
   
   
    useEffect(()=>{
        window.addEventListener('scroll',handleScrollPercentage)

        return ()=>{
            window.removeEventListener('scroll',()=>{})
        }

    }
    )

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(dataa=> setData(dataa.products)
        );
    },[])

  return (
    <div className="text-center">
        <div className="fixed w-full bg-pink-500"> 
        <h1>Custom Scroll Indicator</h1>
        <div className="bg-black">
        <div className="h-4" style={{width:`${scrollPercent}%`,backgroundColor:"red"}}>
        </div>
        </div>
        </div>
        <div>
            {
                data && data.length ? data.map(item=> <p>{item.title}</p> ) : null
            }
        </div>
      
    </div>
  )
}
