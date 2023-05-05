import { ApolloError } from "@apollo/client"
export interface IReportDialog {
    isOpen: boolean
    title: string
    description: string
    handleClose: () => void
    createReportAppeal: (reason: string, additionalInformation: string) => void
    isLoading: boolean
    error: undefined | ApolloError

}
