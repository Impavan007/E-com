import "./categoriesItem.css";


export default function CategoriesItem({ item }) {
  return (
    <div className='Itemcontainer'>
            <div className="imgDiv"><img src={item.img} alt="" className="Itemimg"/></div>
            <div className="itemInfo">
               <div className="itemTitle">
               <h1>{item.title}</h1>
               </div>
               <button className="itemBtn">Shop Now</button>
            </div>
        
    </div>
  )
}
