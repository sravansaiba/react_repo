import { useState } from "react"

export default function Tabs({tabContent,onChange}) {
  const [cur,setCur]=useState(0);

  
  function handleOnClick(getCurrentIndex){
    setCur(getCurrentIndex)
    onChange(getCurrentIndex)
  }
  
  return (
    <div>
      <div className="heading">
        {tabContent.map((Tabitem,index)=>(
          <div className={`tab-item ${cur=== index ? "active" : ""}`}
           onClick={()=>handleOnClick(index)} key={Tabitem.label}>
            <span className="label">{Tabitem.label}</span>
          </div>
        )
        )}
      </div>
      <div className="content">
        {tabContent[cur] && tabContent[cur].content}
      </div>
      
    </div>
  )
}
