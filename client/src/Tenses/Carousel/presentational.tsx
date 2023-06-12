import { FormattedMessage } from 'react-intl';
import { Title } from '../../Сommon';
import CarouselQuiz from './components';
import { PRACTICE_TITLE_DATA_TEST_ID } from '../constants';

const TensePractice = () => {
  return (
    <>
      <Title styles={{ paddingTop: '25px' }}>
        <FormattedMessage id={PRACTICE_TITLE_DATA_TEST_ID} />
      </Title>
      <CarouselQuiz />
    </>
  );
};

export default TensePractice;
