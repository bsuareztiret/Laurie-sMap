import React, { useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
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
		setAppears(!button);
		setTimeout(() => {
			setButton(!button);
		}, 300);
	};
	return (
		<React.Fragment>
			<ReactCSSTransitionGroup
				transitionName="fade"
				transitionEnterTimeout={300}
				transitionLeaveTimeout={300}
			>
				{!button && !appears && (
					<Icon image={icon} top={top} left={left} switchButton={switchButton} />
				)}
				{button && appears && (
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
			</ReactCSSTransitionGroup>
		</React.Fragment>
	);
};

export default LinksConstructor;
