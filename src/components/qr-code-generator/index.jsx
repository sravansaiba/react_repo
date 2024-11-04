import { useEffect, useRef, useState } from 'react'
import QRCode from 'react-qr-code'

// export default function Qrgen() {

//     const [inp,setInp]=useState("")
//     const [qr,setQr]=useState("")
//     const foc = useRef()


//     function HandleClick(){
//      setQr(inp)
//      setInp('')
//     }

//     useEffect(()=>{
//         foc.current.focus()
//     },[])
    

//   return (

//     <div className='flex flex-col'>
//       <h1>QR GENERATOR</h1>
//       <input ref={foc} value={inp} type="text" onChange={(e)=>setInp(e.target.value)} name="qr-code" placeholder="type something" />
//       <button onClick={HandleClick}>generate</button>
//       <div>
//       <QRCode bgColor='white' value={qr}/></div>
//     </div>
//   )
// }


export default function Qrgen() {

    const [inp,setInp]=useState("")
    const qr=useRef("")
    const foc = useRef()


    function HandleClick(){
        qr.current=inp;
        setInp('')
        }


    useEffect(()=>{
        foc.current.focus()
    },[])
    

  return (

    <div className='flex flex-col'>
      <h1>QR GENERATOR</h1>
      <input ref={foc} value={inp} type="text" onChange={(e)=>setInp(e.target.value)} name="qr-code" placeholder="type something" />
      <button onClick={HandleClick}>generate</button>
      <div>
      <QRCode bgColor='white' value={qr.current}/></div>
    </div>
  )
}