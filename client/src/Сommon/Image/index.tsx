import React from "react";
import { ImageProps } from "../types";

const Image: React.FC<ImageProps> = ({ id, url, styles }) => {
  return <img data-testid={id ?? ''} src={url} style={styles} />;
};

export default Image;
