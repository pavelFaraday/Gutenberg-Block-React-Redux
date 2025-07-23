import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
} from "@wordpress/block-editor";
import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu as DropdownMenu,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;
	return (
		<>
			<BlockControls group="block">
				<p>BC</p>
			</BlockControls>
			<BlockControls group="inline">
				<p>IC</p>
			</BlockControls>
			<BlockControls
				group="other"
				controls={[
					{
						title: __("Button 1", "text-box"),
						icon: "admin-generic",
						isActive: true,
						onClick: () => console.log("Button 1 clicked"),
					},
					{
						title: __("Button 2", "text-box"),
						icon: "admin-collapse",
						isActive: false,
						onClick: () => console.log("Button 2 clicked"),
					},
				]}
			>
				{text && (
					<ToolbarGroup>
						<ToolbarButton
							title={__("Align left", "text-box")}
							icon="editor-alignleft"
							onClick={() => console.log("Alignleft clicked")}
						/>
						<ToolbarButton
							title={__("Align Center", "text-box")}
							icon="editor-aligncenter"
							onClick={() => console.log("Aligncenter clicked")}
						/>
						<ToolbarButton
							title={__("Align Right", "text-box")}
							icon="editor-alignright"
							onClick={() => console.log("Alignright clicked")}
						/>
						<DropdownMenu
							icon="arrow-down-alt2"
							label={__("More Alignments", "text-box")}
							controls={[
								{
									title: __("Align Wide", "text-box"),
									icon: "align-wide",
									onClick: () => console.log("Align-Wide clicked"),
								},
								{
									title: __("Align Full", "text-box"),
									icon: "align-full-width",
									onClick: () => console.log("Align-Full clicked"),
								},
							]}
						/>
					</ToolbarGroup>
				)}
				<ToolbarGroup>
					<p>Group 2</p>
				</ToolbarGroup>
			</BlockControls>

			<RichText
				{...useBlockProps()}
				placeholder={__("Your Text", "text-box")}
				tagName="h1"
				value={text}
				onChange={(value) => setAttributes({ text: value })}
				// allowedFormats={["core/bold", "core/italic"]}
			/>
		</>
	);
}
