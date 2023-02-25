import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import * as selectors from "../../../store/selectors";
import { GET_TENSE } from "../../graphql";

export const useTenseConfiguration = () => {

  // We have two ways how to handle getting data by verb:
  // 1) If user clicked on menu option - from state
  // 2) If user has typed the url - by url

  const { path } = useSelector(selectors.tensesBCState);

  const windowLocation = window.location.pathname.split("/");

  const { data, loading, error } = useQuery(GET_TENSE, {
    variables: { tense: path[0] ?? windowLocation.at(-1) },
  });

  return { data, loading, error };
};
