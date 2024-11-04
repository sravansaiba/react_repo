import { useRef } from "react";

export default function ScrollToSection() {
    const data =[
        {   
            id:1,
            label:'first card',
            style:{
                width:'100%',
                height:'600px',
                background:'yellow'
            }
        },

        {   
            id:2,
            label:'second card',
            style:{
                width:'100%',
                height:'600px',
                background:'pink'
            }
        },

        {    
            id:3,
            label:'third card',
            style:{
                width:'100%',
                height:'600px',
                background:'blue'
            }
        },

        {   
            id:4,
            label:'fourth card',
            style:{
                width:'100%',
                height:'600px',
                background:'orange'
            }
        },

        {   id:5,
            label:'fifth card',
            style:{
                width:'100%',
                height:'600px',
                background:'red'
            }
        }
    ];

    const ref =useRef()


    function handleClick(){
        let pos =ref.current.getBoundingClientRect().top;

        window.scrollTo({
            top:pos,
            behavior:'smooth'
        })
    }


  return (
    <div>
        <h1 className='text center'>Scroll to particular section</h1>
        <button onClick={handleClick}>Click to scroll</button>
        {
            data.map((item,idx)=>
            <div ref={idx===2?ref:null} style={item.style} key={item}>
                {item.label}
            </div>)
        }
      
    </div>
  )
}
