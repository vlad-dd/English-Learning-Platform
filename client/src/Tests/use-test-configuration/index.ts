import { useQuery } from "@apollo/client";
import { compact } from "lodash";
import { useSelector } from "react-redux";
import * as selectors from '../../store/selectors'
import { GET_TEST_CONFIGURATION } from "../graphql";

const useTestConfiguration = () => {
    const { path }: { path: Array<string> } = useSelector(selectors.tensesBCState)
    const windowPath: Array<string> = compact(window?.location?.pathname.split('/'));
    
    const { data, loading, error } = useQuery(GET_TEST_CONFIGURATION, { variables: { part: path[1] ?? windowPath[1] , theme: path[0] ?? windowPath[2]} })

    return { data, isLoading: loading, error };
}

export { useTestConfiguration };
