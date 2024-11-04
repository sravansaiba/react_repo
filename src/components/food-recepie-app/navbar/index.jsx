import { useContext } from "react"
import { GlobalContext } from "../context"


export default function Navbar() {
    const {searchParam,setSearchParam,handleSubmit} =useContext(GlobalContext)

  return (
    <div>
     <nav className="flex py-8  gap-20 bg-purple-500 max-w-screen-2xl">
        <h2 className="text-left flex gap-7 pl-7">
            <a className="text-black hover:text-yellow-50 duration-300 no-underline font-mono text-3xl" href="/">FoodiesLove</a>
        </h2>
        
        <h2 className="flex gap-40">
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter any item..."
            value={searchParam}
            onChange={(e)=>setSearchParam(e.target.value)}
            className="bg-gray-100 p-3 ml-72 rounded-full outline-none lg:width  w-80 shadow-lg  shadow-white focus:shadow-white " />
        </form>
        <div className="flex gap-7 pl-36 pr-7 pt-2">
        <a className="text-black hover:text-yellow-50 font-mono duration-300 no-underline" href="/">Home</a>
        <a className="text-black hover:text-yellow-50 font-mono duration-300 no-underline " href="/favourites">Favourites</a>
        </div>
        </h2> 
        </nav>
    </div>
  )
}

