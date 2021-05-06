import React from "react";

type LinkPagesProps = {
	style: any;
	title: string;
	url: string;
	id: string;
	image: string;
	key: string;
};

const CardLink: React.FunctionComponent<{
	title: string;
	image: string;
	id: string;
	style: any;
}> = ({ title, image, style, id }) => {
	return (
		<div className="bg-grey p-10 rounded-lg shadow-md" style={style} id={id}>
			<h1 className="text-xl font-bold">{title}</h1>
			<img
				src={image}
				alt={title}
				style={{ width: style.width, height: style.height }}
			/>
		</div>
	);
};

const LinkPages: React.FunctionComponent<LinkPagesProps> = ({
	style,
	title,
	url,
	id,
	image,
	key,
}: LinkPagesProps) => {
	return <CardLink title={title} image={image} style={style} id={id} />;
};

export default LinkPages;
