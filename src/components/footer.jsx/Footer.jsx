import { Facebook, Instagram, Mail, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import "./footer.css";


export default function Footer() {
  return (
    <div className="fContainer">
        <div className="fleft">
            <div className="flogo">
                <h1>Friends&Store</h1>
            </div>
            <div className="fdesc">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam blanditiis soluta repudiandae! Quis unde quisquam nulla ullam rem consectetur aliquam dignissimos ad voluptate recusandae vero, veritatis sunt magni at, suscipit laudantium nobis.
                </p></div>
            <div className="fSocialContainer">
                <div className="fSocialIcon" style={{ backgroundColor: `#${"3B5999"}` }}>
                    <Facebook/>
                </div>
                <div className="fSocialIcon" style={{ backgroundColor: `#${"E4405F"}` }}>
                    <Instagram/>
                </div>
                <div className="fSocialIcon" style={{ backgroundColor: `#${"55ACEE"}` }}>
                    <Twitter/>
                </div>
                <div className="fSocialIcon" style={{ backgroundColor: `#${"E60023"}` }}>
                    <Pinterest/>
                </div>
            </div>
        </div>
        <div className="fcenter">
            <div className="Ftitle">
                <h3>Usefull Links</h3></div>
            <ul className="Flist">
            <li  className="fli">Home</li>
            <li className="fli">Cart</li>
            <li className="fli">Man Fashion</li>
            <li className="fli">Woman Fashio</li>
            <li className="fli">Acessories</li>
            <li className="fli">My Account</li>
            <li className="fli">Wishlist</li>
            <li className="fli">Wishlist</li>
            <li className="fli">Wishlist</li>
            <li className="fli">Terms</li>
            </ul>
        </div>
        <div className="fright">
            <div className="Rtitle">Contact</div>
                <div className="Fcontact">
                    <Room style={{margin:"10px"}}/>
                    kachahri Road Ajmer Rajasthan
                </div>
                <div className="Fcontact">
                    <Phone style={{margin:"10px"}}/>
                   +91 6377654083
                </div>
                <div className="Fcontact">
                    <MailOutline style={{margin:"10px"}}/>
                   raopavansingh007@gmail.com
                </div>
                <img src="/p1.png" alt="" className="payment" />
           
        </div>
        
    </div>
  )
}
