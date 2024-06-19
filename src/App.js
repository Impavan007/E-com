import Cart from "./pages/Cart/Cart";
import Register from "./pages/Register/Register";
import { Home } from "./pages/homepage/home";
import Login from "./pages/login/login";
import ProductList from "./pages/productList/productList";
import Productpage from "./pages/productpage/productpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>

      <Routes>
    <Route  path='/Home' element={<Home/>}/>
    <Route index  element={<Login/>}/>
    <Route  path='/Cart' element={<Cart/>}/>
    <Route  path='/Register' element={<Register/>}/>
    <Route  path='/Productpage' element={<Productpage/>}/>
    <Route  path='/ProductList' element={<ProductList/>}/>

    </Routes>
   
   </Router>
  );
}

export default App;
