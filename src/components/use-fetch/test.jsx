import { useState } from "react";
import useFetch from "./index.jsx"



export default function CustomFetch () {

    const {data,pending,error}=useFetch("https://dummyjson.com/products?limit=10&skip=10",{});
  const [display,setDisplay]=useState(false)

    // console.log(error,data,pending);
    

    function handleFetch(){
        setDisplay(!display)
    }

  return (
    <div>
      <h1>Fetch data with the custom hook</h1>
      <button onClick={handleFetch}>fetch data</button>
       {
        pending ? <h3>pending ...please wait</h3> :null
       }

       { display &&
        data && data.products && data.products.length ? data.products.map(item=>(
            <p key={item.id}>{item.title}</p>
        )):<div> {error?<h1>something went wrong try again</h1>:null}</div>
       }

    </div>

  )
}
