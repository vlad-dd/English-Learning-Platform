import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../Сommon";
import companyLogo from "../white.svg";
import blackLogo from "../black.svg";

const CompanyLogo = ({ defaultTheme }: { defaultTheme: boolean }) => {
  return defaultTheme ? (
   <Link to="/"><Image url={blackLogo} styles={{ height: "100px", width: "180px", marginLeft: "10.3px"}} /></Link>
  ) : (
    <Link to="/"><Image url={companyLogo} styles={{ height: "100px", width: "180px", marginLeft: "10.3px"}} /></Link>
  );
};

export default CompanyLogo;
