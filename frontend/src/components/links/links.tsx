import React from "react";
import LinkPages from "./pages";
import VideoPlayer from "./video";

type LinkDisplayProps = {
	link: {
		top: number;
		left: number;
		href: string;
		type: string;
	}[];
};

// Maybe use the mouseOver to launch a dynamic link, like a gif or something like that

const LinkDisplay: React.FC<LinkDisplayProps> = ({
	link,
}: LinkDisplayProps) => {
	const displayType = (
		top: number,
		left: number,
		href: string,
		type: string,
		index: number
	) => {
		switch (type) {
			case "image":
				return (
					<img
						src={href}
						alt={"house"}
						style={{ position: "absolute", top, left, width: 300, height: 300 }}
						id="mouse_over"
						key={`${index}_${href}`}
					/>
				);
			case "link":
				return (
					<LinkPages
						// className="link"
						// href={href}
						style={{ top, left, position: "absolute", width: 300, height: 300 }}
						url={"https://fr.wikipedia.org/wiki/%C3%89chafaudage"}
						title={"Échafaudage — Wikipédia"}
						image={
							"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2512-%C3%A9chafaudage-R%C3%A9union.jpg/1200px-2512-%C3%A9chafaudage-R%C3%A9union.jpg"
						}
						id="mouse_over"
						key={`${index}_${href}`}
					/>
				);
			case "player":
				return (
					<VideoPlayer
						className="link"
						url={href}
						style={{ position: "absolute", top, left }}
						id="mouse_over"
						key={`${index}_${href}`}
					/>
				);
			default:
				return <p>Oops</p>;
		}
	};

	const list = link.map((element, index) => {
		return (
			// <a
			// 	className="link"
			// 	style={{ top: element.top, left: element.left }}
			// 	//cool and simple
			// 	id="mouse_over"
			// 	key={`${index}_${element.href}`}
			// 	href={element.href}
			// >
			// 	OK or an Emoji?
			// </a>
			displayType(element.top, element.left, element.href, element.type, index)
		);
	});

	return <div>{list}</div>;
};

export default LinkDisplay;
