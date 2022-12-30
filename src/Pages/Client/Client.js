import React from "react";
import client1 from "../../assets/client/logo01.jpg";
import client2 from "../../assets/client/logo02.png";
import client3 from "../../assets/client/logo3.png";
import client4 from "../../assets/client/logo4.png";
import client5 from "../../assets/client/logo5.png";

const Client = () => {
	return (
		<div className="mt-10">
			<h1 className="text-3xl text-center text-blue-600">My Clients</h1>
			<div className="flex justify-around items-center m-10">
				<img className="w-40" src={client1} alt="" />
				<img className="w-40" src={client2} alt="" />
				<img className="w-40" src={client3} alt="" />
				<img className="w-40" src={client4} alt="" />
				<img className="w-40" src={client5} alt="" />
			</div>
		</div>
	);
};

export default Client;
