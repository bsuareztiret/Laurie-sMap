type switchScalingBackgroundProps = {
	scale: number;
  length: number;
};

const switchScalingBackground = ({
	scale, length
}: switchScalingBackgroundProps): number => {
	
  const refuge = 3 / length;
  const index = Math.floor(scale / refuge);

  if (index >= length) return length - 1;

  return index;
};

export default switchScalingBackground;
