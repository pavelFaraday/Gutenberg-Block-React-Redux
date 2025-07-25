import { registerBlockType, createBlock } from "@wordpress/blocks";
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
	transforms: {
		from: [
			{
				type: "block",
				blocks: ["core/paragraph"],
				transform: ({ content, align }) => {
					return createBlock(metadata.name, {
						text: content,
						alignment: align,
					});
				},
			},
			{
				type: "enter",
				regExp: /textbox/i,
				transform: () => {
					return createBlock(metadata.name, {
						shadow: true,
						gradient: "red-to-blue",
					});
				},
			},
			{
				type: "prefix",
				prefix: "textbox",
				transform: () => {
					return createBlock(metadata.name);
				},
			},
		],
		to: [
			{
				type: "block",
				blocks: ["core/paragraph"],
				isMatch: ({ text }) => {
					return text ? true : false;
				},
				transform: ({ text, alignment }) => {
					return createBlock("core/paragraph", {
						content: text,
						align: alignment,
					});
				},
			},
		],
	},
	edit: Edit,
	save,
});
