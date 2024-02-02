import React from 'react';

const LazyImg = ({ classes, url }) => {
    return <img className={classes} src={url} loading="lazy" alt="Lazy-loaded" />;
};

export default LazyImg;