import { Document, model, models, Schema } from "mongoose";

export interface Image extends Document {
	title: string;
	transformationType: string;
	publicId: string;
	secureUrl: string;
	width?: number;
	height?: number;
	config?: object;
	transformationUrl?: string;
	aspectRatio?: string;
	color?: string;
	prompt?: string;
	createdAt?: Date;
	updatedAt?: Date;
	author: {
		_id: string;
		firstName: string;
		lastName: string;
	};
}

const ImageSchema = new Schema({
	title: {
		type: String,
		required: [true, "Title is required"],
	},
	transformationType: {
		type: String,
		required: [true, "Transformation type is required"],
	},
	publicId: {
		type: String,
		required: [true, "Public ID is required"],
	},
	secureUrl: {
		type: URL,
		required: [true, "Secure URL is required"],
	},
	width: {
		type: Number,
	},
	height: {
		type: Number,
	},
	config: {
		type: Object,
	},
	transformationUrl: {
		type: URL,
	},
	aspectRatio: {
		type: Schema.Types.ObjectId,
	},
	color: {
		type: String,
	},
	prompt: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
});
/******  60ec7b3e-3706-4579-b01d-1967d2fd92f7  *******/

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
