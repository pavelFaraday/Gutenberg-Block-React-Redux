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
	},
	edit: Edit,
	save: Save,
});
