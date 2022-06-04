import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

export default function Header() {

  const [index, setIndex] = useState(0);

  const handleMove = (direction) =>{

    if(direction === "l"){
      setIndex(index !== 0 ? index-1 :2)
    }
    if(direction==="r"){
      setIndex(index !== 2 ? index+1 : 0)
    }
  }
  

  const images = ["https://upload.wikimedia.org/wikipedia/commons/6/67/D%C3%A9lices_de_Paris.jpg", 
"https://i.pinimg.com/originals/ba/23/d8/ba23d87cada18b071172ad2e45a03f53.jpg", "https://www.thechilworth.co.uk/blog/wp-content/uploads/2019/12/pastries.jpg"];
  return (
    <div className="header">
      <FontAwesomeIcon className="arrowIcon left" icon={faAngleLeft} onClick={() => handleMove("l")}/>
      {images.map((img, i)=> (
          <div className="headerWarpper" key={i} style={{transform:`translateX(${-100*index}vw)`}}>
            <img className="headerImg" src={img} alt="" />
          </div>
        ))}
      <FontAwesomeIcon className="arrowIcon right" icon={faAngleRight} onClick={() => handleMove("r")}/>
    </div>
  )
}
