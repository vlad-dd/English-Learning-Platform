import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import * as selectors from "../../../store/selectors";
import { GET_TENSE } from "../../graphql";

export const useTenseConfigurationWidget = () => {

  // We have two ways how to handle getting data by verb:
  // 1) If user clicked on menu option - from state
  // 2) If user has typed the url - by url

  const { tense } = useParams();
  const { path } = useSelector(selectors.tensesBCState);

  const { data, loading, error, refetch } = useQuery(GET_TENSE, {
    variables: { tense: path[0] ?? tense },
  });

  return { data, loading, error, refetch };
};
