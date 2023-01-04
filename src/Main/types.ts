import { ICasesTabs } from "../Сommon/types";

interface IPracticeSentence {
    id: number
    missed: string
    partOne: string
    partTwo: string
}

interface IResponseColumn {
    title: string,
    dataIndex: string,
    key: string,
    render: () => void
}

interface IDataTable {
    auxiliar: string,
    auxiliar_1: string,
    key: string,
    noun: string,
    noun_1: string,
    type: any
}

interface IResponseDataSentence {
    id: number,
    sentence: string
}

interface IResponseData {
    affirmative: IResponseDataSentence[],
    negative: IResponseDataSentence[],
    questions: IResponseDataSentence[],
    table: IDataTable,
    tip: string
}

interface IBFFResponse {
    columns: IResponseColumn[],
    data: IResponseData,
    practice: IPracticeSentence[]
    cases: ICasesTabs[]
}

export type { IPracticeSentence, IResponseColumn, IDataTable, IResponseDataSentence, IResponseData, IBFFResponse };