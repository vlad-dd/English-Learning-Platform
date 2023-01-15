import { useSelector } from "react-redux";
import * as selectors from "../../../store/selectors";
import { useDatabase } from "../../../Hooks";

export const useTenseConfiguration = () => {
    
  const { path } = useSelector(selectors.tensesBCState);

  const { isLoading, requestError } = useDatabase(path[path.length - 1]);

  const configuration = useSelector(selectors.tenseConfiguration);

  return { configuration, isLoading, requestError };
};
