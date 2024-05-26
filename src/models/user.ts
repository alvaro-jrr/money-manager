import { z } from "zod";

export const User = z.object({
	id: z.string(),
	email: z.string(),
	fullname: z.string(),
});

export type UserType = z.infer<typeof User>;
