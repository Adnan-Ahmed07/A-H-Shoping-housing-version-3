import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import{useSelector}from "react-redux"

const Header=()=>{ 
 const bag =useSelector(store=>store.bag);
 console.log("bag ase: ",bag);

return(
  <header>
  <div className="logo_container">
      <Link to="/"><img className="Adnan_Home" src="images/Adnan's.png" alt="Adnan Home"/></Link>
  </div>
  <nav className="nav_bar">
      <a href="#">Men</a>
      <a href="#">Women</a>
      <a href="#">Kids</a>
      <a href="#">Home & Living</a>
      <a href="#">Beauty</a>
      <a href="#">Studio <sup>New</sup></a>
  </nav>
  <div className="search_bar">
      <span className="material-symbols-outlined search_icon">search</span>
      <input className="search_input" placeholder="Search for products, brands and more"/>
  </div>
  <div className="action_bar">
      <div className="action_container action_name--orange">
      <IoPersonSharp />
          <span className="action_name ">Profile</span>
      </div>
      <div className="action_container">
      <div className="action_container action_name--orange">
      <FaHeart />

          <span className="action_name ">Wishlist</span>
      </div>
      </div>

      <Link to="/bag" className="action_container" >
      <BsBagHeartFill />
                <span class="action_name">Bag</span>
                <span class="bag-item-count">{bag.length}</span>
            </Link>
  </div>
</header>
);
}
export default Header;