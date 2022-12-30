import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ReviewCard from "./ReviewCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Review = () => {
	const { user } = useContext(AuthContext);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch(
			`https://true-smile-server.vercel.app/reviews?reviewerEmail=${user?.email}`
		)
			.then((response) => response.json())
			.then((data) => setReviews(data));
	}, [user?.email]);

	const handleDelete = (id) => {
		const deleteConfirm = window.confirm("Are you sure you want to delete?");
		if (deleteConfirm) {
			fetch(`https://true-smile-server.vercel.app/reviews/${id}`, {
				method: "DELETE",
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						toast.success("Review Deleted Successfully");
						const remaining = reviews.filter(
							(reviewCount) => reviewCount._id !== id
						);
						setReviews(remaining);
					}
					<ToastContainer />;
				});
		}
	};
	return (
		<div className="overflow-x-auto my-10">
			<h1 className="text-center text-5xl text-blue-600 border my-5 p-3">
				My Review
			</h1>
			<table className="table table-zebra w-full">
				<thead>
					<tr>
						<th className="text-lg">Name</th>
						<th className="text-lg">Review</th>
						<th className="text-center text-lg">Action</th>
					</tr>
				</thead>
			</table>
			{reviews.map((review) => (
				<ReviewCard
					key={review._id}
					review={review}
					handleDelete={handleDelete}
				></ReviewCard>
			))}
			{reviews.length === 0 && (
				<h1 className="text-3xl font-bold text-center mt-10 text-orange-600">
					No Review Added Yet!!!
				</h1>
			)}
		</div>
	);
};

export default Review;
