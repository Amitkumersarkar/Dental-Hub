import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="flex justify-between items-center  navbar bg-base-100 shadow-sm">
            <div >
                <NavLink to='/'>
                    <a className="btn btn-ghost text-xl">Dental-Hub</a>
                </NavLink>
            </div>
            <div className="flex items-center gap-5">
                <NavLink to='/'>
                    <a className="link link-hover"> Home</a>
                </NavLink>
                <Link to='/about'>
                    <a className="link link-hover"> About</a>
                </Link>
                <Link to='/treatment'>
                    <a className="link link-hover"> Treatments</a>
                </Link>
                <Link to='/appointment'>
                    <a className="link link-hover"> Appointment</a>
                </Link>
                <Link to='/contact'>
                    <a className="link link-hover">Contact us</a>
                </Link>
            </div>
            <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <Link to='/signup'>SignUp</Link>
                        </li>
                        <li>
                            <Link to='/login'>LogIn</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;