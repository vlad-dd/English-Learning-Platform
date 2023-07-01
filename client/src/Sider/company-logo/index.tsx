import { Link } from "react-router-dom";
import { Image } from "../../Сommon";
import companyLogo from "../../icons/white.svg";
import { APPLICATION_NAVIGATION } from "../../Сommon/constants";
import { COMPANY_LOGO_DATA_TEST_ID } from "../constants";

const CompanyLogo = () => {
  return (
    <Link to={APPLICATION_NAVIGATION.HOME}>
      <Image 
        id={COMPANY_LOGO_DATA_TEST_ID}
        url={companyLogo} 
        styles={{ height: "100px", width: "180px", marginLeft: "10.3px" }} 
        />
    </Link>
  )
};

export default CompanyLogo;
