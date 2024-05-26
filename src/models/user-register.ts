import { z } from "zod";

export const UserRegister = z.object({
	email: z
		.string()
		.email("Debe ingresar un email con el formato nombre@ejemplo.com")
		.min(1, "Debe ingresar un email")
		.min(4, "Debe ingresar un email mayor o igual a 4 caracteres"),
	password: z
		.string()
		.min(1, "Debe ingresar una contraseña")
		.min(6, "Debe ingresar una contraseña mayor o igual a 6 caracteres")
		.max(50, "Debe ingresar una contraseña menor o igual a 50 caracteres")
		.refine(
			(value) => /[A-Z]{1,}/.test(value),
			"Debe contener al menos una letra mayúscula",
		)
		.refine(
			(value) => /[a-z]{1,}/.test(value),
			"Debe contener al menos una letra minúscula",
		)
		.refine(
			(value) => /[0-9]{1,}/.test(value),
			"Debe contener al menos un número",
		),
	fullName: z
		.string()
		.min(1, "Debe ingresar su nombre completo")
		.min(2, "Debe ingresar un nombre mayor o igual a 2 caracteres")
		.max(50, "Debe ingresar un nombre menor o igual a 50 caracteres"),
});

export type UserRegisterType = z.infer<typeof UserRegister>;
