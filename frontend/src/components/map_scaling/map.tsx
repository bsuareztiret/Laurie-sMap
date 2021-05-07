import React, { useEffect } from "react";

import LinksMap from "../links/links";
import Scaling from "./scaling";
import linkArray from "../../input/linksArray";
import Card from "../card/card";
import SplitCard from "../card/split";

const Map: React.FunctionComponent = () => {
	// const [something, setSomething] = useState(true);
	const linksArray: any[] = [];
	useEffect(() => {
		for (let index = 0; index <= 1; index++) {
			linksArray.push(<LinksMap link={linkArray} floor={index} />);
		}
	});

	return <Scaling links={linksArray} />;
};

export default Map;
