import React from "react";
import VideoPlayer from "./video";

type CardProps = {
	type: string;
	image: string;
	top: number;
	left: number;
	index: number;
	switchButton: () => void;
};

const Card: React.FunctionComponent<CardProps> = ({
	type,
	image,
	top,
	left,
	switchButton,
	index,
}) => {
	return (
		<div
			className="z-40 bg-white rounded overflow-hidden shadow-md max-w-xs max-h-xs"
			style={{
				top: `${top}%`,
				left: `${left}%`,
				position: "relative",
				width: "100%",
				height: "27%",
				minHeight: 150,
			}}
		>
			<div className="m-4 grid grid-cols-8 gap-2" style={{ position: "relative" }}>
				<button
					className="col-start-7 border-b-2 border-gray-400 text-gray-400 rounded"
					onPointerDown={switchButton}
					onClick={switchButton}
				>
					x
				</button>
				<a
					className="col-start-8 border-b-2 border-gray-400 text-gray-400 rounded"
					href={image}
					target="_blank"
					rel="noreferrer"
				>
					{">"}
				</a>
			</div>
			{type === "player" && <VideoPlayer url={image} width={320} height={160} />}
			{type === "image" && (
				<img src={image} alt="ok" className="w-full h-32 sm:h-48 object-cover" />
			)}
			<div className="m-4">
				<span className="font-bold">TITRE</span>
				<span className="block text-sm text-gray-400">
					je suis la description de la carte, plus tard je parlerai soit d'un line
					wiki soit d'un lin youtube, soit d'une image
				</span>
			</div>
			{/* <div className="m-4 grid grid-cols-8 gap-2">
				<button
					className="col-start-7 border-b-2 border-gray-400 text-gray-400 rounded"
					onClick={switchButton}
				>
					x
				</button>
				<button className="col-start-8 border-b-2 border-gray-400 text-gray-400 rounded">
					{">"}
				</button>
			</div> */}
		</div>
	);
};

export default Card;
