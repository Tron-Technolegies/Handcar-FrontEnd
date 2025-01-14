import React, { useRef, useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Latitude and Longitude
    const latitude = 10.5480192;
    const longitude = 76.201984;

    // Convert to Web Mercator projection
    const center = fromLonLat([longitude, latitude]);

    // Create a marker feature
    const marker = new Feature({
      geometry: new Point(center),
    });

    // Style for the marker
    const markerStyle = new Style({
      image: new Icon({
        src: "https://cdn-icons-png.flaticon.com/512/854/854878.png", // Example marker icon
        scale: 0.05, // Scale the icon to an appropriate size
      }),
    });
    marker.setStyle(markerStyle);

    // Create a vector source and layer for the marker
    const vectorSource = new VectorSource({
      features: [marker],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    // Create the map
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({ source: new OSM() }),
        vectorLayer, // Add the marker layer
      ],
      view: new View({
        center: center, // Center the map
        zoom: 12, // Adjust zoom level
      }),
    });

    return () => map.setTarget(null);
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default MapComponent;
