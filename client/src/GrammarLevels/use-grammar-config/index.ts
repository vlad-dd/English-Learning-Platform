import { useSelector } from 'react-redux';
import { useQuery } from "@apollo/client";
import * as selectors from '../../store/selectors'
import { GET_GRAMMAR_BY_LEVEL_AND_THEME } from "../graphql";
import { compact } from 'lodash';

export const useGrammarConfigWidget = () => {
    const { path } = useSelector(selectors.tensesBCState);
    const windowPath = compact(window?.location?.pathname.split('/'));
    console.log('requestConfig: ', path)
    console.log('windowPath: ', windowPath)
    const { data, loading, error, refetch } = useQuery(GET_GRAMMAR_BY_LEVEL_AND_THEME, { variables: { level: path[1] ?? windowPath[1], theme: path[0] ?? windowPath[2] } });

    return { data, isLoading: loading, error, refetch }
}