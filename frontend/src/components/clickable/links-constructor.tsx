import React, { useState } from "react";
import Icon from "./icon";
import Card from "./card";
import "./card.css";

type LinksConstructorProps = {
	top: number;
	left: number;
	image: string;
	icon: string;
	href: string;
	type: string;
	index: number;
};

const LinksConstructor: React.FC<LinksConstructorProps> = ({
	top,
	left,
	image,
	icon,
	href,
	type,
	index,
}) => {
	const [button, setButton] = useState(false);
	const [appears, setAppears] = useState(false);

	const switchButton = () => {
		setButton(!button);
		setTimeout(() => {
			setAppears(!button);
		}, 300);
	};
	return (
		<React.Fragment>
				{!button && (
					<Icon image={icon} top={top} left={left} switchButton={switchButton} />
				)}
				{button && appears && (<Card
					type={type}
					image={image}
					href={href}
					top={top}
					left={left}
					display={button ? "preview show" : "preview"}
					switchButton={switchButton}
					index={index}
				/>
				)}
		</React.Fragment>
	);
};

export default LinksConstructor;
