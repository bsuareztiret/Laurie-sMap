import React, { useState } from "react";
import { MapInteractionCSS } from "react-map-interaction";
import MemoizedLinkDisplay from "./links/links";
import switchImages from "./switchImages";
import images from "../input/imagesNames";
import links from "../input/linksArray"; 

  const Map = () => {
  const [state, setState] = useState({value: {scale: 0.2, translation: {x:0, y:0}}});
  const [scale, setScale] = useState(0);
  const [maxX, setMaxX] = useState(2353);
  const [minX, setMinX] = useState(2353);
  const [maxY, setMaxY] = useState(2353);
  const [minY, setMinY] = useState(2353);

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

  return (
    <MapInteractionCSS
      value={state.value}
      onChange={(value) => setUpLimit(value)}
      translationBounds={{ xMin: -minX, xMax: maxX, yMin: -minY, yMax: maxY}}
    >
			{/* <p>{`SCALE: ${state.value.scale}, X: ${state.value.translation.x}, Y: ${state.value.translation.y}`}</p> */}
      {/* FIXME: probleme quand tu zoom au max, tous disparait,
        si la balise header n'est pas la,
        alors on ne peut revenir en arrièe..  */}
      <header className="App-header">
        <MemoizedLinkDisplay link={links} />
				<img src={images[switchImages({scale: state.value.scale, length: images.length})]} className="image" alt="test" />
			</header>
    </MapInteractionCSS>
  )
}

export default Map;