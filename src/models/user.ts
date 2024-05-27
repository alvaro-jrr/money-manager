import { z } from "zod";

export const User = z.object({
	id: z.number(),
	email: z.string(),
	fullName: z.string(),
});

export type UserType = z.infer<typeof User>;
