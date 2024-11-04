import { useState } from "react"
import Model from "./model"
import './style.css'

export default function ModelTest(){
    const[popup,setPopup]=useState(false)

    function handleToggle(){
        setPopup(!popup)
    }

    function onClose(){
        setPopup(false)
    }

    return <div>
        <button onClick={handleToggle}>open model pop-up</button>
        {
            popup && <Model onClose={onClose} body={<div>this is customized text</div>}/>
        }
    </div>
}