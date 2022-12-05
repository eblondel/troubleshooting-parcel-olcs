console.log('Hello world!');

import 'ol/ol.css';
import Map from 'ol/Map';
import OLCesium from 'olcs/OLCesium.js';

const ol2dMap = new Map({id: "map", target : "map"});

const ol3d = new OLCesium({map: ol2dMap}); // ol2dMap is the ol.Map instance
ol3d.setEnabled(true);
