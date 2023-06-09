import { ApolloError } from "@apollo/client"
import { ForwardedRef, RefObject } from "react"
export interface ITestItem {
    id: number
    textBefore: string
    textAfter: string
    defaultValue: string
    firstPart: string
    secondPart: string
    options: Array<{ label: string, value: string }>
    __typename: string
    label: string
    correctAnswer: string
}
export interface ITestItems {
    __typename: string
    type: string
    config: Array<ITestItem>
}
export interface ITestConfiguration {
    getTests: Array<ITestItems>
}
export interface ITestContext {
    data: ITestConfiguration,
    isLoading: boolean
    error: ApolloError | undefined
}

export interface ISubmitAnswer {
    submitAnswer: (
        key: string,
        index: number,
        correctAnswer: string,
        answerToSubmit: string,
        textInputRefs?: ForwardedRef<RefObject<HTMLInputElement>[]>
    ) => void
    submittedResult: { [key: number]: number } | undefined
}

export interface IPartialInput {
    id: number
    textBefore: string
    textAfter: string
    defaultValue: string
    correctAnswer: string
};

export interface ISelectInput {
    id: number,
    firstPart: string,
    options: Array<{ value: string, label: string }>,
    secondPart: string,
    correctAnswer: string
}

export interface IAnswerResult {
    index: number
    selectedOptions: { [key: number]: number }
}

export interface ISelect {
    index: number
    correctAnswer: string
    options: Array<{ value: string, label: string }>
    handleChange: (value: string, correctAnswer: string, index: number) => void
    selectedOptions: { [key: number]: number }
};

export interface ITextInput {
    index: number
    correctAnswer: string
    textInputRefs: ForwardedRef<RefObject<HTMLInputElement>[]>
}