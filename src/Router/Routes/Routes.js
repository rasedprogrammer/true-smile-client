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
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
					fetch(`https://true-smile-server.vercel.app/service/${params.id}`),
			},
			{
				path: "/reviews",
				element: (
					<PrivateRoute>
						<Review></Review>
					</PrivateRoute>
				),
			},

			{
				path: "/add-service",
				element: (
					<PrivateRoute>
						<AddService></AddService>
					</PrivateRoute>
				),
			},
			{
				path: "/all-services",
				loader: () => fetch("https://true-smile-server.vercel.app/services"),
				element: <AllServices></AllServices>,
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
		],
	},
]);
export default router;
