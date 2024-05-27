import { Link } from "react-router-dom";

import { Main } from "@/components/main";

import { LoginForm } from "../components/login-form";

export function LoginPage() {
	return (
		<Main className="flex flex-col items-center justify-center px-6 py-12">
			<div className="w-full max-w-lg space-y-8">
				<div className="space-y-2">
					<h1 className="text-3xl font-semibold md:text-center">
						Bienvenido de vuelta
					</h1>

					<p className="text-muted-foreground md:text-center">
						Ingresa tus credenciales para iniciar sesión
					</p>
				</div>

				<LoginForm />

				<p className="text-center text-muted-foreground">
					¿No tienes una cuenta aún?{" "}
					<Link to="/sign-up" className="text-foreground">
						Regístrate
					</Link>
				</p>
			</div>
		</Main>
	);
}
