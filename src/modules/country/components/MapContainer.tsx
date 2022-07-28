import { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import esriConfig from "@arcgis/core/config.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Point from '@arcgis/core/geometry/Point';

import "./MapContainer.css";

esriConfig.apiKey = process.env.REACT_APP_ARCGIS_API_KEY as string;

type MapContainerProps = {
  capitalCoordinates: [latitude: number, longitude: number];
};

const MapContainer = ({ capitalCoordinates }: MapContainerProps) => {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const map = new Map({
        basemap: "arcgis-topographic",
      });

      const centerPoint = new Point({
        latitude: capitalCoordinates[0],
        longitude: capitalCoordinates[1],
      });

      new MapView({
        container: mapDiv.current,
        center: centerPoint,
        map: map,
        zoom: 5,
      });

      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      const simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40], 
        outline: {
          color: [255, 255, 255],
          width: 1,
        },
      };

      const pointGraphic = new Graphic({
        geometry: centerPoint,
        symbol: simpleMarkerSymbol,
      });

      graphicsLayer.add(pointGraphic);
    }
  }, [capitalCoordinates]);

  return <div className="map-container" ref={mapDiv}></div>;
};

export default MapContainer;
