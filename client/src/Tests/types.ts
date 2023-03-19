import { ApolloError } from "@apollo/client"
import { ForwardedRef, RefObject } from "react"
interface ITestItem {
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
interface ITestItems {
    __typename: string
    type: string
    config: Array<ITestItem>
}
interface ITestConfiguration {
    getTests: Array<ITestItems>
}
interface ITestContext {
    data: ITestConfiguration,
    isLoading: boolean
    error: ApolloError | undefined
}

interface ISubmitAnswer {
    submitAnswer: (
        key: string,
        index: number,
        correctAnswer: string,
        answerToSubmit: string,
        textInputRefs?: ForwardedRef<RefObject<HTMLInputElement>[]>
    ) => void
    submittedResult: { [key: number]: number } | undefined
}

export type {
    ITestItem,
    ITestItems,
    ITestContext,
    ISubmitAnswer
}