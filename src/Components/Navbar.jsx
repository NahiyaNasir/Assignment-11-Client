// import { Link } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const [theme, setThem] = useState(localStorage.getItem(("theme")||"light"));
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    console.log(localTheme);
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const hasToggled = (e) => {
    if (e.target.checked) {
      setThem("dracula");
    } else {
      setThem("light");
    }
  };
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
    <label className="cursor-pointer grid place-items-center">
            <input
              onChange={hasToggled}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
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