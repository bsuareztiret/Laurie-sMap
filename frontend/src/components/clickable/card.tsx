import React from "react";
import "./card.css";

type CardProps = {
	type: string;
	image: string;
	href: string;
	top: number;
	left: number;
	index: number;
	display: string;
	switchButton: () => void;
};

const Card: React.FunctionComponent<CardProps> = ({
	image,
	href,
	top,
	left,
	display,
	switchButton,
}) => {
	return (
		<div
			className={`z-40 ${display}`}
			style={{
				top: `${top}%`,
				left: `${left}%`,
				position: "relative",
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
				<img
					src={image}
					alt="preview google maps"
					onClick={() => window.open(href, '_blank')}
					onPointerDown={() => window.open(href, '_blank')}
				/>
		</div>
	);
};

export default Card;
