import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const { signIn, signInWithGoogle} =
    useContext(AuthContext);
  const location=useLocation()
  const navigate=useNavigate()
    const handleLogin = (e) => {

        e.preventDefault();
        const form = new FormData(e.currentTarget);
    
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);
        signIn(email, password)
          .then((result) => {
            console.log(result.user);
            navigate( location?.state?  location.state :'/')
       
          Swal.fire({
            title: 'Success!',
            text: 'user login successfully',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
         
          })
          .catch((error) => {
           toast.error(error);
            
          });
        
      };
      const handelGoogleSignIn = () => {
        signInWithGoogle()
          .then((result) => {
            console.log(result.user);
            navigate( location?.state?  location.state :'/')
           
            toast.success('user Login Successfully with Google') 
          })
          .catch((error) => toast.error(error));
         
      };
    return (
        <div className=" my-6">
          <div>
            <Helmet><title>Login Page</title></Helmet>
          </div>
         <div className=" flex items-center justify-center my-6">
          <img src="https://i.ibb.co/SNCgnJX/tablet-login-concept-illustration-114360-7883.jpg" alt="" />
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-yellow-400">
          <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-2xl"> Welcome Again!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-purple-200">Login</button>
            </div>
            <div className="divider"> Continue With Social accounts </div>
            <button className=" btn btn-outline" onClick={handelGoogleSignIn}>
              <FaGoogle></FaGoogle> 
            </button>
            
          </form>

          <p className="mx-10 mb-3">
            Need to register? Click{" "}
            <Link to="/register">
              <span className="underline text-orange-400">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
        </div>
    );
};

export default Login;


// style={{backgroundImage:`url('https://i.ibb.co/RjTYfVt/tablet-login-concept-illustration-114360-7893.jpg')`}}