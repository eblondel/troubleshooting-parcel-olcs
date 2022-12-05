console.log('Hello world!');

import 'ol/ol.css';
import Map from 'ol/Map';
import OLCesium from 'ol-cesium/src/olcs/OLCesium.js';

import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';

const ol2dMap = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

const ol3d = new OLCesium({map: ol2dMap}); // ol2dMap is the ol.Map instance
ol3d.setEnabled(true);
