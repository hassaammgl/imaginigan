import { NextResponse } from "next/server";
import { createUser } from "@/lib/actions/user.actions";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(request: Request) {
	try {
		const { clerkId, email, username, firstName, lastName, photo } =
			await request.json();

		console.log({
			clerkId,
			email,
			username,
			firstName,
			lastName,
			photo,
		});

		const user = {
			clerkId,
			email,
			username,
			firstName,
			lastName,
			photo,
		};

		const newUser = await createUser(user);

		const client = await clerkClient();

		await client.users.updateUserMetadata(clerkId, {
			publicMetadata: {
				id: newUser._id,
			},
		});

		const updatedUser = await client.users.getUser(clerkId);

		console.log(updatedUser.publicMetadata.id);

		return NextResponse.json({ user: newUser._id }, { status: 200 });
	} catch (error) {}
}
