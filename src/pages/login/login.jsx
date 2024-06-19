import "./login.css";

export default function Login() {
  return (
    <div><div className="LogContainer">
    <div className="LogWraper">
        <h1 className="LogTitle">
            Create New Account
        </h1>
        <form action="" className="LogForm">
            <input type="text" placeholder="First Name" className="LogInput"/>
            <input type="text" placeholder="Password" className="LogInput"/>
            <button className="cra1">Login</button>
            <a href=""  className="Link"> Forgot Password</a>
            <a href="" className="Link">Create Account</a>
        </form>
    </div>
</div></div>
  )
}
