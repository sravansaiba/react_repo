import { useRef } from "react"
import { useState } from "react"
import useOutsideClick from "."


export default function ClicktoShow() {
    const [show,setShow]=useState(false)
    const ref = useRef()
    useOutsideClick(ref,()=>setShow(false))
  return (
    <div>
      {show?<div ref={ref}><p>Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument.</p></div>
      :<button onClick={()=>setShow(true)}> show data</button>}
    </div>
  )
}
