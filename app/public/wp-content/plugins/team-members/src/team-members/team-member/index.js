import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import Save from "./save";

registerBlockType("create-block/team-member", {
	title: "Team Member",
	description: "A team member item",
	icon: "admin-users",
	parent: ["create-block/team-members"],
	supports: {
		html: false,
		reusable: false,
	},
	attributes: {
		name: {
			type: "string",
			source: "html",
			selector: "h4",
		},
		bio: {
			type: "string",
			source: "html",
			selector: "p",
		},
		id: {
			type: "number",
		},
		alt: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "alt",
			default: "",
		},
		url: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "src",
		},
		socialLinks: {
			type: "array",
			default: [
				{
					link: "https://facebook.com",
					icon: "facebook",
				},
				{
					link: "https://instagram.com",
					icon: "instagram",
				},
			],
		},
	},
	edit: Edit,
	save: Save,
});
