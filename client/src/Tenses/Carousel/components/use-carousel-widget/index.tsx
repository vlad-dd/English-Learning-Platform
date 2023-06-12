import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { size } from "lodash";
import * as selectors from '../../../../store/selectors';
import { setActualSentenceIndex, setEarnedPoints } from "../../../../store/reducers/carousel";
import { usePracticeData } from "../use-practice-data";
import { useAlertController } from "../use-alert-controller";
import { ALERT_STATUS, BORDER_STATUS } from "../../../constants";

export const useCarouselWidget = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('');
    const [result, setResult] = useState<string>(BORDER_STATUS.DEFAULT);
    const [alert, setAlert] = useState<string>('');
    const [showLastBanner, setShowLastBanner] = useState<boolean>(false);
    const { actualSentenceIndex = 0, points = 0 } = useSelector(selectors.carouselIndexAndPoints);

    const { sentences } = usePracticeData();

    const alertController = useAlertController({ points, sentences, alert });
    
    const nullifyProgress = () => {
        setValue('');
        setResult(BORDER_STATUS.DEFAULT);
        setAlert('');
        setShowLastBanner(false);
    };

    const handleCheck = ({ key }: KeyboardEvent, missedPart: string) => {
        if (key === 'Enter' && value === missedPart) {
            setResult(BORDER_STATUS.CORRECT);
            setAlert(ALERT_STATUS.CORRECT);
            if (actualSentenceIndex + 1 < size(sentences)) {
                dispatch(setActualSentenceIndex(actualSentenceIndex + 1));
                dispatch(setEarnedPoints(points + 1));
                setValue('');
            }
            if (actualSentenceIndex === size(sentences) - 1) {
                setShowLastBanner(true);
                setAlert(ALERT_STATUS.LAST);
            }
        } else if (key === 'Enter' && value !== missedPart) {
            setResult(BORDER_STATUS.UNCORRECT);
            setAlert(ALERT_STATUS.UNCORRECT);
        }
    };

    const questionProps = {
        borderColor: BORDER_STATUS[result],
        showLastBanner,
        handleCheck,
        value,
        setValue
    };

    return {
        sentences,
        actualSentenceIndex,
        alertController,
        questionProps,
        nullifyProgress
    };
};
