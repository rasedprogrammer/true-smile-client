import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Header = () => {
	const { user } = useContext(AuthContext);
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a href="/">Item 1</a>
							</li>
							<li>
								<a href="/">Item 2</a>
							</li>
							<li>
								<a href="/">Item 3</a>
							</li>
						</ul>
					</div>
					<a href="/" className="btn btn-ghost normal-case text-xl">
						daisyUI
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link to="/" className="font-bold">
								Home
							</Link>
						</li>
						<li>
							{user?.email ? <Link to="/add-service">Add Service</Link> : null}
						</li>
						<li>
							{user?.email ? <Link to="/reviews">My Reviews</Link> : null}
						</li>
						<li>
							<Link href="/">Blog</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					{user?.email ? (
						<Link to="/login" className="btn">
							Logout
						</Link>
					) : (
						<Link to="/login" className="btn">
							Login
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
