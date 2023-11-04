import { NavLink } from "react-router-dom";
import img1 from '../../assets/IMG_20231104_195936.png'


const Navbar = () => {

  const category = (
    <>
      <li> <NavLink to='/'>Home</NavLink> </li>
      <li> <NavLink to='/assignments'>Assignments</NavLink> </li>
      <li> <NavLink to='/login'>Log In </NavLink> </li>

    </>
  )


  return (
    <div>

      <div className="navbar bg-teal-800">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {
                category
              }
            </ul>
          </div>
          <NavLink to='/'> <img className="w-16 " src={img1} alt="" /> </NavLink>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              category
            }
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="flex gap-4">
            <li>  <NavLink to='/regestraion'>Regestraion </NavLink>  </li>
            <li>
              <NavLink to='/login'>Log In </NavLink>   </li>
          </ul>

        </div>
      </div>



    </div>
  );
};

export default Navbar;