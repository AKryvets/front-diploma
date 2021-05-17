import React, { PureComponent } from 'react';
import { Line } from 'react-konva';
import PropTypes from 'prop-types';

export class CustomLine extends PureComponent {
  componentDidMount() {
    const { lineRef, gradient } = this.props;

    // eslint-disable-next-line no-unused-expressions
    gradient &&
      lineRef.current.to({
        duration: 1,
        fillLinearGradientColorStops: [...gradient],
      });
  }

  componentDidUpdate() {
    const { lineRef, gradient } = this.props;

    // eslint-disable-next-line no-unused-expressions
    gradient &&
      lineRef.current.to({
        duration: 1,
        fillLinearGradientColorStops: [...gradient],
      });
  }

  render() {
    const {
      points,
      closed,
      lineRef,
      gradient,
      fillLinearGradientEndPoint,
      fillLinearGradientStartPoint,
      fillLinearGradientColorStops,
    } = this.props;

    const lineProps = {
      points,
      closed,
      gradient,
      listening: false,
      transformsEnabled: 'position',
      strokeScaleEnabled: false,
      perfectDrawEnabled: false,
      fillLinearGradientEndPoint,
      fillLinearGradientStartPoint,
      fillLinearGradientColorStops,
    };

    return <Line ref={lineRef} {...lineProps} />;
  }
}

CustomLine.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  points: PropTypes.array.isRequired,
  closed: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  lineRef: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  gradient: PropTypes.array,
  // eslint-disable-next-line react/forbid-prop-types
  fillLinearGradientEndPoint: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  fillLinearGradientStartPoint: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  fillLinearGradientColorStops: PropTypes.array.isRequired,
};
