import { useSelector } from 'react-redux';
import { useQuery } from "@apollo/client";
import { useParams } from 'react-router';
import * as selectors from '../../store/selectors'
import { GET_GRAMMAR_BY_LEVEL_AND_THEME } from "../graphql";

export const useGrammarConfigWidget = () => {
    const { path } = useSelector(selectors.tensesBCState);
    const { level, theme } = useParams();

    const { data, loading, error, refetch } = useQuery(GET_GRAMMAR_BY_LEVEL_AND_THEME, { variables: { level: path.at(1) ?? level, theme: path.at(0) ?? theme } });

    return { data, isLoading: loading, error, refetch }
}