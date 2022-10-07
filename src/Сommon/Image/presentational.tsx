import React from 'react'

type ImageProps = {
    url: string
    height?: string
    width?: string
    marginLeft?: string
    className?: string
}

const Image: React.FC<ImageProps> = ({ url, height, width, marginLeft, className }) => {
  return (
    <React.Fragment>
        <img src={url} height={height} width={width} style={{marginLeft: marginLeft}} className={className} />
    </React.Fragment>
  );
};

export default Image;