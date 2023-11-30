import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";



const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const [cart] = useCart();
  
  
  const handleLogOut = () =>{
     logOut()
     .then(()=>{})
     .catch(error =>console.log(error));
  }

    const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/meals">Meals</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="">
    <button className="btn">
    <FaShoppingCart></FaShoppingCart>
    <div className="badge badge-secondary">+{cart.length}</div>
   </button>
    </Link></li>
    
    </>
    return (
        <>
         <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <img className="w-[80px] h-[60px] mr-3" src="https://i.ibb.co/McyQ5s5/hostel-logo.jpg" alt="" />
    <h2 className="text-2xl font-bold">Students 
    <br /><span className="text-[#D1A054]">Hostel</span></h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
  <details className="dropdown">
  <summary className="m-1 btn">
  {
      user && <div>
        <img className="w-10 h-10 rounded-full " src={user.photoURL} alt="" />
      </div>
    }
  </summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>{user?.displayName}</a></li>
    <li><Link to="/dashbord/requestmeal">Dashboard</Link></li>
    <li><a onClick={handleLogOut}>LogOut</a></li>
    
  </ul>
</details>
  </div>
</div>
        </>
    );
};

export default Navbar;