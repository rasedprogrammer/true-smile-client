import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
	const { _id, img, title, fee, description, rating } = service;
	const MAX_LENGTH = 100;
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure className="px-5 pt-5">
				<img src={img} alt="Shoes" className="rounded-xl" />
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{title}</h2>
				{description.length > MAX_LENGTH ? (
					<div>{`${description.substring(0, MAX_LENGTH)}...`}</div>
				) : (
					<p>{description}</p>
				)}
				<div className="card-actions">
					<p className="font-bold pr-12">Fees: ${fee}</p>
					<p className="font-bold">Rating: {rating}</p>
				</div>
				<div className="card-actions pt-5">
					<Link to={`/service/${_id}`}>
						<button className="btn btn-primary">View More</button>
					</Link>
					<button className="btn btn-success">Add Review</button>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
