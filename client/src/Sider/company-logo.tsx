import React from "react";
import { Image } from "../Сommon";
import companyLogo from "../white.svg";
import blackLogo from "../black.svg";

const CompanyLogo = ({ defaultTheme }: { defaultTheme: boolean }) => {
  return defaultTheme ? (
    <Image url={blackLogo} styles={{ height: "100px", width: "180px", marginLeft: "10.3px"}} />
  ) : (
    <Image url={companyLogo} styles={{ height: "100px", width: "180px", marginLeft: "10.3px"}} />
  );
};

export default CompanyLogo;
