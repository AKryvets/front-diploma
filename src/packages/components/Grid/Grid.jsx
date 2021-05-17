import React, { PureComponent } from 'react';
import { Layer, Rect, Stage } from 'react-konva';
import Konva from 'konva';
import PropTypes from 'prop-types';

import {
  createFillGradient,
  getHorizontalLines,
  getStyles,
  getVerticalLines,
} from './logic';
import { CustomLine } from './components';

const alphaStopsLine = [
  {
    stop: 0,
    alpha: 0,
  },
  {
    stop: 0.2,
    alpha: 0.05,
  },
  {
    stop: 0.5,
    alpha: 0.3,
  },
  {
    stop: 1.0,
    alpha: 1.0,
  },
];

const alphaStopsBackgroundLine = [
  {
    stop: 0,
    alpha: 0,
  },
  {
    stop: 0.2,
    alpha: 0.01,
  },
  {
    stop: 0.5,
    alpha: 0.02,
  },
  {
    stop: 1.0,
    alpha: 0.1,
  },
];

export class Grid extends PureComponent {
  constructor(props) {
    super(props);

    this.layerRef = React.createRef();
    this.isVisible = true;
    this.animation = null;
    this.lastLinePoints = null;
    this.firstLinePoints = null;
    this.horizontalLineRefs = [];
    this.strokeBackgroundWidth =
      props.strokeWidth * props.strokeBackgroundWidthCoefficient;
    this.lastLinePointsBackground = null;
    this.firstLinePointsBackground = null;
  }

  componentDidMount() {
    document.addEventListener('visibilitychange', this.toggleAnimation, false);
    document.addEventListener(
      'msvisibilitychange',
      this.toggleAnimation,
      false
    );
    document.addEventListener(
      'webkitvisibilitychange',
      this.toggleAnimation,
      false
    );

    this.createAnimation();
  }

  componentDidUpdate() {
    this.createAnimation();
  }

  // eslint-disable-next-line react/sort-comp
  createAnimation = () => {
    const { createNegativeSpeedAnimation, createPositiveSpeedAnimation } = this;
    const { horizontalSpeed } = this.props;

    if (
      !horizontalSpeed ||
      !this.horizontalLineRefs.length ||
      !this.isVisible
    ) {
      return;
    }

    if (!this.horizontalLineRefs[0].current) {
      return;
    }

    // eslint-disable-next-line no-unused-expressions
    this.animation && this.animation.stop();
    this.animation =
      // eslint-disable-next-line no-unused-expressions,no-nested-ternary
      horizontalSpeed > 0
        ? createPositiveSpeedAnimation()
        : horizontalSpeed < 0
        ? createNegativeSpeedAnimation()
        : null;
    // eslint-disable-next-line no-unused-expressions
    this.animation && this.animation.start();
  };

  createNegativeSpeedAnimation = () => {
    const { layerRef, negativeAnimationLines } = this;

    return new Konva.Animation(negativeAnimationLines, layerRef.current);
  };

  createPositiveSpeedAnimation = () => {
    const { layerRef, positiveAnimationLines } = this;

    return new Konva.Animation(positiveAnimationLines, layerRef.current);
  };

  // eslint-disable-next-line no-unused-vars
  negativeAnimationLines = (frame) => {
    const { dy, stepY, height, strokeWidth } = this.props;

    this.horizontalLineRefs.forEach((line) => {
      if (!line.current) {
        return;
      }

      const limitHeight = line.current.attrs.isBackgroundLine
        ? height + (stepY - dy) - (this.strokeBackgroundWidth - strokeWidth) / 2
        : height + (stepY - dy);

      if (line.current.attrs.points[1] >= limitHeight) {
        // eslint-disable-next-line no-param-reassign
        line.current.attrs.points = line.current.attrs.isBackgroundLine
          ? [...this.lastLinePointsBackground]
          : [...this.lastLinePoints];
      }

      this.setPointsOffset(line);
    });
  };

  // eslint-disable-next-line no-unused-vars
  positiveAnimationLines = (frame) => {
    const { dy, stepY, strokeWidth } = this.props;

    this.horizontalLineRefs.forEach((line) => {
      if (!line.current) {
        return;
      }

      const limitHeight = line.current.attrs.isBackgroundLine
        ? 0 - (stepY - dy) - (this.strokeBackgroundWidth - strokeWidth) / 2
        : 0 - (stepY - dy);

      if (line.current.attrs.points[1] <= limitHeight) {
        // eslint-disable-next-line no-param-reassign
        line.current.attrs.points = line.current.attrs.isBackgroundLine
          ? [...this.firstLinePointsBackground]
          : [...this.firstLinePoints];
      }

      this.setPointsOffset(line);
    });
  };

  setPointsOffset = (line) => {
    const { horizontalSpeed } = this.props;

    const { points } = line.current.attrs;
    const y = points[1] - horizontalSpeed;
    const y2 = points[7] - horizontalSpeed;
    // eslint-disable-next-line no-param-reassign
    line.current.attrs.points = [
      points[0],
      y,
      points[2],
      y,
      points[4],
      y2,
      points[6],
      y2,
    ];
  };

  toggleAnimation = () => {
    this.isVisible = document.visibilityState === 'visible';

    if (this.isVisible) {
      // eslint-disable-next-line no-unused-expressions
      this.animation && this.animation.start();
    } else {
      // eslint-disable-next-line no-unused-expressions
      this.animation && this.animation.stop();
    }
  };

