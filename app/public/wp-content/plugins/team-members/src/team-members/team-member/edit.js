import { useEffect, useState, useRef } from "@wordpress/element";
import { usePrevious } from "@wordpress/compose";
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	MediaReplaceFlow,
	BlockControls,
	InspectorControls,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { isBlobURL, revokeBlobURL } from "@wordpress/blob";
import {
	Spinner,
	withNotices,
	ToolbarButton,
	PanelBody,
	TextareaControl,
	Icon,
	Tooltip,
	TextControl,
	Button,
} from "@wordpress/components";

function Edit({
	attributes,
	setAttributes,
	noticeUI,
	noticeOperations,
	isSelected,
}) {
	const { name, bio, url, alt, id, socialLinks } = attributes;

	const [blobURL, setBlobURL] = useState();
	const [selectedLink, setSelectedLink] = useState();
	const titleRef = useRef();
	const prevURL = usePrevious(url);
	const prevIsSelected = usePrevious(isSelected);

	const onChangeName = (newName) => {
		setAttributes({ name: newName });
	};
	const onChangeBio = (newBio) => {
		setAttributes({ bio: newBio });
	};
	const onChangeAlt = (newAlt) => {
		setAttributes({ alt: newAlt });
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
	const removeImage = () => {
		setAttributes({ url: undefined, id: undefined, alt: "" });
	};
	const onUploadError = (message) => {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice(message);
	};

	const addNewSocialItem = () => {
		setAttributes({
			socialLinks: [...socialLinks, { icon: "wordpress", link: "" }],
		});
		setSelectedLink(socialLinks.length);
	};

	const updateSocialItem = (type, value) => {
		const socialLinksCopy = [...socialLinks];
		socialLinksCopy[selectedLink][type] = value;
		setAttributes({ socialLinks: socialLinksCopy });
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
	useEffect(() => {
		if (url && !prevURL) {
			titleRef.current?.focus();
		}
	}, [url, prevURL]);
	useEffect(() => {
		if (!isSelected && prevIsSelected) {
			setSelectedLink();
		}
	}, [isSelected, prevIsSelected]);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Image Settings", "team-members")}>
					{url && !isBlobURL(url) && (
						<TextareaControl
							label={__("Alt text", "team-members")}
							value={alt}
							onChange={onChangeAlt}
							help={__(
								"Alternative text describes the image for people who can’t see it.",
								"team-members",
							)}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			{url && (
				<BlockControls group="inline">
					<MediaReplaceFlow
						name={__("Replace image", "team-members")}
						onSelect={onSelectImage}
						onSelectURL={onSelectURL}
						onError={onUploadError}
						accept="image/*"
						allowedTypes={["image"]}
						//----
						disableMediaButtons={!!url}
						mediaURL={url}
						mediaId={id}
						mediaAlt={alt}
					/>
					<ToolbarButton onClick={removeImage}>
						{__("Remove image", "team-members")}
					</ToolbarButton>
				</BlockControls>
			)}
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
					ref={titleRef}
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
				<div className="wp-block-blocks-course-team-member-social-links">
					<ul>
						{socialLinks.map((item, index) => (
							<li
								key={index}
								className={selectedLink === index ? "is-selected" : null}
							>
								<button
									aria-label={__("Edit Social Link", "team-members")}
									onClick={() => setSelectedLink(index)}
								>
									<Icon icon={item.icon} />
								</button>
							</li>
						))}
						{isSelected && (
							<li className="wp-block-blocks-course-team-member-add-icon-li">
								<Tooltip text={__("Add Social Link", "team-members")}>
									<button
										aria-label={__("Add Social Link", "team-members")}
										onClick={addNewSocialItem}
									>
										<Icon icon="plus" />
									</button>
								</Tooltip>
							</li>
						)}
					</ul>
				</div>

				{selectedLink !== undefined && socialLinks[selectedLink] && (
					<div className="wp-block-blocks-course-team-member-link-form">
						<TextControl
							label={__("Icon", "team-members")}
							value={socialLinks[selectedLink].icon}
							onChange={(icon) => updateSocialItem("icon", icon)}
						/>
						<TextControl
							label={__("URL", "team-members")}
							value={socialLinks[selectedLink].link}
							onChange={(link) => updateSocialItem("link", link)}
						/>
						<Button isDestructive>
							<Icon icon="trash" /> {__("Remove Link", "team-members")}
						</Button>
					</div>
				)}
			</div>
		</>
	);
}

export default withNotices(Edit);
