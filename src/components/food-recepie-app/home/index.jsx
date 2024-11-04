import { useContext } from "react"
import { GlobalContext } from "../context"
import RecipeItem from "../recipeItem"

export default function Home() {

  const {loading,recipeList}=useContext(GlobalContext)

  if(loading) return <div>loading....please wait!!</div>

  return (
    <div className="py-8 mx-auto flex flex-wrap justify-center gap-10">
         {recipeList && recipeList.length > 0 ? recipeList.map(( item )=> 
         // eslint-disable-next-line react/jsx-key
         <RecipeItem  item={item}/>):(
         <div >
          <p className="text-3xl text-center text-black font-mono pt-52 "> Nothing to display.Please look for something.</p>
         </div>)}
    </div>
  );
}

