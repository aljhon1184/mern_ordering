
import "./productList.css"
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartSlice";


export default function ProductList({data}) {
  const dispatch = useDispatch();
  const price = data.Price;
  const quantity = 1;
  const data1 = useSelector((state) => state.cart);

  console.log(data1)



  const handleClick = () =>{
    dispatch(addProduct({ ...data, quantity, price}));
  }

  return (
    <div className='pl'>
      <div className="plWrapper">
        <img className="plImg" src={data.Photo} alt=""/>
        <div className="dishInfo">
          <span className="pDish">{data.Dish}</span>
          <span className="pPrice">Price: {data.Price}</span>
          <span className="pDesc">{data.desc}</span>
          <button className="pBtn" onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
