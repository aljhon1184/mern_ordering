import { useSelector } from "react-redux"
import CartList from "../../components/cartlist/CartList"
import Navbar from "../../components/navbar/Navbar"
import "./cart.css"

export default function Cart() {

  const product = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  return (
    <div className="cart">
        <Navbar />
        <h1 className="cartTitle">YOUR CART</h1>
        <div className="cartWrapper">
            <div className="left">
              {product.length === 0 ? (
                <span className="noItem">YOUR BAG IS EMPTY</span>
              ) : (
                <>
                {product.map((p) =>(
                  <CartList key={p.id} p={p}/>
                  ))}
                  </>
                )}
            </div>
            <div className="right">
              <div className="rightWrapper">
                <span className="orderSumary">ORDER SUMMARY</span>
                <div className="OrderInfo">
                  <div className="subTotal">
                    <h2>SUBTOTAL :</h2>
                    <span className="orderItems">{total}</span>
                  </div>
                  <div className="totalProduct">
                    <h2>TOTAL PRODUCTS :</h2>
                    <span className="orderItems">{product.length}</span>
                  </div>
                  <hr className="hr"/>
                  <div className="totalAll">
                    <h2>TOTAL :</h2>
                    <span className="orderItems">{total}</span>
                  </div>
                  <button className="btnOrderNow">ORDER NOW</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
