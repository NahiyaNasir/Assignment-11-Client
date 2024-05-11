import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Main = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
<Navbar></Navbar>
<Outlet></Outlet>

            </div>
        </div>
    );
};

export default Main;