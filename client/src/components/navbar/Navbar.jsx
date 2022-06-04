import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./navbar.css"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Navbar() {

    const dataLength = useSelector((state) => state.cart.products.length);
  return (
    <div className="navbar">
        <div className="navbarWrapper">
            <Link className="listStyle" to={"/"}>
                <span className="logo">
                    Ordering
                </span>
            </Link>
           
            <ul className="List">
                <Link className="listStyle" to={"/"}>
                    <li className="listItem">Home</li>
                </Link>
                <Link className="listStyle" to={"/menu"}>
                    <li className="listItem">Menu</li>
                </Link>
                <li className="listItem">About</li>
                <li className="listItem">Contact</li>
            </ul>
            <div className="icon">
                <Link className="listStyle" to={"/cart"}>
                <span className="smallTag">{dataLength}</span>
                <FontAwesomeIcon className="cartIcon" icon={faCartShopping}/>
                </Link>
                <div className="wrap"> 
                    <button className="btnlogin">LOGIN</button>
                </div>
            </div>
        </div>
    </div>
  )
}
