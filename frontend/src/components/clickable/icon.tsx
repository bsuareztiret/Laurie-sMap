import React from "react";

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
			className="z-30 bg-gray-25 rounded overflow-hidden shadow-md max-w-xs max-h-xs opacity-20 object-left-bottom"
			style={{
				top: `${top}%`,
				left: `${left}%`,
				cursor: "touch",
				position: "relative",
				width: "10%",
				height: "10%",
			}}
			onPointerDown={switchButton}
			onClick={switchButton}
			alt="red-dot"
		/>
	);
};

export default Icon;
