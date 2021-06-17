import React, { useEffect } from "react";

import LinksDisplay from "../links/links-display";
import Scaling from "./scaling";
import linkArray from "../../input/linksArray";

const Map: React.FunctionComponent = () => {
	const linksArray: any[] = [];
	useEffect(() => {
		for (let index = 0; index <= 3; index++) {
			// console.log("floor", index);
			linksArray.push(<LinksDisplay link={linkArray} floor={index} />);
		}
	});

	return <Scaling links={linksArray} />;
};

export default Map;
