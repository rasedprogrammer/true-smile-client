import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard";
// import { Link } from "react-router-dom";

const AllServices = () => {
	const allServices = useLoaderData();
	return (
		<div>
			<h1 className="text-5xl text-center text-blue-600 border my-10 p-5">
				All Services
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
				{allServices.map((service) => (
					<ServiceCard key={service._id} service={service}></ServiceCard>
				))}
			</div>
		</div>
	);
};

export default AllServices;
