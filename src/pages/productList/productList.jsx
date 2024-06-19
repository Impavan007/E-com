import { Select } from "@mui/material";
import Anouncement from "../../components/anouncement/anouncement";
import Footer from "../../components/footer.jsx/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/newsletter";
import Products from "../../components/products/products";
import "./productList.css";

export default function ProductList() {
    return (
        <div className='PlContainer'>
            <Navbar />
            <Anouncement />
            <div className="PLtitle">
                <h1>Dresses</h1>
            </div>
            <div className="FilterContainer">
                <div className="Filter">
                    <span className="FilterText">Filter Products:</span>
                    <select name="" id="" className="PLselect">
                    <option value="disabled select">
                        color
                    </option>
                    <option>White</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Green</option>
                    <option>Yellow</option>
                    </select>
                    <select name="" id="" className="PLselect">
                    <option value="disabled select">
                        Size
                    </option>
                    <option>Xs</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    </select>
                </div>
                <div className="Filter">
                    <span className="FilterText">Sort Products:</span>
                    <select name="" id="" className="PLselect">
                        <option value="">Newest</option>
                        <option value="">Price(Low To High)</option>
                        <option value="">Price (High To Low)</option>
                    </select>
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}
