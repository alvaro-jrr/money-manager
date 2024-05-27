import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ProtectedRoute } from "./components/protected-route";
import { RootPage } from "./components/root-page";
import { Toaster } from "./components/ui/toaster";
import { LoginPage } from "./features/auth/pages/login-page";
import { SignUpPage } from "./features/auth/pages/sign-up-page";
import { ErrorPage } from "./features/error/error-page";
import { HomePage } from "./features/home/home-page";
import LandingPage from "./features/landing/landing-page";
import "./index.css";

const router = createBrowserRouter([
	{
		element: <RootPage />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <LandingPage redirectPath="/home" />,
			},
			{
				path: "/sign-up",
				element: <SignUpPage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				element: <ProtectedRoute />,
				children: [
					{
						path: "/home",
						element: <HomePage />,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />

		<Toaster />
	</React.StrictMode>,
);
