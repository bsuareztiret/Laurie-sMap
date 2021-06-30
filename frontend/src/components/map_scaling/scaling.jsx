import { useState } from "react";
import { MapInteractionCSS } from "react-map-interaction";
// import background from "../../img/background.png";
// import background from "../../img/goodnow.png";
import background from "../../img/background.png";

  const Scaling = (links) => {
  const [state, setState] = useState({value: {scale: 0.5, translation: {x:213, y:70}}});
  const [scale, setScale] = useState(0);
  const [maxX, setMaxX] = useState(1200);
  const [minX, setMinX] = useState(1200);
  const [maxY, setMaxY] = useState(1200);
  const [minY, setMinY] = useState(1200);

  const scaleUp = () => {
    setMaxX(maxX * 1.5)
    setMaxY(maxY * 1.5)
    setMinX(minX * 2.10)
    setMinY(minY * 2.10)

    setScale(scale + 1);
  }

  const scaleDown = () => {
    setMaxX(maxX / 1.5)
    setMaxY(maxY / 1.5)
    setMinX(minX / 2.1)
    setMinY(minY / 2.1)

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
    if (state.value.scale >= 0.7 && state.value.scale < 0.85) {
      return 0;
    } else if (state.value.scale >= 0.85 && state.value.scale < 1) {
      return 1;
    } else if (state.value.scale >= 1 && state.value.scale < 1.15) {
      return 2;
    } else if (state.value.scale >= 1.15) {
      return 3;
    } else {
      return 666;
    }
  }

  return (
    <MapInteractionCSS
      value={state.value}
      // className="grid grid-colone-2"
      onChange={(value) => setUpLimit(value)}
      translationBounds={{ xMin: -minX, xMax: maxX, yMin: -minY, yMax: maxY}}
    >
        {links.links[findFloor()]}
				<img src={background} alt="test" />
    </MapInteractionCSS>
  )
}

export default Scaling;