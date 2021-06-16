import { useState } from "react";
import { MapInteractionCSS } from "react-map-interaction";
import switchScalingBackground from "../links/switch-background";
import background from "../../img/backgroundG.jpg";

  const Scaling = (links) => {
  const [state, setState] = useState({value: {scale: 0.5, translation: {x:213, y:70}}});
  const [scale, setScale] = useState(0);
  const [maxX, setMaxX] = useState(1100);
  const [minX, setMinX] = useState(800);
  const [maxY, setMaxY] = useState(1000);
  const [minY, setMinY] = useState(500);

  const scaleUp = () => {
    console.log("Le scale UP", scale);
    // setMaxX(maxX * 1.3)
    // setMaxY(maxY * 1.3)
    setMaxX(maxX * 1.5)
    setMaxY(maxY * 1.5)
    // go check this for the perfect range
    // setMinX(minX * 1.58)
    // setMinY(minY * 2.08)
    setMinX(minX * 2.10)
    setMinY(minY * 2.10)
    console.log(`MaxX: ${maxX} MinX: ${minX}`);
    console.log(`MaxY: ${maxY} MinY: ${minY}`);

    setScale(scale + 1);
  }

  const scaleDown = () => {
    console.log("Le scale DOWN", scale);
    setMaxX(maxX / 1.5)
    setMaxY(maxY / 1.5)
    // setMaxX(maxX / 1.3)
    // setMaxY(maxY / 1.3)
    // go check this for the perfect range
    // setMinX(minX / 1.58)
    // setMinY(minY / 2.08)
    setMinX(minX / 2.1)
    setMinY(minY / 2.1)
    console.log(`MaxX: ${maxX} MinX: ${minX}`);
    console.log(`MaxY: ${maxY} MinY: ${minY}`);

    setScale(scale - 1);
  }

  const setUpLimit = (value) => {
    if (scale === 0 && value.scale >= 1.4) {
      scaleUp();
    } else if (scale === 1 && value.scale >= 2) {
      scaleUp();
    }

    if (scale === 2 && value.scale < 2) {
      scaleDown();
    } else if (scale === 1 && value.scale < 1.5) {
      scaleDown();
    }

    setState({ value });
  }

  const findFloor = () => {
    // const index = switchScalingBackground({scale: state.value.scale, length: images.length});
    
    // const index = switchScalingBackground({scale: state.value.scale, length: 2});
    if (state.value.scale >= 0.7 && state.value.scale < 0.85) {
      console.log("floor: ", 0);
      return 0;
    } else if (state.value.scale >= 0.85 && state.value.scale < 1) {
      console.log("floor: ", 1);
      return 1;
    } else if (state.value.scale >= 1 && state.value.scale < 1.15) {
      console.log("floor: ", 2);
      return 2;
    } else if (state.value.scale >= 1.15) {
      console.log("floor: ", 3);
      return 3;
    } else {
      return 666;
    }
  }

  return (
    <MapInteractionCSS
      value={state.value}
      className="grid grid-colone-2"
      onChange={(value) => setUpLimit(value)}
      translationBounds={{ xMin: -minX, xMax: maxX, yMin: -minY, yMax: maxY}}
    >
			{/* <p className="text-black">{`SCALE: ${state.value.scale}, X: ${state.value.translation.x}, Y: ${state.value.translation.y}`}</p> */}
        {links.links[findFloor()]}
				<img src={background} alt="test" />
			{/* <p className="text-black">{`SCALE: ${state.value.scale}, X: ${state.value.translation.x}, Y: ${state.value.translation.y}`}</p> */}
    </MapInteractionCSS>
  )
}

export default Scaling;