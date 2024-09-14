import React from 'react';
import Image from 'astro:image';

function AstroImage({ src, alt, ...rest }) {
  return (
    <Image
      src={src}
      alt={alt}
      {...rest}
    />
  );
}

export default { AstroImage }