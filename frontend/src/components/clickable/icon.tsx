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
		<img
			src={image}
			// className="z-30 overflow-hidden max-w-xs max-h-xs object-left-bottom"
			className="z-30"
      id="icon"
			style={{
				top: `${top}%`,
				left: `${left}%`,
				cursor: "touch",
				position: "relative",
				width: "20px",
				height: "20px",
			}}
			onPointerDown={switchButton}
			onClick={switchButton}
			alt="icon-textile"
		/>
	);
};

export default Icon;
