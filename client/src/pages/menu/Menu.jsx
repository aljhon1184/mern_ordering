import "./menu.css"
import Navbar from "../../components/navbar/Navbar"
import ProductList from "../../components/productlist/ProductList"
import { data } from "../../data"
import { useEffect, useState } from "react";

export default function Menu() {

  const [sort, setSort] = useState("newest");
  const [product, setProduct] = useState([]);

  const setP = () =>{
    setProduct(data);
  }

  useEffect(() =>{
    setP();
    if(sort === "desc"){
      setProduct((prev) =>
      [...prev].sort((a, b) => b.Price - a.Price)
    );
    }else if (sort === "asc"){
      setProduct((prev) =>
      [...prev].sort((a, b) => a.Price - b.Price)
    );
    }
  },[sort]);

  console.log(sort)
  return (
    <div className="menu">
        <Navbar/>
        <div className="MenuContainer">
          <h1 className="h1Menu">Products</h1>
          <div className="filterContainer">
            <span className="filter">Sort Products: </span>
            <select className="selectM" onChange={(e) => setSort(e.target.value)}>
              <option className="menuOp" value="Newest">Newest</option>
              <option className="menuOp" value="asc">Price (asc)</option>
              <option className="menuOp" value="desc">Price (desc)</option>
            </select>
          </div>
        </div>
        <div className="menuWrapper">
          {product.map((data) =>(
            <ProductList key={data.id} data={data}/>
          ))}
          {console.log("reder")}
        </div>
    </div>
  )
}
