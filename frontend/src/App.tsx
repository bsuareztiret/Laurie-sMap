import React from "react";
import Map from "./components/map_scaling/map";

const App: React.FunctionComponent = () => {
	return (
		<div style={{ backgroundColor: "#f2f0ed", width: 2048, height: 1448 }}>
			<Map />
		</div>
	);
};

export default App;
