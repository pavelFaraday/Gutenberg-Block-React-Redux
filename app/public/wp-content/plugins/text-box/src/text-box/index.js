import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	icon: {
		src: "text-page",
		foreground: "blue",
		background: "light-gray",
	},
	variations: [
		{
			name: "create-block/gradient-text-box",
			title: "Gradient Text Box",
			description: "A text box with rounded corners.",
			icon: {
				src: "admin-customizer",
				background: "#f0f0f0",
				foreground: "#0073aa",
			},
			attributes: {
				gradient: "red-to-blue",
			},
		},
	],
	edit: Edit,
	save,
});
