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
}

export interface ISendReportForm {
    isSubmitted: boolean
    setSubmitted: (flag: boolean) => void 
}
