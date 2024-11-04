import { useState } from "react"
import { createContext } from "react"


export const GlobalContext =createContext(null)

const Context = ({children}) => {
   const [cart,setCart]=useState([])
  return (
    <GlobalContext.Provider value={{cart,setCart}}>
         {children}
    </GlobalContext.Provider>
  )
}

export default Context
