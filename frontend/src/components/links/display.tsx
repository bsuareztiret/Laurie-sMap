import React, { useState } from "react";
import LinkPages from "./pages";
import VideoPlayer from "./video";
import redDot from "../../img/red-dot-icon.png";

type DisplayTypeProps = {
	top: number;
	left: number;
	href: string;
	type: string;
	index: number;
};

const DisplayType: React.FunctionComponent<DisplayTypeProps> = ({
	top,
	left,
	href,
	type,
	index,
}) => {
	const [button, setButton] = useState(false);

	switch (type) {
		case "image":
			return (
				<div>
					{!button && (
						<img
							src={redDot}
							style={{ position: "absolute", top, left, width: 50, height: 50 }}
							onClick={() => setButton(!button)}
							alt="red-dot"
						/>
					)}
					{button && (
						<img
							onClick={() => setButton(!button)}
							src={href}
							alt={"house"}
							style={{ position: "absolute", top, left, width: 300, height: 300 }}
							id="mouse_over"
							key={`${index}_${href}`}
						/>
					)}
				</div>
			);
		case "link":
			return (
				<div>
					{!button && (
						<img
							src={redDot}
							style={{ position: "absolute", top, left, width: 50, height: 50 }}
							onClick={() => setButton(!button)}
							alt="red-dot"
						/>
					)}
					{button && (
						<div onClick={() => setButton(!button)}>
							<LinkPages
								style={{ top, left, position: "absolute", width: 300, height: 300 }}
								url={"https://fr.wikipedia.org/wiki/%C3%89chafaudage"}
								title={"Échafaudage — Wikipédia"}
								image={
									"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2512-%C3%A9chafaudage-R%C3%A9union.jpg/1200px-2512-%C3%A9chafaudage-R%C3%A9union.jpg"
								}
								id="mouse_over"
								key={`${index}_${href}`}
							/>
						</div>
					)}
				</div>
			);
		case "player":
			return (
				<div>
					{!button && (
						<img
							src={redDot}
							style={{ position: "absolute", top, left, width: 50, height: 50 }}
							onClick={() => setButton(!button)}
							alt="red-dot"
						/>
					)}
					{button && (
						<div
							className="border-2 border-red-900"
							style={{ position: "absolute", top, left }}
							onClick={() => setButton(!button)}
						>
							<VideoPlayer
								className="link"
								url={href}
								style={{ top: 0, left: 0 }}
								id="mouse_over"
								key={`${index}_${href}`}
							/>
						</div>
					)}
				</div>
			);
		default:
			return <p>Oops</p>;
	}
};

export default DisplayType;
