import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import * as selectors from "../../../store/selectors";
import { GET_TENSE } from "../../graphql";

export const useTenseConfiguration = () => {

  const { path } = useSelector(selectors.tensesBCState);
  
  const { data, loading, error } = useQuery(GET_TENSE, {
    variables: { tense: path[0] },
  });


  return { data, loading, error };
};
