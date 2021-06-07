import React from "react";
import LinksConstructor from "../clickable/links-constructor";

type LinksDisplayProps = {
	link: {
		top: number;
		left: number;
		href: string;
		image: string;
		floor: number;
		type: string;
	}[];
	floor: number;
};

// Maybe use the mouseOver to launch a dynamic link, like a gif or something like that

const LinksDisplay: React.FC<LinksDisplayProps> = ({
	link,
	floor,
}: LinksDisplayProps) => {
	const list = link.map((element, index) => {
		if (floor === element.floor) {
			return (
				<div style={{ position: "absolute", width: "100%", height: "100%" }}>
					<LinksConstructor
						top={element.top}
						left={element.left}
						image={element.image}
						href={element.href}
						type={element.type}
						index={index}
					/>
				</div>
			);
		}
		return null;
	});

	return <div>{list}</div>;
};

export default LinksDisplay;
