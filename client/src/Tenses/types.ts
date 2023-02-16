import { ICasesTabs } from "../Сommon/types";

interface IPracticeSentence {
  0: {
    id: number;
    missed: string;
    partOne: string;
    partTwo: string;
  };
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
  practice: IPracticeSentence[];
  cases: ICasesTabs[];
}

type IExamples = {
  affirmative: IResponseDataSentence[];
  question: IResponseDataSentence[];
  negative: IResponseDataSentence[];
};

type IExamplePanel = {
  key: number;
  header: string;
  icon: string;
  sentences: {
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
  IPracticeSentence,
  IResponseColumn,
  IDataTable,
  IResponseDataSentence,
  IResponseData,
  IBFFResponse,
  IExamplePanel,
  IExamples,
  ICases
};
