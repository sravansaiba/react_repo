import { useEffect } from "react";

export default function useOutsideClick(ref,handler) {
  useEffect(()=>{
    function listen(event){
        if(!ref.current || ref.current.contains(event.target)){
            return;
        }
        handler(event);
    }
    document.addEventListener("mousedown",listen)
    document.addEventListener("touchstart",listen)

    return ()=> {
        document.removeEventListener("mousedown",listen)
        document.removeEventListener("touchstart",listen)
    }
     

  },[handler,ref]);
}
