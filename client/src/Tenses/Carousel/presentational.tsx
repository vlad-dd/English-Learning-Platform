import React from 'react';
import { Title } from '../../Сommon';
import CarouselQuiz from './components';
import { FormattedMessage } from 'react-intl';

const TensePractice = () => {
  return (
    <>
      <Title styles={{ paddingTop: '25px' }}>
        <FormattedMessage id="tense_practice" />
      </Title>
      <CarouselQuiz />
    </>
  );
};

export default TensePractice;
