import React, { useEffect, useRef, useState } from "react"
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

  useEffect(() => {
    if (marker && props.marker) {
      const [lng, lat] = props.marker?.geometry.coordinates
      marker.setLngLat({
        lat,
        lng
      });
      map?.setCenter({ lat, lng });
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
        zoom: 12
      });

      const marker = new mapboxgl.Marker().setLngLat({
        lat: 33.588268,
        lng: 130.420557,
      }).addTo(m)
      setMarker(marker);
      setMap(m);
    }
  }, [mapContainer]);

  return <MapContainer ref={mapContainer}
    className="map-container">
  </MapContainer>
}