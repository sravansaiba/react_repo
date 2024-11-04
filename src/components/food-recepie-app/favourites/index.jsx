// import { useContext } from "react"
// import { GlobalContext } from "../context"
// import RecipeItem from "../recipeItem"

import { useContext } from "react"
import { GlobalContext } from "../context";
import RecipeItem from "../recipeItem"



// export default function Favourites() {

//   const {addfavList} = useContext(GlobalContext)

//   console.log(addfavList);
  


//   return (
//     <div className="py-8 mx-auto flex flex-wrap justify-center gap-10">
//          {addfavList && addfavList.length > 0 ? addfavList.map(( item )=> 
//          // eslint-disable-next-line react/jsx-key
//          <RecipeItem  item={item}/>):
//          <div className="text-3xl text-center text-black font-mono pt-52 ">Nothing is added in Favourites.Add any recipe in Favourites from Home</div>}
//     </div>
    
//   )
// }

export default function Favourites(){

 const {addfavList} = useContext(GlobalContext)
  
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {addfavList && addfavList.length ? (
        addfavList.map((item) => <RecipeItem key={item}item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
}