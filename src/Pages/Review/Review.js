import React from "react";

const Review = () => {
	return (
		<div className="overflow-x-auto my-10">
			<h1 className="text-center text-5xl text-blue-600 border my-5 p-3">
				My Review
			</h1>
			<table className="table table-zebra w-full">
				<thead>
					<tr>
						<th className="text-lg">SL</th>
						<th className="text-lg">Name</th>
						<th className="text-lg">Review</th>
						<th className="text-center text-lg">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>1</th>
						<td>Cy Ganderton</td>
						<td>Quality Control Specialist</td>
						<td className="text-center">
							<button className="btn mr-5 sm:btn-sm">Update</button>
							<button className="btn sm:btn-sm">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Review;
