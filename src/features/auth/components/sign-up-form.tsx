import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { Navigate, useLocation } from "react-router-dom";

import { authApi } from "@/api/auth-api";

import { isErrorResponse } from "@/models/error-response";
import { UserRegister, type UserRegisterType } from "@/models/user-register";

import { PasswordField } from "@/components/password-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { useSession } from "@/hooks/use-session";

export function SignUpForm() {
	const { session, update } = useSession();
	const location = useLocation();
	const { toast } = useToast();

	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm<UserRegisterType>({
		resolver: zodResolver(UserRegister),
		values: {
			email: "",
			fullName: "",
			password: "",
		},
	});

	/// Navigate to other route because the user has an active session.
	if (session) {
		const search: string = location.state?.from?.search || "";
		const from: string = location.state?.from?.pathname || "/home";

		return <Navigate to={from.concat(search)} />;
	}

	const onSubmit: SubmitHandler<UserRegisterType> = async (user) => {
		const response = await authApi.register(user);

		if (response === null || isErrorResponse(response)) {
			const messages: { [key: number]: string } = {
				400: "Usuario no pudo ser registrado",
				409: "Email ya está tomado",
				422: "Error de validación",
				500: "Error interno",
			};

			return toast({
				title: "Ha ocurrido un error",
				description:
					response && messages[response.status]
						? messages[response.status]!
						: "Intente más tarde",
			});
		}

		// Logged in.
		update(response.data);

		return toast({
			title: "Bienvenido",
			description: "Te has registrado con éxito",
		});
	};

	return (
		<form
			method="post"
			className="w-full space-y-6"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="space-y-4">
				<TextField
					id="fullName"
					labelProps={{
						children: "Nombre completo",
					}}
					inputProps={{
						placeholder: "ej: John Doe",
						autoComplete: "name",
						type: "text",
						...register("fullName"),
					}}
					errorMessage={errors.fullName?.message}
				/>

				<TextField
					id="email"
					labelProps={{
						children: "Email",
					}}
					inputProps={{
						placeholder: "ej: johndoe@gmail.com",
						autoComplete: "email",
						type: "email",
						...register("email"),
					}}
					errorMessage={errors.email?.message}
				/>

				<Controller
					control={control}
					name="password"
					render={({ field }) => {
						return (
							<PasswordField
								id="password"
								labelProps={{
									children: "Contraseña",
								}}
								inputProps={{
									autoComplete: "new-password",
									value: field.value,
									onChange: field.onChange,
								}}
								errorMessage={errors.password?.message}
								showRequirements
							/>
						);
					}}
				/>
			</div>

			<Button className="w-full" disabled={isSubmitting}>
				{isSubmitting ? (
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
				) : null}

				<span>Registrarse</span>
			</Button>
		</form>
	);
}
