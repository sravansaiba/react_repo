import { useContext } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../context"
import { useEffect } from "react"

export default function Details() { 
  const {id} = useParams()
  const {recipeDetailsData,setrecipeDetailsData,handleAddToFav,addfavList} = useContext(GlobalContext)

  useEffect(()=>{
    async function fetchData(){
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await res.json()
       
      if(data?.data){
        setrecipeDetailsData(data?.data)
      }
      }
      fetchData()
      
      
  },[]);

 
  
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img src={recipeDetailsData?.recipe?.image_url} alt="recipe img" className="w-full h-full object-cover block group-hover:scale-105 duration-300"/>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-purple-600 font-bold">{recipeDetailsData?.recipe?.publisher}</span>
        <h3 className="font-bold text-2xl truncate text-black">{recipeDetailsData?.recipe?.title}</h3>
        <div>
          <span className="text-2xl font-semibold text-black pb-3">Ingredients:</span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients.map((item)=>(
             <li key={item.id}>
              <span className="text-2xl font-semibold text-black ">{item.quantity} {item.unit}</span>
              <span className="text-2xl font-semibold text-black pl-3">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button onClick={()=>handleAddToFav(recipeDetailsData?.recipe)}
          className="p-3 px-8 rounded-lg text-sm uppercase font-serif tracking-wider mt-3 inline-block shadow-md shadow-purple-300  lg:shadow-purple-500 bg-black text-white hover:bg-orange-400 hover:text-black">{
            addfavList && addfavList.length > 0 && addfavList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            )!==-1 ? "Remove from Favourites": "Add to Favourites"
          }</button>
        </div>
      </div>
    
    </div>
  )
}
