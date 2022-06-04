import FeaturedList from "../featuredist/FeaturedList"
import "./product.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons"
import { data } from "../../data"
import { useRef, useState } from "react"
export default function Product() {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);

  const handleMove = (direction) =>{
    let distance = listRef.current.getBoundingClientRect().x;
    console.log(distance)
    if(direction === "l" && slideNumber > 0){
      listRef.current.style.transform = `translateX(${485 + distance}px)`
      setSlideNumber(slideNumber - 1);
    }
    if(direction === "r" && slideNumber < 6){
      listRef.current.style.transform = `translateX(${-485 + distance}px)`
      setSlideNumber(slideNumber + 1);
    }
  }
  return (
    <div className="product">
        <span className="fProduct">Featured Products</span>
        <hr className="ee"></hr>
        <FontAwesomeIcon className="arrowIcons left" icon={faAngleLeft} onClick={() => handleMove("l")}/>
        <div className="wrapper" ref={listRef}>
          {data.map((data)=>(
              <FeaturedList key={data.id} data={data}/>      
            ))}
        </div>
            
        <FontAwesomeIcon className="arrowIcons right" icon={faAngleRight} onClick={() => handleMove("r")}/>
    </div>
  )
}
