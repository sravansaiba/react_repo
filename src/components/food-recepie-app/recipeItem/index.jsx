/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'

export default function RecipeItem({item}) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-slate-200 shadow-xl gap-5 border-2 rounded-2xl"> 
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url}  alt="recipe item" className="block w-full"></img>
      </div>
      <div>
        <span className="text-sm text-purple-600 font-extrabold" >{item?.publisher}</span>
        <h3 className="font-bold text-2xl truncate text-black">{item?.title}</h3>
        <Link to={`/recipe-items/${item?.id}`} className=' flex text-sm p-3 mt-5 py-4 rounded-lg uppercase font-medium tracking-wider shadow-md bg-black  no-underline text-white justify-center hover:bg-orange-400 hover:text-black'>recipe details</Link>
      </div>
    </div>
  )
}
