import React from "react";

const ReviewCard = ({ review, handleDelete }) => {
	const { _id, serviceName, reviewerMessage } = review;

	return (
		<div>
			<table className="table table-zebra w-full mt-5">
				<tbody>
					<tr>
						<td className="w-3/12">{serviceName}</td>
						<p>{reviewerMessage}</p>
						<td className="text-center w-3/12">
							<button className="btn mr-5 sm:btn-sm">Edit</button>
							<button
								onClick={() => handleDelete(_id)}
								className="btn sm:btn-sm"
							>
								Delete
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ReviewCard;
