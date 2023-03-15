import { LazyLoadImage } from "react-lazy-load-image-component";

// import { lazy } from "react";

import "react-lazy-load-image-component/src/effects/blur.css";

function Image({ imgSrc, classes, alt = "" }) {
  return (
    <LazyLoadImage src={imgSrc} className={classes} alt={alt} effect="blur" />
    // <LazyLoadImage
    //   loading="lazy"
    //   src={imgSrc}
    //   alt={alt}
    //   placeholder={imgSrc}
    //   className={classes}
    //   effect="blur"
    // />
  );
}

export default Image;
