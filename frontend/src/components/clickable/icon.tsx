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
			className="z-30 overflow-hidden max-w-xs max-h-xs object-left-bottom"
			style={{
				top: `${top}%`,
				left: `${left}%`,
				cursor: "touch",
				position: "relative",
				width: "10px",
				height: "10px",
			}}
			onPointerDown={switchButton}
			onClick={switchButton}
			alt="red-dot"
		/>
	);
};

export default Icon;
