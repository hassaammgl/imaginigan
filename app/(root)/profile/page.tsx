"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";

const Profile = () => {
	const { user } = useUser();

	if (!user) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			{/* // Profile: // <div>User: {user.firstName}</div>
			// <div>Full Name: {user.fullName}</div>
			// <div>Email: {user.emailAddresses[0].emailAddress}</div>
			// <div>Email: {user.id}</div>
			// <div>Email: {user.imageUrl}</div>
			// <img src={user.imageUrl} alt="" /> */}
		</div>
	);
};

export default Profile;
