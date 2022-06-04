import "./cartList.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { updatePrice, updateTotal, removeProduct } from "../../redux/cartSlice";

export default function CartList( {p}) {
    const [quantity, setQuantity] = useState(1);
    const price = p.Price;
    const qtty1 = 1;
    const dispatch = useDispatch();

    const handleClick = (operator) =>{
        if(operator === "minus"){
            if(quantity !== 1){

                setQuantity((prev) => prev === 1 ? 1 :  prev -1)
                dispatch(updateTotal({price}))
            }
        }
        if(operator === "plus"){
            setQuantity(quantity + 1);
            dispatch(updatePrice({ qtty1, price}))
        }
        
    }

    const deleProduct = (id, p) =>{
        dispatch(removeProduct({ id }));
        dispatch(updateTotal({price: p, qttq: quantity}));
    }
    
    


   
  return (
    <div className="cartList">
        {p ? (

            <div className="cartListWrapper">
            <img className="cartImg" src={p.Photo} alt="" />
            <div className="cartInfoWrapper">
                <div className="cartInfoItem">
                    <span className="cartProduct">ProductId: {p.id} </span>
                    <span className="productName">{p.Dish}</span>
                    <span className="productPrice">Price: {p.Price}</span>
                    <div className="quantity">
                        <span className="qty">Quantity: {quantity}</span>
                        <button className="btnCart" onClick={() => handleClick("minus")}>-</button>
                        <button className="btnCart" onClick={() => handleClick("plus")}>+</button>
                    </div>
                </div>
            </div>

            <button className="btnRemove" onClick={() => deleProduct(p.id, p.Price)}>Remove to Cart</button>
        </div>
            ): ( <>
            <span>QWEQEQWEWQEWQEQW</span>
            </>)}
    </div>
  )
}
