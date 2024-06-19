import "./Register.css";

export default function Register() {
  return (
    <div className="RegContainer">
        <div className="RegWraper">
            <h1 className="regTitle">
                Create New Account
            </h1>
            <form action="">
                <input type="text" placeholder="First Name" className="regInput"/>
                <input type="text" placeholder="Last Name" className="regInput"/>
                <input type="email" placeholder="E-mail" className="regInput"/>
                <input type="number" placeholder="Password" className="regInput"/>
                <input type="text" placeholder="UserName" className="regInput"/>
                <input type="text" placeholder="Confirm Pasword" className="regInput"/>
                <p>By consisting an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></p>
                <div className="AGREEMENT"></div>
                <button className="cra">CREATE ACCOUNT</button>
            </form>
        </div>
    </div>
  )
}
