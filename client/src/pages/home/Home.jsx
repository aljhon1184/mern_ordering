import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Product from "../../components/product/Product"
import "./home.css"

export default function Home() {
  return (
    <div className="home">
        <Navbar/>
        <Header/>
        <Product/>
    </div>
  )
}
