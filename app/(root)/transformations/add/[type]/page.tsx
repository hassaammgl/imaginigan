"use client";

import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";

const AddTransformationType = ({ params: { type } }: { SearchParamProps }) => {
	const transformation = transformationTypes[type as string];

	return (
		<>
			<Header
				title={transformation.title}
				subtitle={transformation.subTitle}
			/>
			<TransformationForm action="Add" />
		</>
	);
};

export default AddTransformationType;
