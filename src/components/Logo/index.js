import React from 'react';

const Logo = ({homeUrl,imgSrc, imgAlt}) => {
    return(
        <a className="brand" href={homeUrl}><img src={imgSrc} alt={imgAlt} /></a>
    )
}

export default Logo;