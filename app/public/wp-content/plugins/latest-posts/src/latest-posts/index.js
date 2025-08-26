import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";

// Optional simple Edit so it shows something in the editor
import ServerSideRender from "@wordpress/server-side-render";
import { useBlockProps } from "@wordpress/block-editor";

function Edit(props) {
	return (
		<div {...useBlockProps()}>
			<ServerSideRender block={metadata.name} attributes={props.attributes} />
		</div>
	);
}

// Dynamic block: no save output (handled by PHP)
registerBlockType(metadata.name, {
	edit: Edit,
	save: () => null,
});
