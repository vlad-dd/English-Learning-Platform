import { Dispatch, ReactNode, SetStateAction } from "react";
import { ICasesTabs } from "../Сommon/types";
export interface IPracticeSentences {
  __typename: string
  id: number;
  label: string;
  missed: string;
  partOne: string;
  partTwo: string;
}

export interface IResponseColumn {
  title: string;
  dataIndex: string;
  key: string;
  render: () => JSX.Element;
}

export interface IDataTable {
  auxiliar: string;
  auxiliar_1: string;
  key: string;
  noun: string;
  noun_1: string;
  type: string;
}

export interface IResponseDataSentence {
  id: number;
  sentence: string;
}

export interface IResponseData {
  affirmative: IResponseDataSentence[];
  negative: IResponseDataSentence[];
  questions: IResponseDataSentence[];
  table: IDataTable;
  tip: string;
}
export interface IBFFResponse {
  columns: IResponseColumn[];
  data: IResponseData;
  practice: IPracticeSentences[];
  cases: ICasesTabs[];
}

export type IExamples = {
  affirmative: IResponseDataSentence[];
  question: IResponseDataSentence[];
  negative: IResponseDataSentence[];
};

export type IExamplePanel = {
  __typename: string
  key: number;
  header: string;
  icon: string;
  sentences: {
    __typename: string
    id: number;
    sentence: string;
  }[]
};
export interface ICases {
  icon: string;
  key: string;
  label: string;
  titles: { description: string }[]
}

export interface IStatus {
  [key: string]: string
}

export interface IAlerts {
  [key: string]: React.ReactNode
}

export interface IPercentage {
  [key: string]: React.ReactNode
}

export interface IUseAlertController {
  points: number,
  sentences: IPracticeSentences[],
  alert: string
}
export interface ICarouselInput {
  borderColor: string
  showLastBanner: boolean,
  value: string,
  handleCheck: ({ key }: any, missedPart: string) => void,
  setValue: Dispatch<SetStateAction<string>>,
  currentItem: Omit<IPracticeSentences, "label">
};

export type IQuestionProps = Omit<ICarouselInput, "currentItem">;
export interface ICarouselWidget {
  sentences: IPracticeSentences[]
  actualSentenceIndex: number
  alertController: ReactNode
  questionProps: IQuestionProps
  nullifyProgress: () => void
}

