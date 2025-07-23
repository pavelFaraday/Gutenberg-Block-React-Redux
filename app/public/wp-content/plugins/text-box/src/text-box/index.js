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
	edit: Edit,
	save,
});
