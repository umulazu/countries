import { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map";
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import esriConfig from "@arcgis/core/config.js";

import "./MapContainer.css";
 
// esriConfig.apiKey = process.env.ARCGIS_API_KEY as string;

type MapContainerProps = {
  capitalCoordinates: [number, number]
}

const MapContainer = ({capitalCoordinates}: MapContainerProps) => {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const map = new Map({
        basemap: "arcgis-topographic" // Basemap layer service
      });

      const view = new MapView({
        container: mapDiv.current,
        center: capitalCoordinates,
        map: map,
      });
      
      /**
       * Initialize application
       */
      // const webmap = new WebMap({
      //   portalItem: {
      //     id: "aa1d3f80270146208328cf66d022e09c"
      //   }
      // });

      // const view = new MapView({
      //   container: mapDiv.current,
      //   map: webmap
      // });

      // const bookmarks = new Bookmarks({
      //   view,
      //   // allows bookmarks to be added, edited, or deleted
      //   editingEnabled: true
      // });

      // const bkExpand = new Expand({
      //   view,
      //   content: bookmarks,
      //   expanded: true
      // });

      // // Add the widget to the top-right corner of the view
      // view.ui.add(bkExpand, "top-right");

      // bonus - how many bookmarks in the webmap?
      // webmap.when(() => {
      //   if (webmap.bookmarks && webmap.bookmarks.length) {
      //     console.log("Bookmarks: ", webmap.bookmarks.length);
      //   } else {
      //     console.log("No bookmarks in this webmap.");
      //   }
      // });
    }
  }, []);

  return <div className="map-container" ref={mapDiv}></div>;
}

export default MapContainer;