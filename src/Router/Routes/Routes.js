import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Blog from "../../Shared/Blog/Blog";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/service/:id",
				element: <ServiceDetails></ServiceDetails>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/service/${params.id}`),
			},
			{
				path: "/reviews",
				element: <Review></Review>,
			},

			{
				path: "/add-service",
				element: <AddService></AddService>,
			},
			{
				path: "/all-services",
				loader: () => fetch("http://localhost:5000/services"),
				element: <AllServices></AllServices>,
			},
		],
	},
	{
		path: "/blog",
		element: <Blog></Blog>,
	},
]);
export default router;
