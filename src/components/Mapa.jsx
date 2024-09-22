import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Icon } from 'ol/style';

const Mapa = () => {
  useEffect(() => {
    const coordinates = fromLonLat([-100.3698, 18.69557]);

    const marker = new Feature({
      geometry: new Point(coordinates),
    });

    marker.setStyle(new Style({
      image: new Icon({
        src: '/img/icon_marker.png',
        scale: 1,
      }),
    }));

    const vectorSource = new VectorSource({
      features: [marker],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: coordinates,
        zoom: 18,
      }),
    });

    // Manejar el clic en el marcador
    map.on('singleclick', (event) => {
      const feature = map.forEachFeatureAtPixel(event.pixel, (feature) => feature);
      if (feature) {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${18.69557},${-100.3698}`;
        window.open(url, '_blank'); // Abre en una nueva pestaña
      }
    });
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default Mapa;