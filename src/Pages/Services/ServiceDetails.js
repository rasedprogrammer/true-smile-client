import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const ServiceDetails = () => {
	const service = useLoaderData();
	const { _id, title, img, description, fee, rating } = service;
	const { user } = useContext(AuthContext);
	const [serviceReviews, setServiceReviews] = useState([]);
	console.log(serviceReviews);

	useEffect(() => {
		fetch(`http://localhost:5000/service-reviews?service=${_id}`)
			.then((response) => response.json())
			.then((data) => setServiceReviews(data))
			.catch((error) => console.log(error));
	}, [_id]);

	const handleReview = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const review = form.review.value;
		const email = user?.email || "Unregistered";

		const reviewData = {
			service: _id,
			serviceName: title,
			reviewerName: name,
			reviewerEmail: email,
			reviewerPhotoURL: photoURL,
			reviewerMessage: review,
		};

		fetch("http://localhost:5000/reviews", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(reviewData),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.acknowledged) {
					alert("Review Added Successfully!");
					form.reset();
				}
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="flex flex-col w-full lg:flex-row my-5">
			<div className="grid flex-grow h-auto p-5 w-3/5 card bg-base-300 rounded-box place-items-center">
				{title}
			</div>
			<div className="grid flex-grow h-auto p-5 w-2/5 card bg-base-300 rounded-box place-items-center ml-2">
				<form onSubmit={handleReview} className="w-full">
					<div className="grid grid-col-1 lg:grid-col-2 gap-4 w-full">
						<div className="flex justify-between items-center w-full">
							<label className="mr-3">Name</label>
							<input
								type="text"
								name="name"
								placeholder="Type Your Name"
								className="input input-bordered input-sm input-warning w-full max-w-xs"
							/>
						</div>
						<div className="flex justify-between items-center w-full">
							<label className="mr-3">Photo Url</label>
							<input
								type="text"
								name="photoURL"
								placeholder="Paste Your Photo Url"
								className="input input-bordered input-sm input-warning w-full max-w-xs"
							/>
						</div>
						<div className="flex justify-between items-center w-full">
							<label className="mr-3">Email</label>
							<input
								type="text"
								name="email"
								defaultValue={user?.email}
								readOnly
								className="input input-bordered input-sm input-warning w-full max-w-xs"
							/>
						</div>
						<div className="flex justify-between items-center w-full">
							<label className="mr-3">Review</label>
							<textarea
								name="review"
								className="textarea textarea-warning max-w-xs w-full"
								placeholder="Bio"
							></textarea>
						</div>
						<input className="btn" type="submit" value="Submit" />
					</div>
				</form>
				<div className="serviceReviews">
					<h2 className="text-3xl font-bold text-orange-500 text-center border-4 border-b-orange-500">
						Service Reviews
					</h2>
					{serviceReviews.map((serviceReview) => (
						<div key={serviceReview._id} className="mt-4">
							<div className="flex justify-around items-center">
								<div>
									<img
										className="w-10 h-10 rounded-badge"
										src={serviceReview.reviewerPhotoURL}
										alt=""
									/>
								</div>
								<div className=" ml-3">
									<p>{serviceReview.reviewerName}</p>
									<p>{serviceReview.reviewerEmail}</p>
								</div>
							</div>
							<div className=" mt-2 border-2 border-b-amber-900 m-2 p-3">
								<p>{serviceReview.reviewerMessage}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServiceDetails;
