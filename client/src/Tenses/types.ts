import { ICasesTabs } from "../Сommon/types";
interface IPracticeSentences {
  __typename: string
  id: number;
  missed: string;
  partOne: string;
  partTwo: string;
}

interface IResponseColumn {
  title: string;
  dataIndex: string;
  key: string;
  render: () => JSX.Element;
}

interface IDataTable {
  auxiliar: string;
  auxiliar_1: string;
  key: string;
  noun: string;
  noun_1: string;
  type: string;
}

interface IResponseDataSentence {
  id: number;
  sentence: string;
}

interface IResponseData {
  affirmative: IResponseDataSentence[];
  negative: IResponseDataSentence[];
  questions: IResponseDataSentence[];
  table: IDataTable;
  tip: string;
}

interface IBFFResponse {
  columns: IResponseColumn[];
  data: IResponseData;
  practice: IPracticeSentences[];
  cases: ICasesTabs[];
}

type IExamples = {
  affirmative: IResponseDataSentence[];
  question: IResponseDataSentence[];
  negative: IResponseDataSentence[];
};

type IExamplePanel = {
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
interface ICases {
  icon: string;
  key: string;
  label: string;
  titles: { description: string }[]
}

export type {
  IResponseColumn,
  IDataTable,
  IResponseDataSentence,
  IPracticeSentences,
  IResponseData,
  IBFFResponse,
  IExamplePanel,
  IExamples,
  ICases
};
