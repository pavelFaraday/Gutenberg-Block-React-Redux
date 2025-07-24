import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";
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
			<InspectorControls>
				<PanelBody
					title={__("Text Settings", "text-box")}
					icon="admin-appearance"
					initialOpen={true}
				>
					<label htmlFor="text-box-alignment">
						{__("Text Alignment", "text-box")}
					</label>
					<select
						id="text-box-alignment"
						value={alignment}
						onChange={(e) => onChangeAlignment(e.target.value)}
					>
						<option value="left">{__("Left", "text-box")}</option>
						<option value="center">{__("Center", "text-box")}</option>
						<option value="right">{__("Right", "text-box")}</option>
					</select>

					<TextControl
						label={__("Text", "text-box")}
						value={text}
						onChange={onChangeText}
						placeholder={__("Your Text", "text-box")}
					/>
					<ToggleControl
						label={__("Enable Background Color", "text-box")}
						checked={attributes.enableBackgroundColor}
						onChange={(value) =>
							setAttributes({ enableBackgroundColor: value })
						}
					/>
				</PanelBody>
			</InspectorControls>
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
