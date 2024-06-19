import"./products.css"
import { popularProducts } from '../../pages/data';
import Product from './product';
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className='aContainer'>
        {popularProducts.map((P)=>(
          <Link to='/Productpage' style={{color:"inherit"}}>
            <Product key={P.id} P={P}/></Link>
        ))}

    </div>
  )
}
