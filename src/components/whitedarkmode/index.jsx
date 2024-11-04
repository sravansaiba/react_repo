// import { useState } from "react"

import { useState } from "react"
import useLocalStorage from "./useLocalStorage"


// export default function LDMode() {
//     const [theme,setTheme]=useState(false)
    


//   function changeTheme(){
//     setTheme(!theme)
//   }



//   return (
//     <div className={`h-lvh ${theme?'bg-black':"bg-white"}`}>
//       <h1 className={`${theme?'text-white':"text-dark"}`}>light dark theme</h1>
//       <button onClick={changeTheme}>change theme</button>
//     </div>
//   )
// }


export default function LDMode() {
    // const [theme,setTheme]=useLocalStorage("light",true)
    const [theme,setTheme]=useState("white")


    function changeTheme(){
        setTheme(theme==="white"?"black":"white")
    }
  return (
    <div style={{backgroundColor:theme}} className="h-lvh">
        <h1>light dark theme</h1>
        <button onClick={changeTheme}>change theme</button>
      
    </div>
  )
}

