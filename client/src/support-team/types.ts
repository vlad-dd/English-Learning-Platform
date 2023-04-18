import { ApolloError } from "@apollo/client"

export interface IReport {
    application: string
    description: string
}

export interface ReportWidget {
    report: IReport
    setReport: (report: IReport) => void
    isDisabled: boolean
    minLengthError: boolean
    maxLengthError: boolean
    minLengthGate: JSX.Element | string
    maxLengthGate: JSX.Element | string
    selectApplication: (application: string) => void
    handleTextArea: (description: string) => void
    setTouchedByMouse: (touched: boolean) => void
    sendReport: () => void
    isLoading: boolean,
    error: ApolloError | undefined
}

export interface ISendReportForm {
    isSubmitted: boolean
    setSubmitted: (flag: boolean) => void 
}
