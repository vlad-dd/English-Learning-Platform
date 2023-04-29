import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ErrorDefinitionWarning, ErrorDefinitonWrapper } from "../../styled";


const NotFoundURLErrorDefiniton = ({ error }: any) => {
    return (
        <ErrorDefinitonWrapper>
            <ErrorDefinitionWarning>UH OH! You have got into the trouble!</ErrorDefinitionWarning>
            <p>{error}</p>
            <Link to="/"><Button style={{ border: "1px solid purple", color: "white", width: "8vw" }}>HOME</Button></Link>
        </ErrorDefinitonWrapper>
    )
}

export default NotFoundURLErrorDefiniton;