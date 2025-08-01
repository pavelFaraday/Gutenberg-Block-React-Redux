import { useBlockProps, RichText } from "@wordpress/block-editor";
import { Icon } from "@wordpress/components";

export default function Save({ attributes }) {
	const { name, bio, url, alt, id, socialLinks } = attributes;
	return (
		<div {...useBlockProps.save()}>
			{url && (
				<div className="wp-block-blocks-course-team-member-img">
					<img src={url} alt={alt} className={id ? `wp-image-${id}` : null} />
				</div>
			)}
			{name && <RichText.Content tagName="h4" value={name} />}
			{bio && <RichText.Content tagName="p" value={bio} />}
			{socialLinks.length > 0 && (
				<div className="wp-block-blocks-course-team-member-social-links">
					<ul>
						{socialLinks.map((item, index) => {
							return (
								<li key={index}>
									<a href={item.link}>
										<span className={`dashicons dashicons-${item.icon}`}></span>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
}
