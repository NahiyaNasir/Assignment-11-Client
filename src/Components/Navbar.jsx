// import { Link } from "react-router-dom";

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const handelSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

    return (
        <div>
          <div className="navbar h-16 bg-gray-300 ">
  <div className="navbar-start">
    <div className="dropdown z-[50] text-white">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 rounded-box w-52">
      <li>
    <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-orange-400 underline "
                  : "font-bold  p-2 "
              }
            >
             Home
            </NavLink>
    </li>
    <li>
    <NavLink
              to="/need"
              className={({ isActive }) =>
                isActive
                  ? " text-orange-400 underline "
                  : "font-bold  p-2 "
              }
            >
            Need Volunteer
            </NavLink>
    </li>
    <li>
        <details>
          <summary>My Profile</summary>
          <ul className="p-2 z-[50]">
           
           <li>
           <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive
                  ? " text-orange-400 underline"
                  : "font-bold  p-2 "
              }
            >
              Add Volunteer
            </NavLink>
           </li>
            <li>
            <NavLink
              to="/myPost"
              className={({ isActive }) =>
                isActive
                  ? " text-orange-400 underline"
                  : "font-bold  p-2 "
              }
            >
             My Post 
            </NavLink>
            </li>
          </ul>
        </details>
      </li>
      </ul>
    </div>
   
    <a className="btn btn-ghost text-xl">  <span className="text-orange-500">Compassion </span> <span className="text-blue-950"> Corner</span> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
    <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-orange-400 underline "
                  : "font-bold  p-2 "
              }
            >
             Home
            </NavLink>
    </li>
    <li>
    <NavLink
              to="/need"
              className={({ isActive }) =>
                isActive
                  ? " text-orange-400 underline "
                  : "font-bold  p-2 "
              }
            >
            Need Volunteer
            </NavLink>
    </li>
     
     
     
      <li>
        <details>
          <summary>My Profile</summary>
          <ul className="p-2 z-[50]">
           
           <li>
           <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive
                  ? " text-orange-400 underline "
                  : "font-bold  p-2 "
              }
            >
              Add Volunteer
            </NavLink>
           </li>
            <li>
            <NavLink
              to="/myPost"
              className={({ isActive }) =>
                isActive
                  ? "   text-orange-400 underline  "
                  : "font-bold  p-2 "
              }
            >
             My Post 
            </NavLink>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
 

    
  {user ? (
              <div className=" gap-6 navbar-end">
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user.displayName}
                >
                  <div className="avatar online">
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL || " URl NOt Found"} />
                    </div>
                  </div>
                </div>

                <button className="btn bg-[#59C6D2]" onClick={handelSignOut}>
                  Log out
                </button>
              </div>
            ) : (
              <div className="navbar-end gap-3">
                <Link to="/login">
                  <button className="btn btn-accent"> Sign In</button>
                </Link>
                
              </div>
            )}
         </div>


        </div>
    );
};

export default Navbar;