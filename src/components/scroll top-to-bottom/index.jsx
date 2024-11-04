import { useRef } from "react"
import useFetch from "../use-fetch"

export default function ScrollUpsideDown() {
   
    const {data,error,pending} = useFetch("https://dummyjson.com/products?limit=100&skip=10",
        {}
    )

    const bottomRef=useRef(null);

    if(pending){
        return <div>loading ! Please wait...</div>
    }

    if(error){
        return <div>Error Ocurred ,Please Try Again !!</div>
    }

    function MoveTop(){
        window.scrollTo({
            top:0,left:0,behavior:"smooth"
        })}

    function MoveBottom(){
    bottomRef.current.scrollIntoView({behaviour:"smooth"})     
    }



  return (
    <div>
        <h1>scroll top to bottom and vice versa</h1>
        <div className="text-center pb-5">
        <button onClick={MoveBottom}> to bottom</button>
        </div>
        <div className="text-center">
        {data && data.products && data.products.length ?
        data.products.map((item)=> <div key={item.id}>{item.title}</div>):null}
        </div>
        <div className="text-center pt-5">
        <button onClick={MoveTop}>scroll to up</button>
        </div> 
        <div ref={bottomRef}></div>
    </div>
  )
}
