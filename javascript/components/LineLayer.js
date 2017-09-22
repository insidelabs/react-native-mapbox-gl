import React from 'react';
import PropTypes from 'prop-types';
import { NativeModules, requireNativeComponent } from 'react-native';

import { LineLayerStyleProp } from '../utils/styleMap';
import AbstractLayer from './AbstractLayer';

const MapboxGL = NativeModules.MGLModule;

export const NATIVE_MODULE_NAME = 'RCTMGLLineLayer';

const RCTMGLLineLayer = requireNativeComponent(NATIVE_MODULE_NAME, LineLayer);

/**
 * LineLayer is a style layer that renders one or more stroked polylines on the map.
 */
class LineLayer extends AbstractLayer {
  static propTypes = {
    /**
     * A string that uniquely identifies the source in the style to which it is added.
     */
    id: PropTypes.string,

    /**
     * The source from which to obtain the data to style.
     * If the source has not yet been added to the current style, the behavior is undefined.
     */
    sourceID: PropTypes.string,

    /**
     * Identifier of the layer within the source identified by the sourceID property from which the receiver obtains the data to style.
     */
    sourceLayerID: PropTypes.string,

    /**
     * Inserts a layer above aboveLayerID.
     */
    aboveLayerID: PropTypes.string,

    /**
     * Inserts a layer below belowLayerID
     */
    belowLayerID: PropTypes.string,

    /**
     * Inserts a layer at a specified index
     */
    layerIndex: PropTypes.number,

    /**
     *  Filter only the features in the source layer that satisfy a condition that you define
     */
    filter: PropTypes.array,

    /**
     * The minimum zoom level at which the layer gets parsed and appears.
     */
    minZoomLevel: PropTypes.number,

    /**
     * The maximum zoom level at which the layer gets parsed and appears.
     */
    maxZoomLevel: PropTypes.number,

    /**
     * Customizable style attributes
     */
    style: LineLayerStyleProp,
  };

  static defaultProps = {
    sourceID: MapboxGL.StyleSource.DefaultSourceID,
  };

  render () {
    const props = {
      ...this.baseProps,
      sourceLayerID: this.props.sourceLayerID,
    };
    return <RCTMGLLineLayer {...props} />;
  }
}

export default LineLayer;