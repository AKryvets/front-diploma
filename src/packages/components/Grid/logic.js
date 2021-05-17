export const getVerticalLines = (settings) => {
  const verticalLines = [];
  const {
    dx,
    stepX,
    width,
    height,
    strokeWidth,
    fillLinearGradientColorStops,
  } = settings;

  const nv = Math.ceil(width / stepX);
  const half = Math.floor(nv / 2);
  const startX = width / 2 - half * stepX;
  const strokeDelta = strokeWidth / 2;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < nv; i++) {
    const x = startX + i * stepX;
    const delta = dx * (half - i);

    const points = [
      x - strokeDelta - delta,
      height,
      x - strokeDelta,
      0,
      x + strokeDelta,
      0,
      x + strokeDelta - delta,
      height,
    ];

    verticalLines.push({
      points,
      closed: true,
      fillLinearGradientColorStops: [...fillLinearGradientColorStops],
      fillLinearGradientStartPoint: { x: x + strokeDelta, y: 0 },
      fillLinearGradientEndPoint: { x: x - delta - strokeDelta, y: height },
    });
  }

  return verticalLines;
};

export const getHorizontalLines = (settings) => {
  const horizontalLines = [];
  const {
    dy,
    stepY,
    width,
    height,
    strokeWidth,
    horizontalSpeed,
    fillLinearGradientColorStops,
  } = settings;

  const nh = Math.ceil(height / stepY) + 1;
  const isPositiveAnimation = horizontalSpeed > 0;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < nh; i++) {
    const y = isPositiveAnimation
      ? (stepY - dy) * i
      : height - (stepY - dy) * i;
    const points = [
      0,
      y - strokeWidth / 2,
      width,
      y - strokeWidth / 2,
      width,
      y + strokeWidth / 2,
      0,
      y + strokeWidth / 2,
    ];
    const line = {
      points,
      closed: true,
      fillLinearGradientColorStops: [...fillLinearGradientColorStops],
      fillLinearGradientStartPoint: { x: width, y: 0 },
      fillLinearGradientEndPoint: { x: width, y: height },
    };

    // eslint-disable-next-line no-unused-expressions
    isPositiveAnimation
      ? horizontalLines.unshift(line)
      : horizontalLines.push(line);
  }

  return horizontalLines;
};

export const getStyles = (width, height, backgroundColor) => ({
  stageStyles: {
    width,
    height,
  },
  backgroundStyles: {
    x: 0,
    y: 0,
    width,
    height,
    fill: backgroundColor,
  },
});

export const createRGBA = (rgb, alpha) =>
  typeof alpha === 'number'
    ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
    : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

export const createFillGradient = (rgb, colorStops) => {
  if (!rgb || !colorStops) {
    return null;
  }

  const fillGradient = [];

  colorStops.forEach((colorStop) => {
    fillGradient.push(colorStop.stop);
    fillGradient.push(createRGBA(rgb, colorStop.alpha));
  });

  return fillGradient;
};
