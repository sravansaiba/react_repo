// import { useEffect, useState } from 'react'
// import './styles.css'

// export default function LoadMoreData() {
   
//   const [loading,setLoading]=useState(false)
//   const [products,setProducts]=useState([])
//   const [count,setCount]=useState(0)
//   const [disablebutton,setDisableButton]=useState(false)

//   async function fetchProducts() {
//     try {

//       setLoading(true)
     
//       const response= await fetch(`https://dummyjson.com/products?limit=20&skip=${
//         count===0? 0 : count*20}`);
//       const result= await response.json()
       
//       if(result && result.products && result.products.length){
//         setProducts((prev)=>[...prev,...result.products])


//         setLoading(false)
//       }
//     }


//     catch (e) {
//       console.log(e);
//       setLoading(false)
      
//     }
    
//   }

//   useEffect(()=>{
//     fetchProducts();
//   },[count])

//   useEffect(()=>{
//     if( products && products.length ===100) setDisableButton(true);
//     },[products])


// if(loading){
//     return <div>loading......</div>
//   }



//   return (
//     <div className='container'>
//       <div className='product-container'>
//       {
//       products&&products.length? products.map((item)=>(
//         <div className='product' key={item.id}>
//              <img alt={item.title} src={item.thumbnail}></img>
//              <p>{item.title}</p>
//         </div>)):null
//       }
//       </div>
//       <span className='butt'>
//         <button disabled ={disablebutton}onClick={()=>setCount(count+1)}>Load More items</button>
//         </span>
//         {disablebutton?<div>You have reached to the end of the product list!!</div>:null}
//     </div>
//   )
// }

import  { useEffect, useState } from "react";

const LoadProds = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        count === 0 ? 0 : count * 10
      }`
    )
      .then((res) => res.json())
      .then((data) =>
        setProducts((prevData) => [...prevData, ...data.products])
      );
  }, [count]);

  return (
    <>
      <h1 className="text-center">PRODUCTS</h1>
      <div className="grid grid-cols-6 justify-center gap-4">
        <br />
        {products.map((p) => (
          <div key={p.id} className="border  w-48 bg-zinc-500 p-2">
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-32 h-32"
            />
            <p>{p.title}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center p-4">
        
        <button
          disabled={products.length === 40 ? true : false}
          onClick={() => setCount(count + 1)}
          className=""
        >
          load more
        </button>
      </div>
    </>
  );
};

export default LoadProds;