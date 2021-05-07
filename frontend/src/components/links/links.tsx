import React from "react";
import DisplayType from "./display2";

type LinkDisplayProps = {
	link: {
		top: number;
		left: number;
		href: string;
		floor: number;
		type: string;
	}[];
	floor: number;
};

// Maybe use the mouseOver to launch a dynamic link, like a gif or something like that

const LinkDisplay: React.FC<LinkDisplayProps> = ({
	link,
	floor,
}: LinkDisplayProps) => {
	const list = link.map((element, index) => {
		if (floor === element.floor) {
			return (
				<DisplayType
					top={element.top}
					left={element.left}
					href={element.href}
					type={element.type}
					index={index}
				/>
			);
		}
		return null;
	});

	return <div>{list}</div>;
};

export default LinkDisplay;
