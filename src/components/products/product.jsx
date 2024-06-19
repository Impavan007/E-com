import "./product.css";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

export default function Product({ P }) {
  return (
    <div className='pContainer'>
      <div className="pcircle"></div>      
      <img src={P.img} alt="" className="pimg"/>
      <div className="pInfo">
        <div className="picon">
          <ShoppingCartOutlined/>
        </div>
        <div className="picon">
          <SearchOutlined/>
        </div>
        <div className="picon">
          <FavoriteBorderOutlined/>
        </div>
      </div>
    </div>
  );
}
