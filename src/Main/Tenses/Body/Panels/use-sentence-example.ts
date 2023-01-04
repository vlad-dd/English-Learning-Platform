import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { BsQuestionCircle } from 'react-icons/bs';
import { IPanelProps } from "../types";

export const useSentenceExamples = () => {
    const sentenseExamples: IPanelProps[]  = [
        {
          key: 1,
          header: 'Affirmative sentense examples',
          translationData: '[0].data[0].affirmative',
          Icon: CheckOutlined,
        },
        {
          key: 2,
          header: 'Negative sentense examples',
          translationData: '[0].data[0].negative',
          Icon: CloseOutlined,
        },
        {
          key: 3,
          header: 'Question sentense examples',
          translationData: '[0].data[0].questions',
          Icon: BsQuestionCircle,
        },
      ];
    return { sentenseExamples };
}