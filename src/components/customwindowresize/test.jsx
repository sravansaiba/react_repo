import useWindowResize from "."

export default function WindowResizetest() {
  const {width,height} = useWindowResize()
  return (
    <div>
        <div className="wid"> Width : {width}</div>
        <div className="hei">Height : {height}</div>
     
    </div>
  )
}
