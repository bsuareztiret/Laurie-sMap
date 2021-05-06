import React from "react";
import Map from "./components/map";
import "./App.css";

const App: React.FunctionComponent = () => {
	// const [state, setState] = useState({
	// 	value: { scale: 1, translation: { x: 0, y: 0 } },
	// });
	// console.log(switchImages({ scale: 3, length: imagesPath.length }));

	return (
		<div className="App">
			<Map />
		</div>
	);
};

export default App;
