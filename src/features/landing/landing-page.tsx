import { Navigate } from "react-router-dom";

import { useSession } from "@/hooks/use-session";

import LoadingPage from "../loading/loading-page";

export default function LandingPage({
	redirectPath,
}: {
	redirectPath: string;
}) {
	const { session, isLoading } = useSession();

	if (isLoading) return <LoadingPage />;

	if (!session) return <Navigate to="/login" />;

	return <Navigate to={redirectPath} />;
}
