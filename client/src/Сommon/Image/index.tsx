import React from "react";

const Image: React.FC<{ id?: string, url: string, styles?: { [key: string]: string } }> = ({ id, url, styles }) => {
  return <img data-testid={id ?? ''} src={url} style={styles} />;
};

export default Image;
