import { Link } from "react-router-dom";

import { Main } from "@/components/main";

import { SignUpForm } from "../components/sign-up-form";

export function SignUpPage() {
	return (
		<Main className="flex flex-col items-center justify-center px-6 py-12">
			<div className="w-full max-w-lg space-y-8">
				<div className="space-y-2">
					<h1 className="text-3xl font-semibold md:text-center">Regístrate</h1>

					<p className="text-muted-foreground md:text-center">Comencemos</p>
				</div>

				<SignUpForm />

				<p className="text-center text-muted-foreground">
					¿Ya tienes una cuenta?{" "}
					<Link to="/login" className="text-foreground">
						Inicia sesión
					</Link>
				</p>
			</div>
		</Main>
	);
}
