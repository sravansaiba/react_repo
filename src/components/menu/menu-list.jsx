import MenuItems from "./menu-items";
import './style.css'


export default function MenuList({list=[]}) {
  return (
    <div className="menu-list-container">
    <ul>
        {
         list && list.length?
          list.map(ItemList=> <MenuItems item={ItemList}/>
         ):null
        }
    </ul></div>
  )
}
