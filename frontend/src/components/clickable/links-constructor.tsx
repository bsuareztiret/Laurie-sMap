import React, { useState } from "react";
import Icon from "./icon";
import Card from "./card";
import RED from "../../img/red-dot-icon.png";

type LinksConstructorProps = {
	top: number;
	left: number;
	image: string;
	type: string;
	index: number;
};

const LinksConstructor: React.FC<LinksConstructorProps> = ({
	top,
	left,
	image,
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
				<Icon image={RED} top={top} left={left} switchButton={switchButton} />
			)}
			{button && (
				<Card
					type={type}
					image={image}
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
