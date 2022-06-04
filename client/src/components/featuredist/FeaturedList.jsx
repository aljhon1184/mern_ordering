import "./featuredList.css"

export default function FeaturedList({data}) {
  return (
    <div className='productList'>
        <div className="productWrapper">
            <img className='pImage' src={data.Photo} alt="" />
            <div className="productInfo">
                <span className="Dish">Dish: {data.Dish}</span>
                <span className="Price">Price: {data.Price}</span>
                <span className="desc">{data.desc}</span>
                <button className="btnCart">Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
