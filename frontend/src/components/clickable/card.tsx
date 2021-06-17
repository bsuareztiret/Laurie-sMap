import React from "react";
import "./card.css";

type CardProps = {
	type: string;
	image: string;
	href: string;
	top: number;
	left: number;
	index: number;
	switchButton: () => void;
};

const Card: React.FunctionComponent<CardProps> = ({
	image,
	href,
	top,
	left,
	switchButton,
}) => {
	return (
		<div
			className="z-40 overflow-hidden max-w-xs max-h-xs preview"
			style={{
				top: `${top}%`,
				left: `${left}%`,
				position: "relative",
				// width: "12%",
				// height: "10%",
			}}
		>
			<button
				className="text-black"
				style={{
					position: "absolute",
					top: "-10.5px",
					right: "1px",
				}}
				onPointerDown={switchButton}
				onClick={switchButton}
			>
				⨯
			</button>
			<a
				className="col-start-8 text-gray-400"
				href={href}
				target="_blank"
				rel="noreferrer"
			>
				<img src={image} alt="preview google maps" />
			</a>
		</div>
	);
};

export default Card;
