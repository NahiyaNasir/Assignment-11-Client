import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
             <div className=" flex justify-center items-center  gap-5">
        <div className=" my-12">
           <img src="https://i.ibb.co/MZLdCLR/hand-drawn-404-error-23-2147746234.jpg" alt="" />
       
          <Link to="/">
            <button className="btn btn-warning"> Go Back</button>
          </Link>
        </div>
        </div>
        </div>
    );
};

export default ErrorPage;