import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import * as selectors from '../../store/selectors'
import { GET_TEST_CONFIGURATION } from "../graphql";
import { useParams } from "react-router";

const useTestConfigurationWidget = () => {
    const { path }: { path: Array<string> } = useSelector(selectors.tensesBCState)
    const { part, theme } = useParams();
    
    const { data, loading, error } = useQuery(GET_TEST_CONFIGURATION, { variables: { part: path[1] ?? part , theme: path[0] ?? theme} })

    return { data, isLoading: loading, error };
}

export { useTestConfigurationWidget };
