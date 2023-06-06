import { Link } from "react-router-dom";
import { Image } from "../../Сommon";
import companyLogo from "../../icons/white.svg";

const CompanyLogo = () => {
  return (
    <Link to="/">
      <Image 
        id="company-logo" 
        url={companyLogo} 
        styles={{ height: "100px", width: "180px", marginLeft: "10.3px" }} 
        />
    </Link>
  )
};

export default CompanyLogo;
