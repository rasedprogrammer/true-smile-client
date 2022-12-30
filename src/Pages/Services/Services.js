import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
	const [services, setService] = useState([]);
	useEffect(() => {
		fetch("https://true-smile-server.vercel.app/services-home")
			.then((response) => response.json())
			.then((data) => setService(data));
	}, []);
	return (
		<div>
			<div className="text-center bg-base-200 p-5 rounded-xl">
				<p className="text-3xl text-blue-600">Services</p>
				<h2 className="text-1xl mt-5">
					I will work with you to develop individualised care plans, including
					management of chronic diseases. If we cannot assist, <br></br> we can
					provide referrals or advice about the type of practitioner you
					require. We treat all enquiries sensitively and in the strictest
					confidence.
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-base-200 p-5 rounded-xl">
				{services.map((service) => (
					<>
						<ServiceCard key={service._id} service={service}></ServiceCard>
					</>
				))}
			</div>
			<Link
				to="/all-services"
				className="flex justify-center mb-10 bg-base-200 p-5 rounded-xl"
			>
				<button className="btn btn-primary">Service All</button>
			</Link>
		</div>
	);
};

export default Services;
