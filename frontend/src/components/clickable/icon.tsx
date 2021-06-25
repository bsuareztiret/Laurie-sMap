import React from "react";
import "./icon.css";

type IconProps = {
	image: string;
	top: number;
	left: number;
	switchButton: () => void;
};

const Icon: React.FunctionComponent<IconProps> = ({
	image,
	top,
	left,
	switchButton,
}) => {
	return (
		<div
			className={"z-30 icon show"}
			style={{
				top: `${top}%`,
				left: `${left}%`,
				cursor: "touch",
				position: "relative",
				width: "20px",
				height: "20px",
			}}
		>
		<img
			src={image}
			// className={`z-30 ${display}`}
			// style={{
			// 	top: `${top}%`,
			// 	left: `${left}%`,
			// 	cursor: "touch",
			// 	position: "relative",
			// 	// width: "20px",
			// 	// height: "20px",
			// }}
			onPointerDown={switchButton}
			onClick={switchButton}
			alt="icon-textile"
		/>
		</div>
	);
};

export default Icon;
