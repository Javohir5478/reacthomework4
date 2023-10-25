
import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
        <div className="header_container"> 
         <img className="logo" src="/logo.png" alt="" />
         <img className="menu" src="/menu.png" alt="" />   
         <input  type="text" placeholder="search products.." />
        <Link to="/fav"> <h4>favourite</h4> </Link>
       <Link to="/products">  <h4>Products</h4>  </Link>
       <Link to="/savat">  <h4>Basket</h4> </Link>
         <button className="btn ">Login</button>

        </div>
  )
}