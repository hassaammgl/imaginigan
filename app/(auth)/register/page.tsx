"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";
import axios from "axios";

const page = () => {
	const { user } = useUser();

	if (!user) {
		return <div>Loading...</div>;
	}

	const createUser = async () => {
		const response = await axios.post("/api/webhooks/clerk", {
			clerkId: user.id,
			email: user.emailAddresses[0].emailAddress,
			username: user.username,
			firstName: user.firstName,
			lastName: user.lastName,
			photo: user.imageUrl,
		});
		// console.log(response);
		if (response.status === 200) {
		}
	};

	createUser();

	return (
		<div>
			Profile:
			<div>User: {user.firstName}</div>
			<div>Full Name: {user.fullName}</div>
			<div>Email: {user.emailAddresses[0].emailAddress}</div>
			<div>Email: {user.id}</div>
			<div>Email: {user.imageUrl}</div>
			<img src={user.imageUrl} className="w-8 h-8" alt="" />
		</div>
	);
};

export default page;
