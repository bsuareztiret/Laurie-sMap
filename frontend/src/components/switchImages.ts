type SwitchImagesProps = {
	scale: number;
  length: number;
};

const switchImages = ({
	scale, length
}: SwitchImagesProps): number => {
	
  const refuge = 3 / length;
  const index = Math.floor(scale / refuge);

  // console.log(scale, length, refuge, index);

  return index;
};

export default switchImages;
