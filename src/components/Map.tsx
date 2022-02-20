import React, { useEffect, useRef, useState } from "react"
import { renderToString } from 'react-dom/server'
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl';
import { MapEvent } from "../constants/MapData";

type Props = {
  marker: MapEvent | null
}
mapboxgl.accessToken = 'pk.eyJ1IjoiZGxpbngiLCJhIjoiY2t6dGJqM3owMDZjaTMxcDhrODRreDR3NyJ9.XC3V0Ob8SrflIVpM6wS4kQ';

const MapContainer = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

export const Map: React.FC<Props> = (props) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map>();
  const [marker, setMarker] = useState<mapboxgl.Marker>()
  const [popup, setPopup] = useState<mapboxgl.Popup>()

  useEffect(() => {
    if (marker && props.marker) {
      const [lng, lat] = props.marker?.geometry.coordinates
      marker.setLngLat({
        lat,
        lng
      });
      popup?.setHTML(`
        <div>
        <h3>
          ${renderToString(props.marker.properties.icon)}
          ${props.marker.properties.title}
          </h3>
          <p>${props.marker.properties.description}</p>
        </div>
      `)

      map?.setCenter({ lat, lng })
        .setZoom(10);
      if (!marker.getPopup().isOpen())
        marker.togglePopup();
    }
  }, [props.marker]);

  useEffect(() => {
    if (mapContainer && mapContainer.current) {
      const m = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: {
          lat: 33.588268,
          lng: 130.420557,
        },
        zoom: 10
      });
      const popup = new mapboxgl.Popup({ offset: 25 }).setText('');
      setPopup(popup);
      const marker = new mapboxgl.Marker().setLngLat({
        lat: 33.588268,
        lng: 130.420557,
      })
        .setPopup(popup)
        .addTo(m);
      setMarker(marker);
      setMap(m);
    }
  }, [mapContainer]);

  return <MapContainer ref={mapContainer}
    className="map-container">
  </MapContainer>
}