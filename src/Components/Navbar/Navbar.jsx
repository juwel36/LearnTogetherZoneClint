import { NavLink } from "react-router-dom";
import img1 from '../../assets/IMG_20231104_195936.png'
import { AuthContext } from "../../Authproder/Authprovider";
import { useContext } from "react";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const category = (
    <>
      <li> <NavLink to='/'>Home</NavLink> </li>
      <li> <NavLink to='/assignments'>Assignments</NavLink> </li>
     
  {user && (
    <>
      <li>
        <NavLink to="/createassignments">create assignments</NavLink>
      </li>
      <li>
        <NavLink to="/myassignments">my assignments</NavLink>
      </li>
      <li>
        <NavLink to="/submittedassignments">submitted assignments</NavLink>
      </li>
    </>
  )}



  

    </>
  )

  const loggedOut = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch(error => {
        console.log("Error logging out:", error);
      });
  };

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


<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      {user && user.photoURL ? (
        <img src={user.photoURL} alt="User Profile" />
      ) : (
        ''
      )}
    </div>
    {user ? (
      <span className="avatar-tooltip">{user.displayName}</span>
    ) : (
      ''
    )}
  </label>
  {user ? (
            <button onClick={loggedOut} className="btn text-white border-2 border-sky-700" >Sign Out</button>
          ) : (
            <>
              <NavLink to='/login' className="btn bg-slate-700 text-white border-none px-6">Log in</NavLink>
            <NavLink to='/regestraion' className=" text-white border-2 btn ml-2 px-2">Regestraion</NavLink>
            </>
          
          )}
  </div>
      </div>



    </div>
  );
};

export default Navbar;