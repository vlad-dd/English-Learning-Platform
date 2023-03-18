import { ForwardedRef, RefObject } from "react"

interface ITestItem {
    __typename?: string
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
    data: ITestConfiguration
    type: string
    isLoading: boolean
    error: any
}

interface ISubmitAnswer {
    submitAnswer: (
        key: string,
        index: number,
        correctAnswer: string,
        answerToSubmit: string,
        textInputRefs?: ForwardedRef<RefObject<HTMLInputElement>[]>
    ) => void
    submittedResult: { [key: number]: boolean } | undefined
}

export type {
    ITestItem,
    ITestItems,
    ITestContext,
    ISubmitAnswer
}