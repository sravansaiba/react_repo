import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItems({item}) {
    const [displayCurrent,setDisplayCurrent]=useState({})

    function handletoggle(getCurrentId){
     setDisplayCurrent({...displayCurrent,[getCurrentId]:!displayCurrent[getCurrentId]})
    }
  return (
    
    <li>
        <div className="menu-item">
   <p>{item.label}</p>
   {
    item && item.children && item.children.length ?
    <span onClick={()=>{handletoggle(item.label)}}>
    {displayCurrent[item.label]?"-":"+"}
    </span>:null

   }
   {
        item && item.children && item.children.length > 0 && displayCurrent[item.label]? <MenuList list={item.children}/>:null  }
    </div>
    </li>
    
  )
}
