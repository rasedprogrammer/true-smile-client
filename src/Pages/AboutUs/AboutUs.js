import React from "react";
import aboutUsPhoto from "../../assets/aboutUs/aboutUs.jpeg";

const AboutUs = () => {
	return (
		<div>
			<div className="hero min-h-screen">
				<h1 className="text-center text-5xl mb-96 text-blue-600 font-extrabold">
					About Us
				</h1>
				<div className="hero-content flex-col mt-20 lg:flex-row">
					<img
						src={aboutUsPhoto}
						className="max-w-sm rounded-lg shadow-2xl"
						alt=""
					/>
					<div className=" ml-16">
						<h1 className="text-5xl font-bold ">
							We Care For <br /> Your Dental Health
						</h1>
						<p className="py-6">
							We will probably instruct and teach the exceptionally imperative
							estimation of oral wellbeing and what every single patient can do
							to keep his or her teeth solid during their lifetime. We are
							committed to offering our patients great dentistry in a minding
							and delicate way.
						</p>
						<p className="py-6">
							Our best-in-class dental innovation, and in particular our
							proceeding with an expert training program for every one of the
							individuals from our dental group has a noteworthy influence in
							achieving that objective.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
