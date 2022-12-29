import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDetails = () => {
	const service = useLoaderData();
	const { _id, title, img, description, fee, rating } = service;
	const { user } = useContext(AuthContext);
	const [serviceReviews, setServiceReviews] = useState([]);

	const notify = () => toast.success("Review Added Successfully!");

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
					form.reset();
				}
				<ToastContainer />;
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="flex flex-col w-full lg:flex-row my-5">
			<div className="grid flex-grow h-auto p-5 w-3/5 card rounded-box">
				<h1 className="text-center text-3xl font-bold text-blue-500">
					{title}
				</h1>
				<div className="flex justify-center items-baseline">
					<img className="m-5" src={img} alt="" />
				</div>
				<div className="flex justify-around items-center font-bold">
					<p>Price: ${fee}</p>
					<p>Rating: {rating}</p>
				</div>
				<h3 className="text-3xl font-bold text-blue-600 text-center border-b-2 border-blue-300 p-0">
					Details
				</h3>
				<p className="mt-3">{description}</p>
			</div>
			<div className="grid flex-grow h-auto p-5 w-2/5 card bg-base-200 rounded-box place-items-center ml-2">
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
						{user?.email ? (
							<button
								onClick={notify}
								value="Submit"
								className="btn btn-primary"
							>
								Submit
							</button>
						) : (
							<>
								<p className="text-2xl mt-3 text-center">
									Please Login First For Review{" "}
									<span>
										<Link
											className="border-b-2 border-blue-300 text-2xl text-blue-700"
											to="/login"
										>
											Login
										</Link>
									</span>
								</p>
							</>
						)}
					</div>
				</form>
				<div className="serviceReviews">
					<h2 className="text-3xl mt-10 font-bold text-orange-500 text-center border-4 border-b-orange-500">
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
