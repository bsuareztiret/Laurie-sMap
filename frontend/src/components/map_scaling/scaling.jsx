import React, { useState } from "react";
import { MapInteractionCSS } from "react-map-interaction";
import switchScalingBackground from "../switch-background";
import images from "../../input/imagesNames";
import Test from "./test";

  const Scaling = (links) => {
  const [state, setState] = useState({value: {scale: 0.5, translation: {x:300, y:150}}});
  const [scale, setScale] = useState(0);
  const [maxX, setMaxX] = useState(500);
  const [minX, setMinX] = useState(500);
  const [maxY, setMaxY] = useState(500);
  const [minY, setMinY] = useState(500);

  const scaleUp = () => {
    console.log("Le scale UP", scale);
    setMaxX(maxX * 1.3)
    setMaxY(maxY * 1.3)
    // go check this for the perfect range
    setMinX(minX * 1.58)
    setMinY(minY * 2.08)
    console.log(`MaxX: ${maxX} MinX: ${minX}`);
    console.log(`MaxY: ${maxY} MinY: ${minY}`);

    setScale(scale + 1);
  }

  const scaleDown = () => {
    console.log("Le scale DOWN", scale);
    setMaxX(maxX / 1.3)
    setMaxY(maxY / 1.3)
    // go check this for the perfect range
    setMinX(minX / 1.58)
    setMinY(minY / 2.08)
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
    const index = switchScalingBackground({scale: state.value.scale, length: images.length});
    return index;
  }

  return (
    <MapInteractionCSS
      value={state.value}
      className="grid grid-colone-2"
      onChange={(value) => setUpLimit(value)}
      translationBounds={{ xMin: -minX, xMax: maxX, yMin: -minY, yMax: maxY}}
    >
      <Test state={state} links={links}/>
			{/* <p>{`SCALE: ${state.value.scale}, X: ${state.value.translation.x}, Y: ${state.value.translation.y}`}</p> */}
        {/* {links.links[findFloor()]} */}
				{/* <img src={images[findFloor()]} className="image" alt="test" /> */}
			{/* <p>{`SCALE: ${state.value.scale}, X: ${state.value.translation.x}, Y: ${state.value.translation.y}`}</p> */}
    </MapInteractionCSS>
  )
}

export default Scaling;