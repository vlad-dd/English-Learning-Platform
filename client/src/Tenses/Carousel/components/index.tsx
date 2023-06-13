import { useEffect } from 'react';
import { Carousel } from 'antd';
import QuestionCarouselInput from './question-carousel-input';
import DefaultCarouselInput from './default-carousel-input';
import { useCarouselWidget } from './use-carousel-widget';
import { IPracticeSentences } from '../../types';
import { ALERT_BANNER_DATA_TEST_ID, CAROUSEL_QUIZ_DATA_TEST_ID } from '../../constants';
import {
  AlertController,
  CarouselContainer,
  CarouselVariant,
  ContentBlock,
} from '../styled';

const CarouselQuiz = () => {
  const {
    sentences,
    alertController,
    actualSentenceIndex,
    questionProps,
    nullifyProgress,
  } = useCarouselWidget();

  useEffect(() => {
    nullifyProgress()
  }, [JSON.stringify(sentences)]);

  const { label, ...currentItem } = sentences?.find((_: IPracticeSentences, i: number) => i === actualSentenceIndex)!;

  return (
    <Carousel data-testid={CAROUSEL_QUIZ_DATA_TEST_ID} adaptiveHeight dotPosition='left'>
      <CarouselContainer>
        <AlertController data-testid={ALERT_BANNER_DATA_TEST_ID}>
          {alertController}
        </AlertController>
        <ContentBlock>
          <CarouselVariant>{label}</CarouselVariant>
          {label == 'Question' ?
            <QuestionCarouselInput currentItem={currentItem} {...questionProps} />
            :
            <DefaultCarouselInput currentItem={currentItem} {...questionProps} />
          }
        </ContentBlock>
      </CarouselContainer>
    </Carousel>
  );
};

export default CarouselQuiz;
