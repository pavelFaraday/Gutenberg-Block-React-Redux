import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={["create-block/team-member"]}
				template={[
					[
						"create-block/team-member",
						{
							name: "John Doe",
							position: "Developer",
						},
					],
					[
						"create-block/team-member",
						{
							name: "Jane Smith",
							position: "Designer",
						},
					],
				]}
				templateLock="all"
			/>
		</div>
	);
}
