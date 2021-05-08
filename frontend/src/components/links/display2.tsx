import React, { useState } from "react";
import LinkPages from "./pages";
import VideoPlayer from "./video";
import redDot from "../../img/red-dot-icon.png";
import Card from "../card/card";

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

	const switchButton = () => {
		setButton(!button);
	};

	switch (type) {
		case "image":
			return (
				<div>
					{!button && (
						<img
							src={redDot}
							className="z-40 bg-gray-25 rounded overflow-hidden shadow-md max-w-xs max-h-xs opacity-20"
							style={{
								top: `${top % 100}%`,
								left: `${left % 100}%`,
								position: "relative",
							}}
							onClick={switchButton}
							alt="red-dot"
						/>
					)}
					{button && (
						<Card
							close={switchButton}
							link={"ok"}
							style={{ top: `${top % 100}%`, left: `${left % 100}%`, zIndex: 40 }}
							component={
								<img
									src={href}
									style={{ width: 300, height: 150 }}
									alt={"house"}
									id="mouse_over"
									key={`${index}_${href}`}
								/>
							}
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
							style={{
								top: `${top % 100}%`,
								left: `${left % 100}%`,
								position: "relative",
								width: 50,
								height: 50,
							}}
							onClick={switchButton}
							alt="red-dot"
						/>
					)}
					{button && (
						<Card
							close={switchButton}
							link={"ok"}
							style={{
								top: `${top % 100}%`,
								left: `${left % 100}%`,
								zIndex: 40,
							}}
							component={
								<LinkPages
									style={{}}
									url={"https://fr.wikipedia.org/wiki/%C3%89chafaudage"}
									title={"Échafaudage — Wikipédia"}
									image={
										"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2512-%C3%A9chafaudage-R%C3%A9union.jpg/1200px-2512-%C3%A9chafaudage-R%C3%A9union.jpg"
									}
									id="mouse_over"
									key={`${index}_${href}`}
								/>
							}
						/>
					)}
				</div>
			);
		case "player":
			return (
				<div>
					{!button && (
						<img
							src={redDot}
							style={{
								top: `${top % 100}%`,
								left: `${left % 100}%`,
								position: "relative",
								width: 50,
								height: 50,
							}}
							onClick={switchButton}
							alt="red-dot"
						/>
					)}
					{button && (
						<Card
							close={switchButton}
							link={"ok"}
							style={{
								top: `${top % 100}%`,
								left: `${left % 100}%`,
								position: "relative",
								zIndex: 40,
							}}
							component={
								<VideoPlayer
									className="link"
									url={href}
									width={300}
									height={150}
									style={{}}
									id="mouse_over"
									key={`${index}_${href}`}
								/>
							}
						/>
					)}
				</div>
			);
		default:
			return <p>Oops</p>;
	}
};

export default DisplayType;
