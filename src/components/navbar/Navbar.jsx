import { Search, ShoppingCart } from "@mui/icons-material";
import "./Navbar.css";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='navBar'>
      <div className="wrapper">
        <div className="Left">
          <div className="language">
            En
          </div>
          <div className="searchContainer">
            <input type="text" className="searchBar" placeholder="Search Here"/> 
            <Search/>

          </div>
        </div>
        <div className="Center">
        <Link to='/Home' style={{color:"inherit"}} >  <h1 className="logo">Friends&Store</h1></Link>
        </div>
        <div className="Right">
          <div className="menuItem">
           <Link to='/Register' style={{color:"inherit",textDecoration:"None"}}  >REGISTER</Link>
          </div>
          <div className="menuItem">
          <Link to='/'  style={{color:"inherit",textDecoration:"None"}} > Sign-In</Link> 
          </div>
          <div className="menuItem">
            <Badge badgeContent={4} color="primary"><Link to='/Cart' style={{color:"inherit"}} ><ShoppingCart/></Link></Badge></div>
        </div>
        
      </div>
    </div>
  )
}
 