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
    isLoading: boolean
    error: any
}

interface ISubmitAnswer {
    submitAnswer: any
    submittedResult: { [key: number]: boolean } | undefined
}

export type { 
    ITestItem,
    ITestItems,
    ITestContext,
    ISubmitAnswer
 }