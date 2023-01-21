import React from "react";

const Image: React.FC<{ url: string; styles?: { [key: string]: string } }> = ({ url, styles }) => {
  return <img src={url} style={styles} />;
};

export default Image;
