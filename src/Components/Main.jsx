import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Main = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
<Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>

            </div>
        </div>
    );
};

export default Main;