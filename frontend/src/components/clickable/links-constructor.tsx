import React, { useState } from "react";
import Icon from "./icon";
import Card from "./card";
import icon from "../../img/icon.jpg";

type LinksConstructorProps = {
	top: number;
	left: number;
	image: string;
	href: string;
	type: string;
	index: number;
};

const LinksConstructor: React.FC<LinksConstructorProps> = ({
	top,
	left,
	image,
	href,
	type,
	index,
}) => {
	const [button, setButton] = useState(false);

	const switchButton = () => {
		setButton(!button);
	};
	return (
		<React.Fragment>
			{!button && (
				<Icon image={icon} top={top} left={left} switchButton={switchButton} />
			)}
			{button && (
				<Card
					type={type}
					image={image}
					href={href}
					top={top}
					left={left}
					switchButton={switchButton}
					index={index}
				/>
			)}
		</React.Fragment>
	);
};

export default LinksConstructor;
