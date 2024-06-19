import "./productpage.css";
import { Navbar } from '../../components/navbar/Navbar'
import Anouncement from '../../components/anouncement/anouncement'
import Newsletter from '../../components/newsletter/newsletter'
import Footer from '../../components/footer.jsx/Footer'
import { Add, Remove } from "@mui/icons-material";

export default function ProductPage() {
  return (
    <div className='PgContainer'>
        <Navbar/>
        <Anouncement/>
        <div className="pgWrapper">
            <div className="pgImgContainer">
                <img src="/Assets/download.jpeg" alt="" className="pgimg" />
            </div>
            <div className="infoContainer">
                <div className="pgTiltle">
                    <h1>Denim Jeans</h1>

                </div>
                <p className="pgDesc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos minus dolorem mollitia voluptatibus a vel impedit provident dolor natus!
                </p>
                <span className="Price">
                   Rs 500/-
                </span>
                <div className="pgFilterContainer">
                    <div className="pgFilter">
                        <div className="pgFilterTitle">
                            color
                        </div>
                        <div className="pgFilterColor" style={{backgroundColor:"black"}}></div>
                        <div className="pgFilterColor" style={{backgroundColor:"blue"}}></div>
                        <div className="pgFilterColor" style={{backgroundColor:"gray"}}></div>                    
                        </div>
                        <div className="pgFilter">
                            <div className="pgFilterTitle">Size</div>
                            <select className="pgFilterSize">
                                <option className="filterSizeOption">Xs</option>
                                <option className="filterSizeOption">S</option>
                                <option className="filterSizeOption">M</option>
                                <option className="filterSizeOption">L</option>
                                <option className="filterSizeOption">XL</option>
                                <option className="filterSizeOption">XXL</option>
                            </select>
                        </div>
                </div>
                <div className="AddContainer">
                    <div className="AmountContainer">
                      <Remove/>
                      <span className="Amount">1</span>
                      <Add/>
                    </div>
                    <button className="addBtn">Add To Cart</button>
                </div>
            </div>
        </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}
