import React, {
  useState,
  useEffect,
  KeyboardEvent,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';
import { size } from 'lodash';
import * as selectors from '../../../store/selectors';
import { setActualSentenceIndex, setEarnedPoints } from '../../../store/reducers/carousel';
import { useAlertController } from './use-alert-controller';
import { usePracticeData } from './use-practice-data';
import QuestionCarouselInput from './question-carousel-input';
import DefaultCarouselInput from './default-carousel-input';
import { STATUS } from '../constants';
import {
  AlertController,
  CarouselContainer,
  CarouselVariant,
  ContentBlock,
} from '../styled';

const CarouselQuiz = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<string>(STATUS.DEFAULT);
  const [alert, setAlert] = useState<string>('');
  const [showLastBanner, setShowLastBanner] = useState<boolean>(false);
  const { actualSentenceIndex, points } = useSelector(selectors.carouselIndexAndPoints);

  const { sentences } = usePracticeData();

  const alertController = useAlertController({ points, sentences, alert });

  const nullifyConfig = () => {
    setValue('');
    setResult(STATUS.DEFAULT);
    setAlert('');
    setShowLastBanner(false);
  };

  const handleCheck = ({ key }: KeyboardEvent, missedPart: string) => {
    if (key === 'Enter' && value === missedPart) {
      setResult(STATUS.CORRECT);
      setAlert('CORRECT');
      if (actualSentenceIndex + 1 < size(sentences)) {
        dispatch(setActualSentenceIndex(actualSentenceIndex + 1));
        dispatch(setEarnedPoints(points + 1));
        setValue('');
      }
      if (actualSentenceIndex === size(sentences) - 1) {
        setShowLastBanner(true);
        setAlert('LAST');
      }
    } else if (key === 'Enter' && value !== missedPart) {
      setResult('UNCORRECT');
      setAlert('UNCORRECT');
    }
  };

  useEffect(() => {
    nullifyConfig();
  }, [JSON.stringify(sentences)]);

  const inputProps = {
    borderColor: STATUS[result],
    showLastBanner,
    handleCheck,
    sentences,
    actualSentenceIndex,
    value,
    setValue
  };

  return (
  <Carousel dotPosition='left'>
     <CarouselContainer>
     <AlertController>{alertController}</AlertController>
        <ContentBlock>
         <CarouselVariant>{sentences?.[actualSentenceIndex].label}</CarouselVariant>
          {sentences?.[actualSentenceIndex].label == 'Question' ? 
           <QuestionCarouselInput {...inputProps} />  : <DefaultCarouselInput {...inputProps}/> }
        </ContentBlock>
      </CarouselContainer>
  </Carousel>
  );
};

export default CarouselQuiz;