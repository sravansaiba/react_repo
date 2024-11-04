import { useState,useEffect } from "react"
import { createContext } from "react"


export const GlobalContext=createContext()

export default function GlobalState({children}) {
    const [searchParam,setSearchParam]=useState("")
    const [recipeList,setrecipeList]=useState([])
    const [loading,setLoading]=useState(false)
    const [recipeDetailsData,setrecipeDetailsData] =useState(null)
    const [addfavList,setAddFavList]=useState( JSON.parse(localStorage.getItem("addfavList")) || [])

    async function handleSubmit(e){
        e.preventDefault();
      try {

        setLoading(true)
        
        const res= await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
        
        const data= await res.json()
       
        if(data?.data?.recipes){
        setrecipeList(data?.data?.recipes)
        setLoading(false)
       }
       
        
      } catch (error) {
        console.log(error);
        
      }
    }


    useEffect(() => {
      localStorage.setItem("addfavList", JSON.stringify(addfavList));
  }, [addfavList]);

    function handleAddToFav(getcurritem){

      // console.log(getcurritem)
      
      let cpyFavList=[...addfavList]

      const idx = cpyFavList.findIndex(item=> item.id === getcurritem.id)  //to check whether the item is present in favourite list 
     
      if(idx === -1){
        cpyFavList.push(getcurritem)
      }
      else{
        cpyFavList.splice(idx,1) // Fix splice to remove one item
      }
      setAddFavList(cpyFavList)

    }

    console.log(addfavList,'addfavList');
    

    

  return (<GlobalContext.Provider value={{
    searchParam,
    loading,
    recipeList,
    setSearchParam,
    handleSubmit,
    recipeDetailsData,
    setrecipeDetailsData,
    handleAddToFav,
    addfavList}}>
    {children}
  </GlobalContext.Provider>)
}