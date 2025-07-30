import { useEffect, useState } from "@wordpress/element";
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { isBlobURL, revokeBlobURL } from "@wordpress/blob";
import { Spinner, withNotices } from "@wordpress/components";

function Edit({ attributes, setAttributes, noticeUI, noticeOperations }) {
	const { name, bio, url, alt, id } = attributes;
	const [blobURL, setBlobURL] = useState();

	const onChangeName = (newName) => {
		setAttributes({ name: newName });
	};
	const onChangeBio = (newBio) => {
		setAttributes({ bio: newBio });
	};

	const onSelectImage = (image) => {
		if (!image || !image.url) {
			setAttributes({ url: undefined, id: undefined, alt: "" });
			return;
		}
		setAttributes({ url: image.url, id: image.id, alt: image.alt });
	};
	const onSelectURL = (newURL) => {
		setAttributes({ url: newURL, id: undefined, alt: "" });
	};

	const onUploadError = (message) => {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice(message);
	};
	useEffect(() => {
		if (!id && isBlobURL(url)) {
			// If the URL is a blob URL, we need to clear the ID and alt text.
			setAttributes({ url: undefined, alt: "" });
		}
	}, []);

	useEffect(() => {
		if (isBlobURL(url)) {
			// If the URL is a blob URL, we need to create a blob URL.
			setBlobURL(url);
		} else {
			revokeBlobURL(blobURL);
			setBlobURL(undefined);
		}
	}, [url]);

	return (
		<div {...useBlockProps()}>
			{url && (
				<div
					className={`wp-block-blocks-course-team-member-img${
						isBlobURL(url) ? " is-loading" : ""
					}`}
				>
					<img src={url} alt={alt} />
					{isBlobURL(url) && <Spinner />}
				</div>
			)}
			<MediaPlaceholder
				icon={"admin-users"}
				onSelect={onSelectImage}
				onSelectURL={onSelectURL}
				onError={onUploadError}
				accept="image/*"
				allowedTypes={["image"]}
				disableMediaButtons={url}
				notices={noticeUI}
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

export default withNotices(Edit);
