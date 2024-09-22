// src/components/MapComponent.jsx
import React, { useState } from 'react';
import { Map, Marker } from 'pigeon-maps';

const MapComponent = () => {


  return (
    <Map
      height={400}
      defaultCenter={[18.696713, -100.369824]}
      defaultZoom={15}
    >
      <Marker
        width={30}
        anchor={[18.696713, -100.369824]}
        offset={[0, -10]}
      />
    </Map>
  );
};

export default MapComponent;
