import React, { useState } from "react";
import switchScalingBackground from "../switch-background";
import images from "../../input/imagesNames";
import Card from "../card/card";
import redDot from "../../img/red-dot-icon.png";
import house from "../../img/maison1.png";

type TestProp = {
	state: {
		value: {
			scale: number;
			translation: {
				x: number;
				y: number;
			};
		};
	};
	links: {
		links: any;
	};
};

const TestComponent: React.FunctionComponent<{ style: any }> = ({ style }) => {
	const [button, setButton] = useState(false);

	const switchButton = () => {
		setButton(!button);
	};
	return (
		// <div style={style}>
		<div>
			<div style={style}>
				{!button && (
					<img
						src={redDot}
						className="z-40 bg-gray-25 rounded overflow-hidden shadow-md max-w-xs max-h-xs opacity-20"
						style={{
							top: "50%",
							left: "50%",
							position: "relative",
							width: "10%",
							height: "10%",
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
							zIndex: 40,
							top: "50%",
							left: "50%",
							position: "relative",
							width: "10%",
							height: "10%",
						}}
						component={
							<img
								src={house}
								// style={{ width: 300, height: 150 }}
								alt={"house"}
								key={`${1}_${house}`}
							/>
						}
					/>
				)}
			</div>
			<div style={style}>
				{/* <div> */}
				{!button && (
					<img
						src={redDot}
						className="z-40 bg-gray-25 rounded overflow-hidden shadow-md max-w-xs max-h-xs opacity-20"
						style={{
							top: "10%",
							left: "20%",
							position: "relative",
							width: "10%",
							height: "10%",
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
							zIndex: 40,
							top: "75%",
							left: "20%",
							position: "relative",
							width: "10%",
							height: "10%",
						}}
						component={
							<img
								src={house}
								// style={{ width: 300, height: 150 }}
								alt={"house"}
								key={`${1}_${house}`}
							/>
						}
					/>
				)}
			</div>
		</div>
	);
};

const Test: React.FunctionComponent<TestProp> = ({ state, links }) => {
	const findFloor = () => {
		const index = switchScalingBackground({
			scale: state.value.scale,
			length: images.length,
		});
		return index;
	};

	return (
		<div>
			{/* {links.links[findFloor()]} */}
			<TestComponent
				style={{ position: "absolute", width: "100%", height: "100%" }}
			/>
			<img src={images[findFloor()]} className="image" alt="test" />
		</div>
	);
};

export default Test;
