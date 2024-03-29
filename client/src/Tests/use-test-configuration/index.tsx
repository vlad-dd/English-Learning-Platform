import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import * as selectors from '../../store/selectors'
import { GET_TEST_CONFIGURATION } from "../graphql";

const useTestConfigurationWidget = () => {
    const { path }: { path: Array<string> } = useSelector(selectors.tensesBCState)
    const { part, theme } = useParams();

    const { data, loading, error } = useQuery(GET_TEST_CONFIGURATION, { variables: { part: path.at(1) ?? part, theme: path.at(0) ?? theme } });

    return { data, isLoading: loading, error };
}

export { useTestConfigurationWidget };
