import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <div className="md:w-[85%] mx-auto my-2">
            <Navbar></Navbar>
            </div>
            <div className="md:w-[85%] mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;