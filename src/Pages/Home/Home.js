import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Client from "../Client/Client";
import Services from "../Services/Services";
import Banner from "./Banner";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<AboutUs></AboutUs>
			<Services></Services>
			<Client></Client>
		</div>
	);
};

export default Home;
