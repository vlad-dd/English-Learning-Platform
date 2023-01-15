import React from 'react';

type ImageProps = {
    url: string
    height?: string
    width?: string
    marginLeft?: string
    className?: string
    configurations: any
}

const Image: React.FC<any> = ({ url, height, width, className, configurations }) => {
  return (
    <React.Fragment>
        <img src={url} height={height} width={width} className={className} {...configurations} />
    </React.Fragment>
  );
};

export default Image;