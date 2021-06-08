import React from "react";

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
	type,
	image,
	href,
	top,
	left,
	switchButton,
	index,
}) => {
	return (
		<div
			className="z-40 overflow-hidden max-w-xs max-h-xs"
			style={{
				top: `${top}%`,
				left: `${left}%`,
				position: "relative",
				width: "12%",
				height: "10%",
				minHeight: 150,
			}}
		>
			<button
				className="text-red-400"
				style={{
					position: "absolute",
					top: "1px",
					right: "8px",
				}}
				onPointerDown={switchButton}
				onClick={switchButton}
			>
				x
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
