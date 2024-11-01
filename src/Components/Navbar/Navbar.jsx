import { NavLink } from "react-router-dom";
import icon from "../../assets/book.ico"
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 sticky top-0 backdrop-blur-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to= "/">Home</NavLink></li>
                        <li><a>Listed Books</a></li>
                        <li><a>Pages to read</a></li>
                        <li>
                            <a>Address</a>
                            <ul className="p-2">
                                <li><a>address-1</a></li>
                                <li><a>address-2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className="w-6" src={icon} alt="" />Book Cafe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><a>Home</a></li>
                    <li><a>Listed Books</a></li>
                    <li><a>Pages to Read</a></li>
                    <li>
                        <details>
                            <summary>Address</summary>
                            <ul className="p-2">
                                <li><a>address-1</a></li>
                                <li><a>address-2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-green-400 text-white font-semibold">Sign In</a>
                <a className="btn bg-sky-400 text-white font-semibold">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;