  componentWillUnmount() {
    // eslint-disable-next-line no-unused-expressions
    this.animation && this.animation.stop();

    document.removeEventListener(
      'visibilitychange',
      this.toggleAnimation,
      false
    );
    document.removeEventListener(
      'msvisibilitychange',
      this.toggleAnimation,
      false
    );
    document.removeEventListener(
      'webkitvisibilitychange',
      this.toggleAnimation,
      false
    );

    // eslint-disable-next-line no-unused-expressions
    this.horizontalLineRefs.length &&
      this.horizontalLineRefs.forEach((line) => {
        line.current.destroy();
      });
  }

  render() {
    const {
      width,
      height,
      lineColor,
      backgroundColor,
      isBlurAnimation,
      isBackgroundLine,
    } = this.props;

    const fillLine = createFillGradient(
      Konva.Util.getRGB(lineColor),
      alphaStopsLine
    );
    const fillBackground = createFillGradient(
      Konva.Util.getRGB(backgroundColor),
      alphaStopsBackgroundLine
    );
    const fillBackgroundLine = createFillGradient(
      Konva.Util.getRGB(lineColor),
      alphaStopsBackgroundLine
    );
    const startColorLine = isBlurAnimation ? fillBackground : fillLine;
    const startColorBackgroundLine = isBlurAnimation
      ? fillBackground
      : fillBackgroundLine;
    const verticalLines = [
      ...getVerticalLines({
        ...this.props,
        fillLinearGradientColorStops: startColorLine,
      }),
    ];
    const horizontalLines = [
      ...getHorizontalLines({
        ...this.props,
        fillLinearGradientColorStops: startColorLine,
      }),
    ];
    const verticalBackgroundLines = isBackgroundLine
      ? [
          ...getVerticalLines({
            ...this.props,
            strokeWidth: this.strokeBackgroundWidth,
            fillLinearGradientColorStops: startColorBackgroundLine,
          }),
        ]
      : [];
    const horizontalBackgroundLines = isBackgroundLine
      ? [
          ...getHorizontalLines({
            ...this.props,
            strokeWidth: this.strokeBackgroundWidth,
            fillLinearGradientColorStops: startColorBackgroundLine,
          }),
        ]
      : [];
    const styles = getStyles(width, height, backgroundColor);
    const { stageStyles, backgroundStyles } = styles;

    this.horizontalLineRefs = [];

    return (
      <Stage {...stageStyles}>
        <Layer ref={this.layerRef} hitGraphEnabled={false}>
          <Rect {...backgroundStyles} />
          {verticalLines.map((lineProps, index) => {
            const lineRef = React.createRef();

            return (
              <CustomLine
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                lineRef={lineRef}
                gradient={fillLine}
                isBackgroundLine={false}
                {...lineProps}
              />
            );
          })}
          {verticalBackgroundLines.map((lineProps, index) => {
            const lineRef = React.createRef();

            return (
              <CustomLine
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                lineRef={lineRef}
                gradient={fillBackgroundLine}
                isBackgroundLine
                {...lineProps}
              />
            );
          })}
          {horizontalLines.map((lineProps, index, array) => {
            const lineRef = React.createRef();
            this.horizontalLineRefs.push(lineRef);
            // eslint-disable-next-line no-unused-expressions
            !index && (this.firstLinePoints = [...lineProps.points]);
            // eslint-disable-next-line no-unused-expressions
            index === array.length - 1 &&
              (this.lastLinePoints = [...lineProps.points]);

            return (
              <CustomLine
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                lineRef={lineRef}
                gradient={fillLine}
                isBackgroundLine={false}
                {...lineProps}
              />
            );
          })}
          {horizontalBackgroundLines.map((lineProps, index, array) => {
            const lineRef = React.createRef();
            this.horizontalLineRefs.push(lineRef);
            // eslint-disable-next-line no-unused-expressions
            !index && (this.firstLinePointsBackground = [...lineProps.points]);
            // eslint-disable-next-line no-unused-expressions
            index === array.length - 1 &&
              (this.lastLinePointsBackground = [...lineProps.points]);

            return (
              <CustomLine
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                lineRef={lineRef}
                gradient={fillBackgroundLine}
                isBackgroundLine
                {...lineProps}
              />
            );
          })}
        </Layer>
      </Stage>
    );
  }
}

Grid.propTypes = {
  dx: PropTypes.number,
  dy: PropTypes.number,
  stepX: PropTypes.number,
  stepY: PropTypes.number,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  lineColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  verticalSpeed: PropTypes.number,
  backgroundColor: PropTypes.string,
  horizontalSpeed: PropTypes.number,
  isBlurAnimation: PropTypes.bool,
  isBackgroundLine: PropTypes.bool,
  strokeBackgroundWidthCoefficient: PropTypes.number,
};

Grid.defaultProps = {
  dx: 150,
  dy: 0,
  stepX: 70,
  stepY: 50,
  strokeWidth: 1,
  lineColor: 'rgb(114, 86, 23)',
  verticalSpeed: 0,
  horizontalSpeed: 0.25,
  backgroundColor: 'rgba(10, 26, 38, 0)',
  isBlurAnimation: false,
  isBackgroundLine: true,
  strokeBackgroundWidthCoefficient: 7,
};
