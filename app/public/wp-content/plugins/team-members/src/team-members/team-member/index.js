import { registerBlockType } from "@wordpress/blocks";

registerBlockType("create-block/team-member", {
	title: "Team Member",
	description: "A team member item",
	icon: "admin-users",
	parent: ["create-block/team-members"],
	edit: () => <p>edit</p>,
	save: () => <p>save</p>,
});
