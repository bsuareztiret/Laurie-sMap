import React, { useState } from "react";
import redDot from "./img/red-dot-icon.png";
import Map from "./components/map_scaling/map";
import switchScalingBackground from "./components/switch-background";

const App: React.FunctionComponent = () => {
	const [loading, setLoading] = useState(false);

	return (
		<div className="bg-gray-800">
			{loading && (
				<img src={redDot} alt="loading" onClick={() => setLoading(!loading)} />
			)}
			{!loading && <Map />}
		</div>
	);
};

export default App;
