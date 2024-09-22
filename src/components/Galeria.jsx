import React, { useEffect, useRef } from 'react';
import LightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import './Galeria.css';

const images = [
  {
    src: '/img/slide1.jpg',
  },
  {
    src: '/img/slide2.jpg',
  },
  {
    src: '/img/slide3.jpg',
  },
  {
    src: '/img/slide4.jpg',
  },
  {
    src: '/img/slide5.jpg',
  },
  {
    src: '/img/slide6.jpg',
  },
  {
    src: '/img/slide7.jpg',
  },
  {
    src: '/img/slide8.jpg',
  },
  {
    src: '/img/slide9.jpg',
  },
  {
    src: '/img/slide10.jpg',
  },
];

function Galeria() {
  const galleryRef = useRef();

  useEffect(() => {
    if (galleryRef.current) {
      LightGallery(galleryRef.current, {
        download: false,
        hideScrollbar: true,
        plugins: [lgThumbnail],
      });
    }
  }, [images]);

  return (
    <div ref={galleryRef} className="container-gallery">
      {images.map((image, index) => (
        <a href={image.src} key={index} className="image-gallery">
          <img src={image.src} alt="" />
        </a>
      ))}
    </div>
  );
}

export default Galeria;
