import React from "react";
import VideoPlayer from "./video";

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
			{/* <div className="m-4 grid grid-cols-8 gap-2" style={{ position: "relative" }}> */}
			<button
				className="col-start-7 text-gray-400"
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
				{">"}
			</a>
			{/* </div> */}
			{type === "image" && (
				// <img src={image} alt="ok" className="w-full h-32 sm:h-48 object-cover" />
				<img src={image} alt="ok" />
			)}
		</div>
	);
};

export default Card;
