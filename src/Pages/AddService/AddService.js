import React from "react";

const AddService = () => {
	const handleServiceAdd = (event) => {
		event.preventDefault();
		const form = event.target;
		const serviceName = form.name.value;
		const servicePhotoURL = form.photoURL.value;
		const serviceFee = form.fee.value;
		const serviceRating = form.rating.value;
		const serviceDescription = form.description.value;

		const serviceAddData = {
			title: serviceName,
			img: servicePhotoURL,
			description: serviceDescription,
			fee: serviceFee,
			rating: serviceRating,
		};

		fetch("http://localhost:5000/services", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(serviceAddData),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.acknowledged) {
					alert("Service Added Successfully!");
					form.reset();
				}
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="my-10">
			<h1 className="text-center text-5xl text-blue-600 font-bold my-5">
				Add Service
			</h1>
			<form onSubmit={handleServiceAdd}>
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="form-control w-full px-5">
						<label className="label">
							<span className="label-text font-bold">Service Name</span>
						</label>
						<input
							type="text"
							name="name"
							placeholder="Type here"
							className="input input-bordered w-full"
						/>
					</div>
					<div className="form-control w-full px-5">
						<label className="label">
							<span className="label-text font-bold">Photo Url</span>
						</label>
						<input
							type="text"
							name="photoURL"
							placeholder="Please give service photo url"
							className="input input-bordered w-full"
						/>
					</div>
					<div className="form-control w-full px-5">
						<label className="label">
							<span className="label-text font-bold">Fee Amount</span>
						</label>
						<input
							type="text"
							name="fee"
							placeholder="Only Number"
							className="input input-bordered w-full"
						/>
					</div>
					<div className="form-control w-full px-5">
						<label className="label">
							<span className="label-text font-bold">Rating</span>
						</label>
						<input
							type="text"
							name="rating"
							placeholder="Only Number"
							className="input input-bordered w-full"
						/>
					</div>
				</div>
				<div className="form-control w-full px-5">
					<label className="label">
						<span className="label-text font-bold">Description</span>
					</label>
					<textarea
						className="textarea textarea-bordered h-24"
						name="description"
						placeholder="Description"
					></textarea>
				</div>
			</form>
		</div>
	);
};

export default AddService;
