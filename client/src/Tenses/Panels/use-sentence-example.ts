import { useSelector } from 'react-redux';
import * as selectors from '../../store/selectors';

export const useSentenceExamples = () => {

  const data = useSelector(selectors.tenseConfiguration);

    return { examples: data[0]?.examples };
}