import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;
	return (
		<RichText
			{...useBlockProps()}
			placeholder={__("Your Text", "text-box")}
			tagName="h1"
			value={text}
			onChange={(value) => setAttributes({ text: value })}
			allowedFormats={["core/bold", "core/italic"]}
		/>
	);
}
