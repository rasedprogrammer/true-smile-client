import React from "react";
import { Link } from "react-router-dom";
import backgroundImg from "../../assets/background-home.jpg";

const Banner = () => {
	return (
		<div className=" rounded-xl">
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: `url(${backgroundImg})`,
					borderRadius: `10px`,
				}}
			>
				<div className="hero-overlay bg-opacity-60 rounded-xl"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-xl">
						<h1 className="mb-5 text-6xl font-bold">YOUR NEW SMILE</h1>
						<p className="mb-5 max-w-xl">
							We will work with you to develop individualised care plans,
							including management of chronic diseases. If we cannot assist, we
							can provide referrals or advice about the type of practitioner you
							require. We treat all enquiries sensitively and in the strictest
							confidence..
						</p>
						<Link to="">
							<button className="btn btn-primary">Services</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
