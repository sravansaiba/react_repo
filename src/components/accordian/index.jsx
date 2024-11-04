import { useState } from 'react'
import data from "./data.js"
import './designs.css'

export default function Accordian() {
    const [selected,setSelected]=useState(null)
     
    const HandleSingleClick =(getId)=>{
        setSelected(getId==selected?null:getId)
    }

    return <div className='wrapper' >
                <div className='accordian'>
                     {data.length ? data.map(dataItem=> <div key={dataItem.id} className='item'>
                     <div onClick={()=>HandleSingleClick(dataItem.id)} className='title'>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                     </div>
                    {
                        selected===dataItem.id ? <div className='content'>{dataItem.answer}</div>:null
                    }
                    </div>):<div>No data found!</div>}
                </div>
           </div>
}