import {useEffect, useState} from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import'./styles.css'

// eslint-disable-next-line react/prop-types
export default function ImageSlider({url,page=1,limit=5}) {
    const [images,setImages]=useState([])
    const [errorMsg,setErrorMsg]= useState(null)
    const [loading,setLoading] =useState(false)
    const [currentSlide,setCurrentSlide] =useState(0)

    useEffect(()=>{
        if(url!=="") fetchImages(url)
    },[url])

 async function fetchImages(getUrl){
    try {

        setLoading(true)

        const response= await fetch(`${getUrl}?page=${page}&limit=${limit}`)
        const data =await response.json()

        if(data){
            setLoading(false)
            setImages(data)
        }
        
    } catch (e) {
       setErrorMsg(e.message); 
       setLoading(false);
    }
 }

   function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
    
    if(loading){
        return  <div>Loading..</div>
    }

    if (errorMsg!==null){
        return <div>Something went wrong!!,{errorMsg}</div>
    }


  return <div className="container">
          <BsArrowLeftCircleFill
         onClick={handlePrevious}
        className="arrow arrow-left" />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}

<BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>

  </div>;
}


