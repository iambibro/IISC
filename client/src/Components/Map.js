import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlicmF0YSIsImEiOiJjbGo1dTllZnQwZmxkM2NxeXkzam04b3pzIn0.SXV-_PEvaOm0zN1CKg953Q';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(78.9629);
    const [lat, setLat] = useState(21.5937);
    const [zoom, setZoom] = useState(3.5);

    useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/bibrata/clj5vgeml003f01qz06218tq6',
      center: [lng, lat],
      zoom: zoom
    });
    });
    useEffect(() => {
      if (!map.current) return; // wait for map to initialize
      map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
      });
    });

    var marker = new mapboxgl.Marker();
    
  
    function add_marker (event) {
      var coordinates = event.lngLat;
      var popup = new mapboxgl.Popup().setText(`longitude:${coordinates.lng}, latitude:${coordinates.lat}`);
      console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
      marker.setLngLat(coordinates).setPopup(popup).addTo(map.current);
    }
    if(map.current){
          map.current.on('click', add_marker);
    }

    return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

