import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
	const { name, bio } = attributes;
	const onChangeName = (newName) => {
		setAttributes({ name: newName });
	};
	const onChangeBio = (newBio) => {
		setAttributes({ bio: newBio });
	};

	return (
		<div {...useBlockProps()}>
			<MediaPlaceholder
				icon={"admin-users"}
				onSelect={() => {}}
				onSelectURL={() => {}}
				onError={() => {}}
				accept="image/*"
				allowedTypes={["image"]}
			/>
			<RichText
				tagName="h4"
				placeholder={__("Member name", "team-members")}
				value={name}
				onChange={onChangeName}
				allowedFormats={false}
			/>
			<RichText
				tagName="p"
				placeholder={__("Bio", "team-members")}
				value={bio}
				onChange={onChangeBio}
				allowedFormats={false}
			/>
		</div>
	);
}
