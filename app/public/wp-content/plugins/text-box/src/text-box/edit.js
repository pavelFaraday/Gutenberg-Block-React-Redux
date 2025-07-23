import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment } = attributes;
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};
	const onChangeAlignment = (newAlign) => {
		setAttributes({ alignment: newAlign });
	};
	return (
		<>
			<BlockControls group="block">
				<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
			</BlockControls>

			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
				})}
				placeholder={__("Your Text", "text-box")}
				tagName="h1"
				value={text}
				onChange={onChangeText}
				style={{ textAlign: alignment }}
				// allowedFormats={["core/bold", "core/italic"]}
			/>
		</>
	);
}
