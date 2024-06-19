import "./Cart.css";
import { Navbar } from '../../components/navbar/Navbar'
import Anouncement from '../../components/anouncement/anouncement'
import Footer from '../../components/footer.jsx/Footer'
import { type } from "@testing-library/user-event/dist/type";
import { Add, Remove } from "@mui/icons-material";

export default function Cart() {
  return (
    <div className='CartContainer'>
        <Navbar/>
        <Anouncement/>
        <div className="CartWraper">
            <h1 className="CartTitle">
                Your Bag
            </h1>
            <div className="CartTop">
                <button className="TopButton"> Continue Shopping</button>
                <div className="TopTexts"> 
                <span className="TopText">Shopping Bag(0)</span>
                <span className="TopText">Your WishList(2)</span>
                </div>
                
                <button
  className="TopButton"
  type="filled"
  style={{
    border: type = "filled"&&"none" ,
    backgroundColor: type = "filled" ? "black" : "transparent",
    color: type = "filled"&&"white" 
  }}
>
  Checkout Now
</button>

            </div>
            <div className="CartBottom">
                <div className="CartInfo">
                    <div className="P">
                    <div className="productInfo">
                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" className="productImg" />
                    <div className="PDetails">
                    <span  className="PDname"><b>Product</b>: Roadster Shoes</span>
                    <span className="PId"><b>Id</b>: 898799k98jh8</span>
                    <div className="prColor" style={{backgroundColor:"black"}}/>
                    <span className="pSize"><b>Size</b>: 10</span></div>


                    </div>
                    <div className="priceDetail">
                        <div className="pAmount">
                            <Add/>
                            <div className="pdAmount">
                                2
                            </div>
                            <Remove/>
                        </div>
                        <div className="Pprice">
                            Rs 500/-
                        </div>
                    </div>
                </div>
                {/*img2*/}
                <hr />
                <div className="P">
                    <div className="productInfo">
                    <img src="/product images/p7.png" alt="" className="productImg" />
                    <div className="PDetails">
                    <span  className="PDname"><b>Product</b>: Roadster Shoes</span>
                    <span className="PId"><b>Id</b>: 898799k98jh8</span>
                    <div className="prColor" style={{backgroundColor:"black"}}/>
                    <span className="pSize"><b>Size</b>: 10</span></div>


                    </div>
                    <div className="priceDetail">
                        <div className="pAmount">
                            <Add/>
                            <div className="pdAmount">
                                2
                            </div>
                            <Remove/>
                        </div>
                        <div className="Pprice">
                            Rs 500/-
                        </div>
                    </div>
                </div>
                <hr />
                {/*img3*/}
                <div className="P">
                    <div className="productInfo">
                    <img src="/product images/p3.png" alt="" className="productImg" />
                    <div className="PDetails">
                    <span  className="PDname"><b>Product</b>: Roadster Shoes</span>
                    <span className="PId"><b>Id</b>: 898799k98jh8</span>
                    <div className="prColor" style={{backgroundColor:"black"}}/>
                    <span className="pSize"><b>Size</b>: 10</span></div>


                    </div>
                    <div className="priceDetail">
                        <div className="pAmount">
                            <Add/>
                            <div className="pdAmount">
                                2
                            </div>
                            <Remove/>
                        </div>
                        <div className="Pprice">
                            Rs 500/-
                        </div>
                    </div>
                </div>

                </div>
                
                <div className="CartSummary">
                    <h1 className="SummaryTitle">ORDER SUMMARY</h1>
                    <div className="SummaryItem">
                        <span className="SummaryItemText">
                            SubTotal
                        </span>
                        <span className="SummaryItemPrice">
                            Rs 1200/-
                        </span></div> 
                        
                        <div className="SummaryItem">
                        <span className="SummaryItemText">
                            Estimated Shipping Charges
                        </span>
                        <span className="SummaryItemPrice">
                            Rs 100/-
                        </span></div>
                        <div className="SummaryItem">
                        <span className="SummaryItemText">
                            Shiping Disscount
                        </span>
                        <span className="SummaryItemPrice">
                            Rs 30/-
                        </span></div>
                        <div className="SummaryItem" type="total" style={{fontWeight: type="total"&&"500",fontSize: type="total"&&"24px"}}>
                        <span className="SummaryItemText">
                                Total
                        </span>
                        <span className="SummaryItemPrice">
                            Rs 1600/-
                        </span>
                    </div>
                    <button className="summaryButton">
                        Checkout Now
                    </button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
